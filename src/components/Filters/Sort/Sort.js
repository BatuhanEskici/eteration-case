import { useDispatch, useSelector } from 'react-redux';
import { isSortRadioChecked } from '../../../helper';
import { updateSort } from '../../../stores/sort';

export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.sort);
  const sortRadios = [
    {
      value: 'old_to_new',
      name: 'Old to new',
      key: 'createdAt',
      type: 'asc',
    },
    {
      value: 'new_to_old',
      name: 'New to old',
      key: 'createdAt',
      type: 'desc',
    },
    {
      value: 'price_high_to_low',
      name: 'Price high to low',
      key: 'price',
      type: 'desc',
    },
    {
      value: 'price_low_to_high',
      name: 'Price low to high',
      key: 'price',
      type: 'asc',
    },
  ];

  const handleRadioChange = (sortRadio) => {
    dispatch(
      updateSort({
        value: sortRadio.value,
        key: sortRadio.key,
        type: sortRadio.type,
      })
    );
  };

  return (
    <div>
      <span className="text-sm text-slate-500">Sort By</span>

      <div className="bg-white shadow-md p-3 mt-1">
        {sortRadios.map((sortRadio, sortRadioIndex) => {
          return (
            <div
              className={`${sortRadioIndex !== 0 && 'mt-2'} flex items-center`}
              key={sortRadioIndex}
              onClick={() => {
                handleRadioChange(sortRadio);
              }}
            >
              <input
                type="radio"
                name="sort"
                value={sortRadio.value}
                checked={isSortRadioChecked(sort.value, sortRadio.value)}
                onChange={() => {
                  handleRadioChange(sortRadio);
                }}
              />

              <label className="ml-2">{sortRadio.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
