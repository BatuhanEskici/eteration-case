import { useContext } from 'react';
import { AppContext } from '../../App';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const context = useContext(AppContext);
  const appConfig = useSelector((state) => state.appConfig);

  return (
    <div className="bg-[#2A59FE] py-1">
      <div className="flex lg:flex-nowrap flex-wrap items-center w-4/5 mx-auto">
        <div className="lg:w-[20%] w-[50%] text-white lg:pr-6">Eteration</div>

        {appConfig.showSearchInput && (
          <div className="lg:w-[60%] w-[50%]">
            <input
              type="text"
              placeholder="Search"
              className="p-1 w-[100%] lg:w-[50%]"
              onInput={context.handleProductSearch}
            />
          </div>
        )}

        <div
          className={`${
            appConfig.showSearchInput ? 'lg:w-[20%]' : 'lg:w-[100%]'
          } w-full text-start lg:text-right mt-2 lg:mt-0 text-white lg:pl-6`}
        >
          <span>
            {context.totalPrice
              ? `${context.totalPrice.toLocaleString()} TL`
              : ''}
          </span>
        </div>
      </div>
    </div>
  );
}
