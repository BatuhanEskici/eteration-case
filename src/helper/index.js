export const getProductItemsPageCount = (productsItemsLength, itemsPerPage) => {
  let pageCount = parseInt(productsItemsLength / itemsPerPage);

  if (productsItemsLength % itemsPerPage !== 0) {
    pageCount++;
  }

  return pageCount;
};

export const sortProductItems = (products, sort) => {
  const sortedProducts = [...products];

  const valueFormat = {
    createdAt: (value) => new Date(value),
    price: (value) => value,
  };

  if (sort.type === 'asc') {
    sortedProducts.sort((a, b) => {
      let keyA = valueFormat[sort.key](a[sort.key]),
        keyB = valueFormat[sort.key](b[sort.key]);

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }

  if (sort.type === 'desc') {
    sortedProducts.sort((a, b) => {
      let keyA = valueFormat[sort.key](a[sort.key]),
        keyB = valueFormat[sort.key](b[sort.key]);

      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
    });
  }

  return sortedProducts;
};

export const getUniqueArray = (data) => {
  return data.filter((value, index, array) => array.indexOf(value) === index);
};
