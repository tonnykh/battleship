import Ship from '../ship';

describe('ship function', () => {
  let ship1;
  beforeEach(() => {
    ship1 = Ship(3);
  });

  test('ship must have hits', () => {
    expect(ship1.hits).toEqual(0);
  });

  test('ship length must be 3', () => {
    expect(ship1.length).toEqual(3);
  });

  test('isSunk() should return true if hits is equal to length', () => {
    ship1.hit();
    ship1.hit();
    ship1.hit();
    expect(ship1.isSunk).toBeTruthy();
  })

});
