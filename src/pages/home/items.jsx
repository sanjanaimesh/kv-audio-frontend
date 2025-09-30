import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";


export default function Item() {
  const [state, setState] = useState("loading"); // loading, success, error
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (state === "loading") {
      axios
        .get("http://localhost:3000/api/products")
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          setState("success");
        })
        .catch((err) => {
          toast.error(err?.response?.data?.error || "An error occurred");
          setState("error");
        });
    }
  }, [state]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 w-full">
      
     

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Loading State */}
        {state === "loading" && (
          <div className="w-full h-96 flex flex-col justify-center items-center">
            <div className="w-16 h-16 border-4 rounded-full border-gray-200 border-t-blue-600 animate-spin"></div>
            <p className="mt-4 text-gray-600 font-medium">
              Loading products...
            </p>
          </div>
        )}

        {/* Empty State */}
        {state === "success" && items.length === 0 && (
          <div className="w-full h-96 flex flex-col justify-center items-center">
            <div className="text-6xl mb-4">📦</div>
            <p className="text-xl text-gray-600 font-medium">
              No products available
            </p>
          </div>
        )}

        {/* Success State with Products */}
        {state === "success" && items.length > 0 && (
          <div className="flex flex-wrap justify-center">
            {items.map((item) => (
              <ProductCard key={item.key} item={item} />
            ))}
          </div>
        )}

        {/* Error State */}
        {state === "error" && (
          <div className="w-full h-96 flex flex-col justify-center items-center">
            <div className="text-6xl mb-4">⚠️</div>
            <p className="text-xl text-gray-600 font-medium">
              Failed to load products
            </p>
            <button
              onClick={() => setState("loading")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}