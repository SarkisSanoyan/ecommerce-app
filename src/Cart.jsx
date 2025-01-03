function Cart({ cartHandler, orders, deleteOrder, plusOrder, minusOrder }) {
    const total = orders.reduce((sum, el) => sum + el.price * el.quantity, 0);

    return (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center">
            <div className="relative bg-slate-900 text-white p-6 m-2 text-left opacity-90 shadow-lg w-[40rem] max-h-[80vh] overflow-auto rounded-lg flex flex-col">
                <button
                    className="absolute top-4 right-4 text-white bg-red-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500"
                    onClick={cartHandler}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <h2 className="text-xl text-center font-semibold text-white mb-6">Shopping Cart</h2>

                <div className="overflow-y-auto flex-grow">
                    {orders.map((el) => (
                        <div
                            key={el.id}
                            className="flex items-center justify-between border-b border-gray-300 py-2"
                        >
                            <span className="text-md text-white flex-1">{el.title}</span>
                            <div className="flex items-center space-x-6 justify-center">
                                <button
                                    className="bg-slate-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-700 focus:outline-none"
                                    onClick={() => minusOrder(el.id)}
                                >
                                    <i className="fa-solid fa-minus"></i>
                                </button>

                                <span className="text-md text-white text-center w-8 m-4">{el.quantity}</span>

                                <button
                                    className="bg-slate-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-700 focus:outline-none"
                                    onClick={() => plusOrder(el.id)}
                                >
                                    <i className="fa-solid fa-plus"></i>
                                </button>

                                <span className="text-md text-white">${(el.price * el.quantity)}</span>

                                <button
                                    className="bg-slate-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-700 focus:outline-none"
                                    onClick={() => deleteOrder(el.id)}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-right font-semibold text-xl text-white">
                    <span>Total: </span>
                    <span className="text-lg">${total}</span>
                </div>
            </div>
        </div>
    );
}

export default Cart;
