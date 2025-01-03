function ProductItem({ item, addOrder }) {
    return (
        <div className="flex flex-col items-center shadow-sm hover:shadow-md cursor-pointer rounded-lg m-2 p-3 bg-white">
            <img
                src={item.src}
                alt={item.title}
                className="w-32 h-32 object-fill rounded-t-lg mb-3"
            />
            <h2 className="text-md font-semibold text-gray-800 mb-1">{item.title}</h2>
            <h3 className="text-sm text-gray-600 font-semibold mb-3">${item.price}</h3>
            <button
                className="bg-slate-700 text-white text-sm px-3 py-1 hover:bg-slate-900 transition"
                onClick={() => addOrder(item)}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default ProductItem;
