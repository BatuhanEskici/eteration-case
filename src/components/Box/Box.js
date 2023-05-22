export default function Checkout() {
  return (
    <div className="bg-white shadow-lg p-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm">Samsung s22</span>

          <br />

          <span className="text-xs text-[#2A59FE]">12.000 TL</span>
        </div>

        <div className="flex items-center">
          <button className="bg-slate-200 w-[25px] h-[25px] flex items-center justify-center rounded">
            -
          </button>

          <span className="bg-[#2A59FE] text-white w-[27.5px] h-[27.5px] flex items-center justify-center">
            2
          </span>

          <button className="bg-slate-200 w-[25px] h-[25px] flex items-center justify-center rounded">
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div>
          <span className="text-sm">Lenovo PC</span>

          <br />

          <span className="text-xs text-[#2A59FE]">18.000 TL</span>
        </div>

        <div className="flex items-center">
          <button className="bg-slate-200 w-[25px] h-[25px] flex items-center justify-center rounded">
            -
          </button>

          <span className="bg-[#2A59FE] text-white w-[27.5px] h-[27.5px] flex items-center justify-center">
            2
          </span>

          <button className="bg-slate-200 w-[25px] h-[25px] flex items-center justify-center rounded">
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div>
          <span className="text-sm">iPhone 12</span>

          <br />

          <span className="text-xs text-[#2A59FE]">15.000 TL</span>
        </div>

        <div className="flex items-center">
          <button className="bg-slate-200 w-[25px] h-[25px] flex items-center justify-center rounded">
            -
          </button>

          <span className="bg-[#2A59FE] text-white w-[27.5px] h-[27.5px] flex items-center justify-center">
            2
          </span>

          <button className="bg-slate-200 w-[25px] h-[25px] flex items-center justify-center rounded">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
