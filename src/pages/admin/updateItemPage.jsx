import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateItemPage() {
    const location = useLocation();   
    const navigate = useNavigate();

    const [productKey, setProductKey] = useState(location.state?.key || "");
    const [productName, setProductName] = useState(location.state?.name || "");
    const [productPrice, setProductPrice] = useState(location.state?.price || 0);
    const [productCategory, setProductCategory] = useState(location.state?.category || "audio");
    const [productDimension, setProductDimension] = useState(location.state?.dimensions || "");
    const [productDescription, setProductDescription] = useState(location.state?.descrition || "");
    const [loading, setLoading] = useState(false);

    async function handleUpdateItem() {
        if (!productKey || !productName || !productPrice || !productDimension || !productDescription) {
            toast.error("Please fill all fields");
            return;
        }

        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("Please login first");
            return;
        }

        setLoading(true);

        try {
            const result = await axios.put(   
                `http://localhost:3000/api/products/${productKey}`,
                {
                    name: productName,
                    price: Number(productPrice),
                    category: productCategory,
                    dimensions: productDimension,
                    descrition: productDescription,
                },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            console.log(result);
            toast.success("Product updated successfully!");
            navigate("/admin/items", { replace: true });
        } catch (error) {
            console.error(error);
            if (error.response) {
                toast.error(error.response.data.message || error.response.data.error || "Failed to update product");
            } else {
                toast.error("Network error. Please check your connection");
            }
        } finally {
            setLoading(false);
        }
    }

    function handleCancel() {
        navigate("/admin/items");
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-6">
            <h1 className="text-2xl font-bold mb-4">Update Item</h1>

            <div className="w-[400px] border rounded-lg shadow-md p-6 flex flex-col gap-3">
                <input
                
                    onChange={(e) => setProductKey(e.target.value)}
                    value={productKey}
                    type="text"
                    placeholder="Product Key"
                    className="border px-3 py-2 rounded"
                    disabled
                />

                <input
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                    type="text"
                    placeholder="Product Name"
                    className="border px-3 py-2 rounded"
                    disabled={loading}
                />

                <input
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                    type="number"
                    placeholder="Product Price"
                    className="border px-3 py-2 rounded"
                    disabled={loading}
                />

                <select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="border px-3 py-2 rounded"
                    disabled={loading}
                >
                    <option value="audio">Audio</option>
                    <option value="light">Light</option>
                </select>

                <input
                    onChange={(e) => setProductDimension(e.target.value)}
                    value={productDimension}
                    type="text"
                    placeholder="Product Dimensions"
                    className="border px-3 py-2 rounded"
                    disabled={loading}
                />

                <textarea
                    onChange={(e) => setProductDescription(e.target.value)}
                    value={productDescription}
                    type="text"
                    placeholder="Product Description"
                    className="border px-3 py-2 rounded"
                    disabled={loading}
                />

                <button
                    onClick={handleUpdateItem}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    {loading ? "Updating..." : "Update"}
                </button>

                <button
                    onClick={handleCancel}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    Cancel
                </button>

                
            </div>
        </div>
    );
}
