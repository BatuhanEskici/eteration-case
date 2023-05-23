import './App.css';
import axios from 'axios';
import { useEffect, createContext, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from './store/products';
import { updateBrands } from './store/brands';
import { updateModels } from './store/models';
import { updateBox } from './store/box';
import Navbar from './components/Navbar/Navbar';
import ProductListingPage from './components/ProductListingPage/ProductListingPage';
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';
import {
  getProductItemsPageCount,
  sortProductItems,
  getUniqueArray,
  calculateTotalPrice,
} from './helper';

export const AppContext = createContext();

function App() {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.products.activePage);
  const selectedBrands = useSelector((state) => state.brands.selected);
  const selectedModels = useSelector((state) => state.models.selected);
  const sort = useSelector((state) => state.sort);
  const box = useSelector((state) => state.box);
  const totalPrice = useMemo(() => calculateTotalPrice(box), [box]);
  const [itemsPerPage] = useState(12);
  const [productSearchText, setProductSearchText] = useState('');
  const [isReady, setIsReady] = useState(false);

  const addProductToBox = (product, action) => {
    let currentBox = [...box];
    const currentProduct = currentBox.find(
      (currentProduct) => currentProduct.id === product.id
    );
    const copyOfCurrentProduct = currentProduct ? { ...currentProduct } : null;
    const currentProductIndex = currentBox.findIndex(
      (currentProduct) => currentProduct.id === product.id
    );

    if (
      (copyOfCurrentProduct && action === 'increase') ||
      (action === 'decrease' && copyOfCurrentProduct.count > 1)
    ) {
      if (action === 'increase') {
        copyOfCurrentProduct.count = copyOfCurrentProduct.count + 1;
      } else {
        copyOfCurrentProduct.count = copyOfCurrentProduct.count - 1;
      }

      currentBox[currentProductIndex] = copyOfCurrentProduct;
    } else {
      if (action === 'increase') {
        currentBox.push({
          id: product.id,
          count: 1,
          detail: { ...product },
        });
      } else {
        currentBox = currentBox.filter((boxItem) => boxItem.id !== product.id);
      }
    }

    dispatch(updateBox(currentBox));
    localStorage.setItem('boxItems', JSON.stringify(currentBox));
  };

  const handleProductSearch = (event) => {
    setProductSearchText(event.target.value.toLowerCase());
  };

  const context = { addProductToBox, totalPrice, handleProductSearch };

  useEffect(() => {
    setIsReady(false);

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

        if (productSearchText) {
          productItems = productItems.filter((product) =>
            product.name.toLowerCase().includes(productSearchText)
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
    setIsReady(true);
  }, [
    dispatch,
    activePage,
    sort,
    selectedBrands,
    selectedModels,
    itemsPerPage,
    productSearchText,
  ]);

  useEffect(() => {
    const boxItemsLocalStorageData = localStorage.getItem('boxItems');

    if (boxItemsLocalStorageData) {
      const boxItems = JSON.parse(boxItemsLocalStorageData);
      dispatch(updateBox(boxItems));
    }
  }, [dispatch]);

  return (
    <div className="bg-[#F9F9F9]">
      <AppContext.Provider value={context}>
        <Navbar />

        {isReady ? (
          <Router>
            <Routes>
              <Route path="/" element={<ProductListingPage />} />

              <Route path="/product/:id" element={<ProductDetailPage />} />
            </Routes>
          </Router>
        ) : (
          ''
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
