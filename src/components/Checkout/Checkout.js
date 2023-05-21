export default function Checkout({className}) {
    return (
        <div className={`${className} bg-white p-3 shadow-lg`}>
            Total Price:

            <span className="text-[#2A59FE] font-bold">&nbsp;117.000 TL</span>

            <button className="bg-[#2A59FE] text-white px-3 py-1 rounded w-full text-center mt-3">Checkout</button>
        </div>
    );
}