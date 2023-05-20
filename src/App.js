import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductListingPage from './components/ProductListingPage/ProductListingPage';
import { useDispatch, useSelector } from 'react-redux';
import { updateItems, updatePagedItems } from './stores/store';

function App() {
  const dispatch = useDispatch()
  const activePage = useSelector(state => state.products.activePage)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productItemsApiResponse = await axios.get('https://5fc9346b2af77700165ae514.mockapi.io/products')
        const productItems = productItemsApiResponse.data

        dispatch(updateItems(productItems.data))

        const pagedItems = productItems.slice(activePage - 1, activePage * 12)
        dispatch(updatePagedItems(pagedItems))
      } catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [dispatch, activePage])

  return (
    <div className='bg-[#F9F9F9]'>
      <Navbar />

      <ProductListingPage />
    </div>
  );
}

export default App;
