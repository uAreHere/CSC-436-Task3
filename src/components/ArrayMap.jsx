import products from "../utilities/products";

const ArrayMap = () => {
  return (
    <div>
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
        Available Products
      </h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayMap;
