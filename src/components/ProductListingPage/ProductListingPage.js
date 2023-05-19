import Sort from '../Filters/Sort/Sort';
import Brands from '../Filters/Brands/Brands';
import Model from '../Filters/Model/Model';
import ProductCard from '../ProductCard/ProductCard'
import Checkout from '../Checkout/Checkout';

export default function ProductListingPage() {
    return (
        <div className='flex items-center w-4/5 mx-auto mt-6'>
            <div className='w-1/3'>
                <Sort />

                <Brands className="mt-5" />

                <Model className="mt-5" />
            </div>

            <div className='w-2/3'><ProductCard /></div>

            <div className='w-1/3'><Checkout /></div>
        </div>
    )
}