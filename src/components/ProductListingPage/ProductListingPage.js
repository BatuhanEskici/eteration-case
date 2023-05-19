import Sort from '../Filters/Sort/Sort';
import ProductCard from '../ProductCard/ProductCard'
import Checkout from '../Checkout/Checkout';

export default function ProductListingPage() {
    return (
        <div className='flex items-center w-4/5 mx-auto mt-6'>
            <div className='w-1/3'><Sort /></div>

            <div className='w-2/3'><ProductCard /></div>

            <div className='w-1/3'><Checkout /></div>
        </div>
    )
}