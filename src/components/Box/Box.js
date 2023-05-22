import { useSelector } from 'react-redux';

export default function Checkout() {
  const box = useSelector((state) => state.box);

  return box.length ? (
    <div className="bg-white shadow-lg p-3">
      {box.map((product) => {
        return (
          <div className="flex items-center justify-between" key={product.id}>
            <div>
              <span className="text-sm">{product.detail.name}</span>

              <br />

              <span className="text-xs text-[#2A59FE]">
                {product.detail.price} TL
              </span>
            </div>

            <div className="flex items-center">
              <button className="bg-slate-200 w-[25px] h-[25px] flex items-center justify-center rounded">
                -
              </button>

              <span className="bg-[#2A59FE] text-white w-[27.5px] h-[27.5px] flex items-center justify-center">
                {product.count}
              </span>

              <button className="bg-slate-200 w-[25px] h-[25px] flex items-center justify-center rounded">
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    ''
  );
}
