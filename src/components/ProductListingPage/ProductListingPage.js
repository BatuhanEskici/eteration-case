import Sort from '../Filters/Sort/Sort';
import Brands from '../Filters/Brands/Brands';
import Model from '../Filters/Model/Model';
import ProductCard from '../ProductCard/ProductCard'
import Checkout from '../Checkout/Checkout';

export default function ProductListingPage() {
    return (
        <div className='flex w-4/5 mx-auto mt-6'>
            <div className='w-1/3'>
                <Sort />

                <Brands className="mt-5" />

                <Model className="mt-5" />
            </div>

            <div className='w-2/3 flex items-start justify-between mt-7'>
                <ProductCard />

                <ProductCard className="ml-4" />

                <ProductCard className="ml-4" />

                <ProductCard className="ml-4" />
            </div>

            <div className='w-1/3 mt-7'><Checkout /></div>
        </div>
    )
}