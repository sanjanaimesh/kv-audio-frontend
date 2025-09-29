import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const sampleArr = [
    {
        key: "prod001",
        name: "Wireless Headphones",
        price: 12000,
        category: "audio",
        dimensions: "20 x 18 x 8 cm",
        descrition: "High-quality wireless headphones with noise cancellation.",
        availability: "available",
        image: [
            "https://via.placeholder.com/150/0000FF/808080?text=Headphones",
            "https://via.placeholder.com/150/FF0000/FFFFFF?text=Headphones+2"
        ]
    },
    {
        key: "prod002",
        name: "Bluetooth Speaker",
        price: 8500,
        category: "audio",
        dimensions: "15 x 10 x 10 cm",
        descrition: "Portable Bluetooth speaker with deep bass and waterproof design.",
        availability: "available",
        image: [
            "https://via.placeholder.com/150/008000/FFFFFF?text=Speaker"
        ]
    },
    {
        key: "prod003",
        name: "LED Stage Light",
        price: 25000,
        category: "light",
        dimensions: "30 x 25 x 20 cm",
        descrition: "Professional LED stage light with multiple color modes.",
        availability: "available",
        image: [
            "https://via.placeholder.com/150/FFD700/000000?text=Stage+Light"
        ]
    },
    {
        key: "prod004",
        name: "Studio Microphone",
        price: 18000,
        category: "audio",
        dimensions: "12 x 6 x 6 cm",
        descrition: "Studio-grade condenser microphone for recording and streaming.",
        availability: "available",
        image: [
            "https://via.placeholder.com/150/FF69B4/000000?text=Microphone"
        ]
    },
    {
        key: "prod005",
        name: "Smart LED Strip",
        price: 6000,
        category: "light",
        dimensions: "500 cm (length)",
        descrition: "RGB smart LED strip light with app and voice control support.",
        availability:"available",
        image: [
            "https://via.placeholder.com/150/00FFFF/000000?text=LED+Strip"
        ]
    }
];

export default function AdminItemPage() {
    const [items, setItem] = useState(sampleArr);
    
    return (
        <div className="w-full h-full relative">
            <table>
                <thead>
                    <tr>
                        <th>key</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Dimensions</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((product) => {
                            console.log(product)
                            return (
                                <tr key={product.key}>
                                    <td>{product.key}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.dimensions}</td>
                                    <td>{product.availability}</td>
                                </tr>
                        
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/admin/items/add">
                <CiCirclePlus className="text-[100px] text-blue-700 absolute right-2 bottom-2 hover:text-red-800 " />
            </Link>
        </div>
    )
}