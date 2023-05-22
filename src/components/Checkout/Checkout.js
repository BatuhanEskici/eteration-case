import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { AppContext } from '../../App';

export default function Checkout({ className }) {
  const context = useContext(AppContext);
  const box = useSelector((state) => state.box);

  return box.length ? (
    <div className={`${className} bg-white p-3 shadow-lg`}>
      Total Price:
      <span className="text-[#2A59FE] font-bold">
        &nbsp;{context.totalPrice} TL
      </span>
      <button className="bg-[#2A59FE] text-white px-3 py-1 rounded w-full text-center mt-3">
        Checkout
      </button>
    </div>
  ) : (
    ''
  );
}
