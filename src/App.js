import { useState } from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Camiseta React', price: 50 },
    { id: 2, name: 'Camiseta Vue', price: 40 },
    { id: 3, name: 'Camiseta Angular', price: 30 },
    { id: 4, name: 'Camiseta Svelte', price: 20 },
  ]);
  const [cart, setCart] = useState([]);
  const date = new Date().getFullYear();
  return (
    <>
      <Header title="Tienda virtual" />
      <h1>Lista de productos</h1>
      {products.map((product) => (
        <Product key={product.id} products={products} product={product} cart={cart} setCart={setCart} />
      ))}
      <Cart cart={cart} setCart={setCart} />
      <Footer date={date} />
    </>
  );
}

export default App;
