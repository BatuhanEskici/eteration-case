export const getProductItemsPageCount = (productsItemsLength, itemsPerPage) => {
    let pageCount = parseInt(productsItemsLength / itemsPerPage);

    if (productsItemsLength % itemsPerPage !== 0) {
        pageCount++;
    }

    return pageCount;
}