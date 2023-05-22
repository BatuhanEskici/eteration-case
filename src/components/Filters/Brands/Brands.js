import { memo } from 'react';
import { useSelector } from 'react-redux';

function Brands({ className }) {
  const brands = useSelector((state) => state.brands.all);

  return (
    <div className={`${className}`}>
      <span className="text-sm text-slate-500">Brands</span>

      <div className="bg-white shadow-md p-3 mt-1">
        <input
          type="text"
          placeholder="Search"
          className="p-1 mb-3 bg-[#F9F9F9]"
        />

        <div className="max-h-[88px] overflow-auto">
          {brands.map((brand, brandIndex) => {
            return (
              <div
                className={`${brandIndex !== 0 && 'mt-2'} flex items-center`}
                key={brandIndex}
              >
                <input type="checkbox" name="brand" value={brand} />

                <label className="ml-2">{brand}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(Brands);
