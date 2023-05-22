import {
  getProductItemsPageCount,
  sortProductItems,
  getUniqueArray,
} from './helper';

test('get product items page count', () => {
  const data = [
    { name: 'product1' },
    { name: 'product2' },
    { name: 'product3' },
    { name: 'product4' },
    { name: 'product5' },
  ];
  const itemsPerPage = 2;
  const result = 3;

  expect(getProductItemsPageCount(data.length, itemsPerPage)).toEqual(result);
});

test('sort product items', () => {
  const product1 = {
    createdAt: '2022-03-30T11:11:33.677Z',
    name: 'Ferrari Golf',
    image: 'http://placeimg.com/640/480/nature',
    price: '109.00',
    description:
      'Sint ut quis sequi quia nisi ea rem qui. Unde voluptas eum veritatis perspiciatis distinctio quo nam. Ut est eos ut dolores. Tempore ut aliquam maxime consequatur dolores quis quia.\n \rCupiditate ipsum voluptatem sapiente. Rem modi voluptas nemo voluptas. Voluptatem ut eveniet adipisci voluptas iste dolores eum. Veritatis cupiditate repellat accusamus doloremque praesentium dolores. Dolore quia impedit. Praesentium voluptas minima nihil.\n \rVitae omnis non voluptatem aut fugit tenetur mollitia ipsum. Officiis similique deserunt dolor. Ab cumque aliquam.',
    model: 'CX-9',
    brand: 'Kia',
    id: '75',
  };

  const product2 = {
    createdAt: '2022-03-30T11:10:19.797Z',
    name: 'Ford CTS',
    image: 'http://placeimg.com/640/480/fashion',
    price: '130.00',
    description:
      'Ut odio incidunt reprehenderit. Temporibus qui beatae atque. Quos autem voluptates quis. Dignissimos sit sed enim ut fugiat.\n \rVoluptatum distinctio laudantium et. Sit maiores atque iure qui sit totam. Quia optio est est quia dolorem dignissimos.\n \rMinus quam et ut. Pariatur repellendus ipsam rerum cum. Deleniti sunt quas sit quia facilis quia sint blanditiis enim.',
    model: 'Colorado',
    brand: 'Lamborghini',
    id: '26',
  };

  const sort = {
    value: 'price_low_to_high',
    key: 'price',
    type: 'asc',
  };

  const products = [product2, product1];
  const result = [product1, product2];

  expect(sortProductItems(products, sort)).toEqual(result);
});

test('get unique array', () => {
  const data = ['A', 'B', 'A'];
  const result = ['A', 'B'];

  expect(getUniqueArray(data)).toEqual(result);
});
