import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";



export default function AdminItemPage() {
    const [items, setItems] = useState([]);
    const [itemsLoaded, setItemLoaded] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (!itemsLoaded) {

            const token = localStorage.getItem("token");

            axios
                .get("http://localhost:3000/api/products", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    console.log(res.data);
                    setItems(res.data);
                    setItemLoaded(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    }, [itemsLoaded]);

    const handleDelete = (key) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            setItems(items.filter((item) => item.key !== key));  
            const token = localStorage.getItem("token");
            axios.delete(`http://localhost:3000/api/products/${key}`, {
                headers: { Authorization: `Bearer ${token}` }
            }).then(
                (res) => {
                    console.log(res.data);
                    setItemLoaded(false)
                }
            ).catch((err) => {
                console.log(err);
            })


        }
    };

    return (
        <div className="w-full h-full relative p-6 bg-gray-100">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <table className="w-full border-collapse text-left">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="p-3">Key</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Dimensions</th>
                            <th className="p-3">Availability</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((product, idx) => (
                            <tr
                                key={product.key}
                                className={`border-b hover:bg-gray-50 transition ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    }`}
                            >
                                <td className="p-3 font-mono text-sm text-gray-700">{product.key}</td>
                                <td className="p-3 font-medium text-gray-900">{product.name}</td>
                                <td className="p-3 text-gray-700">LKR {product.price}</td>
                                <td className="p-3 capitalize text-gray-700">{product.category}</td>
                                <td className="p-3 text-gray-600">{product.dimensions}</td>
                                <td className="p-3">
                                    <span
                                        className={`px-2 py-1 text-xs font-semibold rounded-full ${product.availability === "available"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {product.availability === "available"
                                            ? "Available"
                                            : "Not Available"}
                                    </span>
                                </td>
                                <td className="p-3 flex gap-2 justify-center">
                                    <button onClick={() => navigate(`/admin/items/edit`, {state:product})} className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">Edit</button>
                                    
                                    <button
                                        onClick={() => handleDelete(product.key)}
                                        className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Button */}
            <Link to="/admin/items/add">
                <CiCirclePlus className="text-[80px] text-blue-600 absolute right-6 bottom-6 cursor-pointer hover:text-red-600 transition" />
            </Link>
        </div>
    );
}
