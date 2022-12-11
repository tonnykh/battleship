import Ship from './ship';

const Gameboard = () => {
  const ship = Ship();

  const board = [...Array(10)].map(() => Array(10).fill(false));

  const placeShip = (x, y) => {
    if (y <= (10 - ship.length)) {
      board[x].splice(y, ship.length, ...Array(ship.length).fill(true));
      return board;
    }
  };

  const receiveAttack = (x, y) => {
    if (board[x - 1][y - 1] === true) {
      return ship.hit();
    }
    board[x][y] = 1;
    return board[x][y];
  };

  const isGameOver = () => !board.some((eachRow) => eachRow.includes(1));

  return {
    board, placeShip, receiveAttack, isGameOver,
  };
};

export default Gameboard;
