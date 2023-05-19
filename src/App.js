import './App.css';
import Navbar from './components/Navbar/Navbar'
import ProductListingPage from './components/ProductListingPage/ProductListingPage';

function App() {
  return (
    <div className='bg-[#F9F9F9] h-screen'>
      <Navbar />

      <ProductListingPage />
    </div>
  );
}

export default App;
