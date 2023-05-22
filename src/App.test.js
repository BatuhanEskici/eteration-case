import {
  getProductItemsPageCount,
  sortProductItems,
  getUniqueArray,
  calculateTotalPrice,
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

test('calculate total price', () => {
  const data = [
    {
      id: '57',
      count: 1,
      detail: {
        createdAt: '2022-03-29T12:37:07.621Z',
        name: 'Cadillac Colorado',
        image: 'http://placeimg.com/640/480/people',
        price: '855.00',
        description:
          'Laudantium ea quo. Minus natus molestias ad eaque magni et. Ipsa nihil non quae unde. Est fugit nesciunt molestiae.\n \rPerferendis aut sed ut optio. Distinctio natus itaque dolores in voluptatibus fuga voluptas consequatur. Consectetur delectus ex et. Reiciendis ut aliquid et rerum sunt enim porro repellat nisi. Reprehenderit rerum officiis autem esse optio qui facere deleniti.\n \rQui et dicta consequuntur voluptates quia in consequatur qui totam. Quos sunt blanditiis. Harum aspernatur ducimus. Quidem ut culpa ullam magni eum eum nesciunt sapiente velit. Pariatur suscipit quod omnis qui.',
        model: 'Aventador',
        brand: 'Audi',
        id: '57',
      },
    },
    {
      id: '84',
      count: 2,
      detail: {
        createdAt: '2022-03-29T12:51:09.890Z',
        name: 'Mini Element',
        image: 'http://placeimg.com/640/480/nightlife',
        price: '803.00',
        description:
          'Tempora aut consequuntur deserunt suscipit voluptas consectetur soluta magnam. Itaque dicta ex similique cumque. Fugiat nisi quae. Et minima qui eum incidunt. Sit id sequi qui corrupti. Deserunt nemo harum perspiciatis vitae cum.\n \rUnde eum ratione nobis excepturi minima. Unde corporis recusandae facere dicta. Delectus sunt sequi molestiae nam rerum. Minima at corporis sequi at cum.\n \rOdio dicta ut eveniet impedit. Aut officiis tempora ducimus ut dicta aut excepturi doloribus. Nihil dolores atque ipsa dignissimos sit consequatur nihil quas facere. Aperiam explicabo ab sed.',
        model: 'Mustang',
        brand: 'Volvo',
        id: '84',
      },
    },
  ];

  const result = 2461;

  expect(calculateTotalPrice(data)).toEqual(result);
});
