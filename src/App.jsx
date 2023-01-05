import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import ProductDetails from './components/ProductDetails';
import { CartProvider } from './contexts/CartContext';
function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <CartProvider>
        <NavBar />
        <main className="flex flex-col sm:flex-row sm:py-16 sm:gap-8 justify-evenly">
          <Carousel />
          <ProductDetails />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
