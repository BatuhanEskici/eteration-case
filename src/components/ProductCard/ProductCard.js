export default function ProductCard({ className }) {
    return (
        <div className={`${className} bg-white p-2`}>
            <img src="https://fakeimg.pl/150x150/" alt="product" />

            <span className="text-[#2A59FE] block mt-2">15.000 TL</span>

            <p className="my-2">iPhone 13 Pro Max 256Gb</p>

            <button className="bg-[#2A59FE] text-white px-3 py-1 rounded">Add to Cart</button>
        </div>
    )
}