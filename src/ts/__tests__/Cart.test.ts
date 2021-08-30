import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Добавление в корзину', () => {
  const cart = new Cart();
  const avengers = new Movie(1003, 'Мстители', 'The Avengers', true, 2012, ['США'], 'Avengers Assemble!', ['фантастика', 'боевик'], '137 мин. / 02:17', 600);

  cart.add(avengers);

  const expected = [
    {
      id: 1003,
      name: 'Мстители',
      originalName: 'The Avengers',
      imax: true,
      year: 2012,
      country: ['США'],
      slogan: 'Avengers Assemble!',
      genre: ['фантастика', 'боевик'],
      time: '137 мин. / 02:17',
      price: 600,
    },
  ]
  
  expect(cart.items).toEqual(expected);
});

test('Расчет суммарной стоимости', () => {
  const cart = new Cart();
  const avengers = new Movie(1003, 'Мстители', 'The Avengers', true, 2012, ['США'], 'Avengers Assemble!', ['фантастика', 'боевик'], '137 мин. / 02:17', 600);
  const meteora = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);

  cart.add(avengers);
  cart.add(meteora);

  const received = cart.price();

  const expected = 1500;
  
  expect(received).toBe(expected);
});

test('Расчет суммарной стоимости с учетом скидки', () => {
    const cart = new Cart();
    const avengers = new Movie(1003, 'Мстители', 'The Avengers', true, 2012, ['США'], 'Avengers Assemble!', ['фантастика', 'боевик'], '137 мин. / 02:17', 600);
    const meteora = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  
    cart.add(avengers);
    cart.add(meteora);
  
    const received = cart.discountedPrice(15);
  
    const expected = 1275;
    
    expect(received).toBe(expected);
  });

  test('Удаление из корзины', () => {
    const cart = new Cart();
    const avengers = new Movie(1003, 'Мстители', 'The Avengers', true, 2012, ['США'], 'Avengers Assemble!', ['фантастика', 'боевик'], '137 мин. / 02:17', 600);
    const meteora = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  
    cart.add(avengers);
    cart.add(meteora);

    cart.delete(1008);
    
    expect(cart.items.length).toBe(1);
  });

