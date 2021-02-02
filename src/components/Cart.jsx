import './cart.css';
import Product from './Product';
const Cart = ({ cart, setCart }) => (
  <div className="cart">
    <h2>Tu carrito de compras</h2>
    {cart.length === 0 ? <p>No hay elementos</p> : cart.map((product) => <Product key={product.id} product={product} cart={cart} setCart={setCart} />)}
  </div>
);

export default Cart;
