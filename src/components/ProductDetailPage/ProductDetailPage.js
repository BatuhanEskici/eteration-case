import { useState, useEffect, useMemo, memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { AppContext } from '../../App';
import Box from '../Box/Box';
import Checkout from '../Checkout/Checkout';

function ProductDetailPage() {
  const context = useContext(AppContext);
  const products = useSelector((state) => state.products);
  const [currentProduct, setCurrentProduct] = useState({});
  const params = useParams();
  const currentProductId = useMemo(() => params.id, [params.id]);

  useEffect(() => {
    setCurrentProduct(
      products.items.find((product) => product.id === currentProductId)
    );
  }, [currentProduct, currentProductId, products.items]);

  return (
    <div className="lg:flex w-4/5 mx-auto mt-6">
      <div className="lg:w-[80%] bg-white shadow-lg mt-7 lg:flex items-center">
        <div className="lg:w-[50%] h-full p-3">
          <img
            src={currentProduct.image}
            alt="product"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-[50%] h-full p-3">
          <p className="my-2 text-xl">{currentProduct.name}</p>

          <span className="text-[#2A59FE] text-xl block mt-2">
            {currentProduct.price} TL
          </span>

          <button
            className="bg-[#2A59FE] text-white px-3 py-1 rounded w-full text-center mt-8 mb-4"
            onClick={() => {
              context.addProductToBox(currentProduct, 'increase');
            }}
            navigatedetail="false"
          >
            Add to Cart
          </button>

          <p>{currentProduct.description}</p>
        </div>
      </div>

      <div className="lg:w-[20%] mt-7 lg:pl-6">
        <Box />

        <Checkout className="mt-6" />
      </div>
    </div>
  );
}

export default memo(ProductDetailPage);
