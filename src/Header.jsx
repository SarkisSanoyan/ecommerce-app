function Header({
    cartHandler,
    totalPieces,
    totalPrice,
    orders,
    checkoutHandler,
    searchQuery,
    setSearchQuery,
    searchHandler
}) {

    const handleSearchClick = () => {
        searchHandler(searchQuery);
    };

    return (
        <>
            <div className="bg-slate-700 fixed w-full top-0 p-2 text-white shadow-md">
                <div className="flex justify-between items-center">
                    <a id="logo" href="/" className="flex items-center text-3xl">
                        <span id ="logo_text" className="hidden sm:inline">Computers World</span>
                        <i className="fa-solid fa-laptop sm:ml-2 text-xl sm:text-3xl"></i>
                    </a>


                    <div className="search flex items-center bg-slate-500 rounded-md p-1 w-full sm:w-[40rem] relative">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search computer"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow p-2 text-slate-900 rounded-l-lg focus:outline-none"
                        />
                        <i
                            className="fa-solid fa-magnifying-glass text-white p-2 rounded-r-md cursor-pointer transition"
                            onClick={handleSearchClick}
                        ></i>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            className="bg-white text-slate-900 p-2 flex items-center shadow-lg hover:bg-slate-900 hover:text-white transition"
                            onClick={cartHandler}
                        >
                            <i className="fa-solid fa-cart-shopping mr-2"></i>
                            <span>{totalPieces}</span>
                        </button>

                        {orders.length > 0 && (
                            <button
                                className="bg-red-800 text-white p-2 shadow-lg hover:bg-red-500 transition"
                                onClick={checkoutHandler}
                            >
                                EMPTY
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
