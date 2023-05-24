import products from "../utilities/products";

const SortItems = () => {
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  return (
    <div>
      <h2 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
        Sorted By Price
      </h2>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} -- ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortItems;
