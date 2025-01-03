import ProductItem from "./ProductItem";

function ProductsList({ products, addOrder }) {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {products.map((el) => (
                <ProductItem key={el.id} item={el} addOrder={addOrder} />
            ))}
        </div>

    )
}

export default ProductsList;
