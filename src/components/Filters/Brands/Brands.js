import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBrands } from '../../../stores/brands';

function Brands({ className }) {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands);

  const handleBrandSearch = (event) => {
    const searchedText = event.target.value;

    if (!searchedText) {
      dispatch(
        updateBrands({
          ...brands,
          all: brands.init,
        })
      );

      return;
    }

    const filteredBrands = brands.all.filter((brand) =>
      brand.toLowerCase().includes(searchedText)
    );

    dispatch(
      updateBrands({
        ...brands,
        all: filteredBrands,
      })
    );
  };

  const handleSelectBrand = (brand) => {
    let selectedBrands = [...brands.selected];

    if (!selectedBrands.includes(brand)) {
      selectedBrands.push(brand);
    } else {
      selectedBrands = selectedBrands.filter(
        (selectedBrand) => selectedBrand !== brand
      );
    }

    dispatch(
      updateBrands({
        ...brands,
        selected: selectedBrands,
      })
    );
  };

  return (
    <div className={`${className}`}>
      <span className="text-sm text-slate-500">Brands</span>

      <div className="bg-white shadow-md p-3 mt-1">
        <input
          type="text"
          placeholder="Search"
          className="p-1 mb-3 bg-[#F9F9F9]"
          onInput={handleBrandSearch}
        />

        <div className="max-h-[88px] overflow-auto">
          {brands.all.map((brand, brandIndex) => {
            return (
              <div
                className={`${brandIndex !== 0 && 'mt-2'} flex items-center`}
                key={brandIndex}
                onClick={() => {
                  handleSelectBrand(brand);
                }}
              >
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  checked={brands.selected.includes(brand)}
                  onChange={() => {
                    handleSelectBrand(brand);
                  }}
                />

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
