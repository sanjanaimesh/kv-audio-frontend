export default function ProductCard(props) {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={props.img}
        alt={props.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{props.name}</h2>
        <p className="text-gray-600 text-sm mt-1">{props.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-indigo-600">
            LKR {props.price}
          </span>
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
