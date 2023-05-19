import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import ProductListingPage from './components/ProductListingPage/ProductListingPage';

function App() {
  useEffect(() => {
    axios.get('https://5fc9346b2af77700165ae514.mockapi.io/products')
    .then((response) => {
      console.log(response);
    })
  }, [])

  return (
    <div className='bg-[#F9F9F9] h-screen'>
      <Navbar />

      <ProductListingPage />
    </div>
  );
}

export default App;
