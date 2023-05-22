import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from './stores/products';
import Navbar from './components/Navbar/Navbar';
import ProductListingPage from './components/ProductListingPage/ProductListingPage';
import { getProductItemsPageCount, sortProductItems } from './helper';

function App() {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.products.activePage);
  const itemsPerPage = 12;
  const sort = useSelector((state) => state.sort);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productItemsApiResponse = await axios.get(
          'https://5fc9346b2af77700165ae514.mockapi.io/products'
        );
        const productItems = sortProductItems(
          productItemsApiResponse.data,
          sort
        );

        const pagedItems = productItems.slice(
          (activePage - 1) * 12,
          activePage * itemsPerPage
        );

        const pageCount = getProductItemsPageCount(
          productItems.length,
          itemsPerPage
        );

        const hasPrevPage = activePage > 1;

        const hasNextPage = activePage < pageCount;

        dispatch(
          updateProducts({
            items: productItems,
            activePage,
            pagedItems,
            pageCount,
            hasPrevPage,
            hasNextPage,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [dispatch, activePage, sort]);

  return (
    <div className="bg-[#F9F9F9]">
      <Navbar />

      <ProductListingPage />
    </div>
  );
}

export default App;
