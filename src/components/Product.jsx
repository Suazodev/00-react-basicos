const Product = ({ product, cart, setCart, products }) => {
  const { name, price, id } = product;
  const productSelected = (id) => {
    const product = products.filter((product) => product.id === id);
    setCart([...cart, product[0]]);
  };
  const removeProduct = (id) => {
    const products = cart.filter((product) => product.id !== id);
    setCart(products);
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>

      {products ? (
        <button type="button" onClick={() => productSelected(id)}>
          Buy
        </button>
      ) : (
        <button type="button" onClick={() => removeProduct(id)}>
          Remove
        </button>
      )}
    </div>
  );
};

export default Product;
