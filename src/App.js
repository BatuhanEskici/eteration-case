import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItems, updatePagedItems, updatePageCount, updateHasPrevPage, updateHasNextPage } from './stores/store';
import Navbar from './components/Navbar/Navbar';
import ProductListingPage from './components/ProductListingPage/ProductListingPage';
import { getProductItemsPageCount } from './helper';

function App() {
  const dispatch = useDispatch();
  const activePage = useSelector(state => state.products.activePage);
  const itemsPerPage = 12;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productItemsApiResponse = await axios.get('https://5fc9346b2af77700165ae514.mockapi.io/products');
        const productItems = productItemsApiResponse.data;
        dispatch(updateItems(productItems));

        const pagedItems = productItems.slice(activePage - 1, activePage * itemsPerPage);
        dispatch(updatePagedItems(pagedItems))

        const pageCount = getProductItemsPageCount(productItems.length, itemsPerPage);
        dispatch(updatePageCount(pageCount));

        const hasPrevPage = activePage > 1;
        dispatch(updateHasPrevPage(hasPrevPage));

        const hasNextPage = activePage < pageCount;
        dispatch(updateHasNextPage(hasNextPage));
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, [dispatch, activePage]);

  return (
    <div className='bg-[#F9F9F9]'>
      <Navbar />

      <ProductListingPage />
    </div>
  )
}

export default App
