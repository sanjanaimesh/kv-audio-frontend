import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { addToCart, loadCart } from "../../utils/cart";


export default function ProductOverview() {

    const params = useParams();
    const key = params.key;

    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0); // Selected image index

    useEffect(
        () => {
            if(key) {
                axios.get(`http://localhost:3000/api/products/${key}`).then(
                    (res) => {
                        setProduct(res.data);
                        setLoadingStatus("loaded")
                        console.log(res.data)
                    }
                ).catch(
                    (err) => {
                        console.log(err)
                        setLoadingStatus("error")
                    }
                )
            }
        },[key]
    )

    return (
        <div className="w-full min-h-screen bg-gray-50 p-8">
            {
                loadingStatus === "loading" && 
                <div className="flex justify-center items-center h-screen">
                    <div className="text-xl text-gray-600">Loading...</div>
                </div>
            }
            {
                loadingStatus === "loaded" && product && 
                <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Image Section */}
                        <div className="md:w-1/2 p-8">
                            {/* Main Image */}
                            {product.image && product.image.length > 0 ? (
                                <div className="mb-4">
                                    <img 
                                        src={product.image[selectedImage]} 
                                        alt={product.name}
                                        className="w-full h-96 object-cover rounded-lg border-2 border-gray-200"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-gray-400">No Image</span>
                                </div>
                            )}
                            
                            {/* Thumbnail Images */}
                            {product.image && product.image.length > 1 && (
                                <div className="flex gap-3 overflow-x-auto">
                                    {product.image.map((img, index) => (
                                        <img 
                                            key={index}
                                            src={img} 
                                            alt={`${product.name} ${index + 1}`}
                                            onClick={() => setSelectedImage(index)}
                                            className={`w-20 h-20 object-cover rounded cursor-pointer transition-all ${
                                                selectedImage === index 
                                                    ? 'border-4 border-blue-500 scale-105' 
                                                    : 'border-2 border-gray-300 hover:border-blue-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Details Section */}
                        <div className="md:w-1/2 p-8">
                            <div className="mb-4">
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                                    {product.category}
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-blue-600">
                                    Rs. {product.price?.toLocaleString()}
                                </span>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    Details
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {product.descrition}
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    Dimensions
                                </h3>
                                <p className="text-gray-600">
                                    {product.dimensions}
                                </p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-700 font-semibold">Availability:</span>
                                    {product.availability ? (
                                        <span className="text-green-600 font-semibold flex items-center gap-1">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                            </svg>
                                            In Stock
                                        </span>
                                    ) : (
                                        <span className="text-red-600 font-semibold">Out of Stock</span>
                                    )}
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="text-sm text-gray-500">Product Key: {product.key}</p>
                            </div>

                            <button 
                                onClick={()=>{
                                    addToCart(product.key,1);
                                    console.log(loadCart())
                                }}
                                disabled={!product.availability}
                                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                                    product.availability 
                                        ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' 
                                        : 'bg-gray-400 cursor-not-allowed'
                                }`}
                            >
                                {product.availability ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                        </div>
                    </div>
                </div>
            }
            {
                loadingStatus === "error" && 
                <div className="flex justify-center items-center h-screen">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Product</h2>
                        <p className="text-gray-600">Could not load product details. Please try again.</p>
                    </div>
                </div>
            }
        </div>
    )
}