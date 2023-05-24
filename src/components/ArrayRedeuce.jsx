import products from "../utilities/products";

const ArrayReduce = () => {
  const totalPrice = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  return (
    <div>
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
        Total Price
      </h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}:
            <span className="text-danger">
              <strong>Item Price: {product.price}</strong>
            </span>
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default ArrayReduce;
