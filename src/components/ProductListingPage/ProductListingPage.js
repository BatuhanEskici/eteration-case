import Sort from '../Filters/Sort/Sort';
import Brands from '../Filters/Brands/Brands';
import Model from '../Filters/Model/Model';
import ProductCard from '../ProductCard/ProductCard'
import Box from '../Box/Box';
import Checkout from '../Checkout/Checkout';

export default function ProductListingPage() {
    return (
        <div className='flex w-4/5 mx-auto mt-6'>
            <div className='w-[20%] pr-6'>
                <Sort />

                <Brands className="mt-5" />

                <Model className="mt-5" />
            </div>

            <div className='w-[60%] flex items-start justify-between mt-7'>
                <ProductCard />

                <ProductCard className="ml-4" />

                <ProductCard className="ml-4" />

                <ProductCard className="ml-4" />
            </div>

            <div className='w-[20%] mt-7 pl-6'>
                <Box />

                <Checkout className="mt-6" />
            </div>
        </div>
    )
}