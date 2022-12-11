const Ship = (length) => {
  let hits = 0;
  const hit = () => hits++;
  const isSunk = () => hits === length;
  return {
    hits, length, hit, isSunk,
  };
};

export default Ship;
