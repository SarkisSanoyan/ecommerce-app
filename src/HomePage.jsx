import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductsList from './ProductsList';
import Cart from './Cart';
import SearchResult from './SearchResult';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products/')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setFilteredProducts(data); // Initialize filtered products with all products
            })
            .catch(error => console.error('Fetch error:', error));

        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setOrders(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        if (orders.length > 0) {
            localStorage.setItem('cart', JSON.stringify(orders));
        }
    }, [orders]);

    const searchHandler = (query) => {
        setSearchQuery(query);
        if (query === "") {
            setFilteredProducts(products);
        } else {
            const results = products.filter(product =>
                product.title && product.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(results);
        }
    };

    const addOrder = order => {
        const index = orders.findIndex(el => el.id === order.id);
        if (index === -1) {
            let newOrder = { ...order, quantity: 1 };
            setOrders([...orders, newOrder]);
        } else {
            let newOrders = orders.map((el, i) => {
                if (i === index) el.quantity++;
                return el;
            });
            setOrders(newOrders);
        }
    };

    const deleteOrder = id => {
        const newOrders = orders.filter(el => el.id !== id);
        setOrders(newOrders);
    };

    const plusOrder = id => {
        const newOrders = orders.map(el => {
            if (el.id === id) el.quantity++;
            return el;
        });
        setOrders(newOrders);
    };

    const minusOrder = id => {
        const newOrders = orders.map(el => {
            if (el.id === id) el.quantity = el.quantity > 1 ? el.quantity - 1 : el.quantity;
            return el;
        });
        setOrders(newOrders);
    };

    const cartHandler = () => {
        setShowCart(!showCart);
    };

    const checkoutHandler = () => {
        setOrders([]);
        localStorage.removeItem('cart');
        alert(`Cart's content is removed successfully! Your cart is now empty.`);
    };

    const totalPieces = orders.reduce((sum, el) => sum + el.quantity, 0);
    const totalPrice = orders.reduce((sum, el) => sum + el.price * el.quantity, 0);

    return (
        <>
            <Header
                cartHandler={cartHandler}
                totalPieces={totalPieces}
                totalPrice={totalPrice}
                orders={orders}
                checkoutHandler={checkoutHandler}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                searchHandler={searchHandler}
            />

            {searchQuery.length > 0 ? (
                <SearchResult
                    searchQuery={searchQuery}
                    filteredProducts={filteredProducts}
                    addOrder={addOrder}
                />
            ) : (
                <div className='container mx-auto mt-14'>
                    <ProductsList products={products} addOrder={addOrder} />
                </div>
            )}

            {showCart && (
                <Cart
                    cartHandler={cartHandler}
                    orders={orders}
                    deleteOrder={deleteOrder}
                    plusOrder={plusOrder}
                    minusOrder={minusOrder}
                />
            )}
        </>
    );
}

export default HomePage;
