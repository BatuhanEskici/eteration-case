import { useContext } from 'react';
import { AppContext } from '../../App';

export default function ProductCard({ className, product, onClick }) {
  const context = useContext(AppContext);

  return (
    <div
      className={`${
        className || ''
      } bg-white p-2 flex flex-col items-start lg:w-[23%] max-h-[43%]`}
      navigatedetail="1"
      onClick={(event) => {
        onClick(event, product.id);
      }}
    >
      <img
        src={product.image}
        alt="product"
        className="w-full object-cover"
        navigatedetail="true"
      />

      <span className="text-[#2A59FE] text-xs block mt-2" navigatedetail="true">
        {product.price} TL
      </span>

      <p className="my-2 text-sm min-h-[40px]" navigatedetail="true">
        {product.name}
      </p>

      <button
        className="bg-[#2A59FE] text-white px-3 py-1 rounded w-full text-center"
        onClick={() => {
          context.addProductToBox(product, 'increase');
        }}
        navigatedetail="false"
      >
        Add to Cart
      </button>
    </div>
  );
}
