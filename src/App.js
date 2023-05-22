import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from './store/products';
import { updateBrands } from './store/brands';
import { updateModels } from './store/models';
import Navbar from './components/Navbar/Navbar';
import ProductListingPage from './components/ProductListingPage/ProductListingPage';
import {
  getProductItemsPageCount,
  sortProductItems,
  getUniqueArray,
} from './helper';

function App() {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.products.activePage);
  const selectedBrands = useSelector((state) => state.brands.selected);
  const selectedModels = useSelector((state) => state.models.selected);
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

        if (selectedModels.length) {
          productItems = productItems.filter((product) =>
            selectedModels.includes(product.model)
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
          let newBrands = productItems.map((productItem) => productItem.brand);
          newBrands = getUniqueArray(newBrands);
          newBrands.sort();

          dispatch(
            updateBrands({
              init: newBrands,
              all: newBrands,
              selected: selectedBrands,
            })
          );
        }

        if (!selectedModels.length) {
          let newModels = productItems.map((productItem) => productItem.model);
          newModels = getUniqueArray(newModels);
          newModels.sort();

          dispatch(
            updateModels({
              init: newModels,
              all: newModels,
              selected: selectedModels,
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [dispatch, activePage, sort, selectedBrands, selectedModels]);

  return (
    <div className="bg-[#F9F9F9]">
      <Navbar />

      <ProductListingPage />
    </div>
  );
}

export default App;
