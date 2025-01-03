import ProductItem from './ProductItem';

function SearchResult({ searchQuery, filteredProducts, addOrder }) {
    return (
        <div className="container mx-auto mt-14">
            {searchQuery && filteredProducts.length === 0 ? (
                <div className="text-center text-red-600 bg-gray-100 rounded-lg p-4 mt-20 max-w-sm mx-auto">
                    <h2 className="text-xl font-semibold mb-4">No products found</h2>
                    <p className="text-sm text-gray-600">We couldn't find any products that match your search. Please try again with different keywords.</p>
                </div>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                    {filteredProducts.map(product => (
                        <ProductItem key={product.id} item={product} addOrder={addOrder} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchResult;
