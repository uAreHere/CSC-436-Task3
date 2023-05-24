import products from "../utilities/products";

const SaleItems = () => {
  const saleProducts = products.filter((product) => product.onSale);

  return (
    <div>
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
        LAST CHANCE SALE!
      </h1>
      <ul>
        {saleProducts.map((product) => (
          <li key={product.id}>
            {product.name} -- ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaleItems;
