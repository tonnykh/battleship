import Ship from './ship';

const gameboard = () => {
  const ship = Ship();

  const board = [...Array(10)].map(() => Array(10).fill(0));

  const placeShip = (x, y) => {
    if (y <= (10 - ship.length)) {
      board[x].splice(y, ship.length, ...Array(ship.length).fill(1));
      return board;
    }
    return;
  };

 receiveAttack();
};
