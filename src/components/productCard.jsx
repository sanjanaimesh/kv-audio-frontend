import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl m-4">
      {/* Image Section */}
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        <img
          src={item.image?.[0] || "https://via.placeholder.com/150"}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.availability && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            In Stock
          </div>
        )}
        {!item.availability && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            Out of Stock
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>

        {/* Product Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 h-14">
          {item.name}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 h-16">
          {item.descrition}
        </p>

        {/* Dimensions */}
        <div className="flex items-center text-gray-500 text-xs mb-4">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
          <span>{item.dimensions}</span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Price per day</span>
            <span className="text-2xl font-bold text-green-600">
              ${item.price}
            </span>
          </div>
          <Link to={"/product/"+item.key}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}