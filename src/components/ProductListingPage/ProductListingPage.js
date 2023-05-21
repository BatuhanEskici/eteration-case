import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Sort from '../Filters/Sort/Sort';
import Brands from '../Filters/Brands/Brands';
import Model from '../Filters/Model/Model';
import ProductCard from '../ProductCard/ProductCard';
import Box from '../Box/Box';
import Checkout from '../Checkout/Checkout';
import Pagination from '../Pagination/Pagination';

export default function ProductListingPage() {
    const pagedItems = useSelector(state => state.products.pagedItems);
    const [hasProduct, setHasProduct] = useState(false);

    useEffect(() => {
        setHasProduct(pagedItems.length)
    }, [pagedItems]);

    const getProductCardClass = (productIndex) => {
        if ((productIndex + 1) > 4) {
            return 'mt-4';
        }

        return;
    }

    return (
        <div className='flex w-4/5 mx-auto mt-6'>
            <div className='w-[20%] pr-6'>
                <Sort />

                <Brands className="mt-5" />

                <Model className="mt-5" />
            </div>

            <div className={`${pagedItems.length > 3 && "justify-between"}w-[60%] flex flex-wrap mt-7`}>
                {
                    pagedItems.map((product, productIndex) =>
                        <ProductCard key={product.id} product={product} className={getProductCardClass(productIndex)} />
                    )
                }

                {(hasProduct) && <Pagination className="my-4" />}
            </div>

            <div className='w-[20%] mt-7 pl-6'>
                <Box />

                <Checkout className="mt-6" />
            </div>
        </div>
    );
}