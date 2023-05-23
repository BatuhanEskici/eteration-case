import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { updateAppConfig } from '../../store/appConfig';
import Sort from '../Filters/Sort/Sort';
import Brands from '../Filters/Brands/Brands';
import Models from '../Filters/Models/Models';
import ProductCard from '../ProductCard/ProductCard';
import Box from '../Box/Box';
import Checkout from '../Checkout/Checkout';
import Pagination from '../Pagination/Pagination';

export default function ProductListingPage() {
  const navigate = useNavigate();
  const pagedItems = useSelector((state) => state.products.pagedItems);
  const [hasProduct, setHasProduct] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAppConfig({ showSearchInput: true }));
  }, [location, dispatch]);

  const handleProductClick = (event, productId) => {
    const canNavigate = event.target.getAttribute('navigatedetail');

    if (canNavigate !== 'false') {
      navigate(`/product/${productId}`, { replace: false });
    }
  };

  useEffect(() => {
    setHasProduct(pagedItems.length);
  }, [pagedItems]);

  const getProductCardClass = (productIndex) => {
    let className = '';

    if (productIndex + 1 > 4 || windowSize.current[0] < 1024) {
      className += 'mt-4';
    }

    if (
      pagedItems.length > 1 &&
      productIndex % 4 !== 0 &&
      windowSize.current[0] > 1024
    ) {
      className += ' ml-4';
    }

    return className;
  };

  return (
    <div className="lg:flex w-4/5 mx-auto mt-6">
      <div className="lg:w-[20%] lg:pr-6">
        <Sort />

        <Brands className="mt-5" />

        <Models className="mt-5" />
      </div>

      <div className="lg:w-[60%] flex flex-wrap mt-7">
        {pagedItems.map((product, productIndex) => (
          <ProductCard
            key={product.id}
            product={product}
            className={getProductCardClass(productIndex)}
            onClick={handleProductClick}
          />
        ))}

        {hasProduct ? <Pagination className="my-4" /> : ''}
      </div>

      <div className="lg:w-[20%] lg:mt-7 lg:pl-6">
        <Box />

        <Checkout className="mt-6" />
      </div>
    </div>
  );
}
