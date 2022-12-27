import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Carousel />
        <ProductDetails />
      </main>
    </>
  );
}

export default App;
