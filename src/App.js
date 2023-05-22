import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from './stores/products';
import { updateBrands } from './stores/brands';
import Navbar from './components/Navbar/Navbar';
import ProductListingPage from './components/ProductListingPage/ProductListingPage';
import { getProductItemsPageCount, sortProductItems } from './helper';

function App() {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.products.activePage);
  const selectedBrands = useSelector((state) => state.brands.selected);
  const sort = useSelector((state) => state.sort);
  const itemsPerPage = 12;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productItemsApiResponse = await axios.get(
          'https://5fc9346b2af77700165ae514.mockapi.io/products'
        );
        let productItems = sortProductItems(productItemsApiResponse.data, sort);

        if (selectedBrands.length) {
          productItems = productItems.filter((product) =>
            selectedBrands.includes(product.brand)
          );
        }

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

        if (!selectedBrands.length) {
          const newBrands = productItems.map(
            (productItem) => productItem.brand
          );
          dispatch(
            updateBrands({
              all: newBrands,
              selected: selectedBrands,
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [dispatch, activePage, sort, selectedBrands]);

  return (
    <div className="bg-[#F9F9F9]">
      <Navbar />

      <ProductListingPage />
    </div>
  );
}

export default App;
