import { useContext } from 'react';
import { AppContext } from '../../App';

export default function Navbar() {
  const context = useContext(AppContext);

  return (
    <div className="bg-[#2A59FE] py-1">
      <div className="flex lg:flex-nowrap flex-wrap items-center w-4/5 mx-auto">
        <div className="lg:w-[20%] w-[50%] text-white pr-6">Eteration</div>

        <div className="lg:w-[60%] w-[50%]">
          <input
            type="text"
            placeholder="Search"
            className="p-1"
            onInput={context.handleProductSearch}
          />
        </div>

        <div className="lg:w-[20%] w-full text-center lg:text-start mt-2 lg:mt-0 text-white pl-6">
          <span>
            {context.totalPrice
              ? `${context.totalPrice.toLocaleString()} TL`
              : ''}
          </span>

          <span className="ml-4">Batuhan</span>
        </div>
      </div>
    </div>
  );
}
