import { getProductItemsPageCount } from "./helper";

test('get product items page count', () => {
    const data = [{name: 'product1'}, {name: 'product2'}, {name: 'product3'}, {name: 'product4'}, {name: 'product5'}];
    const itemsPerPage = 2;
    const result = 3;

    expect(getProductItemsPageCount(data.length, itemsPerPage)).toEqual(result);
})