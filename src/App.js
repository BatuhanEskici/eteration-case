import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import ProductListingPage from './components/ProductListingPage/ProductListingPage';
import { useDispatch, useSelector } from 'react-redux';
import { updateItems, updateActivePage } from './stores/store';

function App() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    axios.get('https://5fc9346b2af77700165ae514.mockapi.io/products')
      .then((response) => {
        dispatch(updateItems(response.data));
        dispatch(updateActivePage(2));
      })
  }, [dispatch])

  console.log(products);

  return (
    <div className='bg-[#F9F9F9] h-screen'>
      <Navbar />

      <ProductListingPage />
    </div>
  );
}

export default App;
