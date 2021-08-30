import Movie from "../domain/Movie";

test('Создание объекта, содержащего информацию о фильме', () => {
  const avengers = new Movie(1003, 'Мстители', 'The Avengers', true, 2012, ['США'], 'Avengers Assemble!', ['фантастика', 'боевик'], '137 мин. / 02:17', 600);
  const expected = {
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
  }

expect(avengers).toEqual(expected);
})
