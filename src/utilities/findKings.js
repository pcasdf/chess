const findKings = data => {
  let a = data[0].find(item => item.piece && item.piece.type === 'king');
  let b = data[1].find(item => item.piece && item.piece.type === 'king');
  let c = data[2].find(item => item.piece && item.piece.type === 'king');
  let d = data[3].find(item => item.piece && item.piece.type === 'king');
  let e = data[4].find(item => item.piece && item.piece.type === 'king');
  let f = data[5].find(item => item.piece && item.piece.type === 'king');
  let g = data[6].find(item => item.piece && item.piece.type === 'king');
  let h = data[7].find(item => item.piece && item.piece.type === 'king');

  let kings = [a, b, c, d, e, f, g, h];
  kings = kings.filter(item => item !== undefined);

  const whiteKing = kings.find(item => item.piece.color === 'white');
  const blackKing = kings.find(item => item.piece.color === 'black');

  return { whiteKing, blackKing };
};

export default findKings;
