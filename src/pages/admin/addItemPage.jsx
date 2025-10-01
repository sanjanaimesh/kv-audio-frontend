import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import mediaUpload from "../../utils/meadiaUpload";

export default function AddProductPage() {
    const [productKey, setProductKey] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState("audio");
    const [productDimension, setProductDimension] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImages, setProductImages] = useState([])
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleAddItem() {

        console.log(productImages)
        const promises = []
        for (let i = 0; i < productImages.length; i++) {
            console.log(productImages[i])
            const promise = mediaUpload(productImages[i])
            promises.push(promise)
        }



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
            // Promise.all(promises).then(
            //     (result) => {
            //         console.log(result)
            //     }
            // ).catch(
            //     (err) => {
            //         console.log(err)
            //         toast.err(err)
            //     }
            // )
            const imageUrl = await Promise.all(promises)
            const result = await axios.post(
                "http://localhost:3000/api/products",
                {
                    key: productKey,
                    name: productName,
                    price: Number(productPrice),
                    category: productCategory,
                    dimensions: productDimension,
                    descrition: productDescription,
                    image : imageUrl
                },
                {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
            );

            console.log(result);
            toast.success("Product added successfully!");
            navigate("/admin/items", { replace: true });

        } catch (error) {
            console.error(error);
            if (error.response) {
                toast.error(error.response.data.message || error.response.data.error || "Failed to add product");
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
            <h1 className="text-2xl font-bold mb-4">Add Items</h1>

            <div className="w-[400px] border rounded-lg shadow-md p-6 flex flex-col gap-3">
                <input
                    onChange={(e) => setProductKey(e.target.value)}
                    value={productKey}
                    type="text"
                    placeholder="Product Key"
                    className="border px-3 py-2 rounded"
                    disabled={loading}
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
                <input type="file" multiple onChange={(e) => { setProductImages(e.target.files) }} />

                <button
                    onClick={handleAddItem}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add"}
                </button>

                <button
                    //onClick={handleCancel}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    Cancel
                </button>


            </div>
        </div>
    );
}
