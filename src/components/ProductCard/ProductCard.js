export default function ProductCard({ className, product }) {
  return (
    <div
      className={`${
        className || ''
      } bg-white p-2 flex flex-col items-start w-[23%]`}
    >
      <img src={product.image} alt="product" className="w-full object-cover" />

      <span className="text-[#2A59FE] text-xs block mt-2">
        {product.price} TL
      </span>

      <p className="my-2 text-sm min-h-[40px]">{product.name}</p>

      <button className="bg-[#2A59FE] text-white px-3 py-1 rounded w-full text-center">
        Add to Cart
      </button>
    </div>
  );
}
