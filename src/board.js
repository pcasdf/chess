const INITIAL_BOARD = [
  [
    {
      square: '00',
      bg: '#cccccc',
      piece: {
        type: 'rook',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/90px-Chess_rdt45.svg.png'
      }
    },
    {
      square: '01',
      bg: '#ffffff',
      piece: {
        type: 'knight',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/90px-Chess_ndt45.svg.png'
      }
    },
    {
      square: '02',
      bg: '#cccccc',
      piece: {
        type: 'bishop',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/90px-Chess_bdt45.svg.png'
      }
    },
    {
      square: '03',
      bg: '#ffffff',
      piece: {
        type: 'queen',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/90px-Chess_qdt45.svg.png'
      }
    },
    {
      square: '04',
      bg: '#cccccc',
      piece: {
        type: 'king',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/90px-Chess_kdt45.svg.png'
      }
    },
    {
      square: '05',
      bg: '#ffffff',
      piece: {
        type: 'bishop',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/90px-Chess_bdt45.svg.png'
      }
    },
    {
      square: '06',
      bg: '#cccccc',
      piece: {
        type: 'knight',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/90px-Chess_ndt45.svg.png'
      }
    },
    {
      square: '07',
      bg: '#ffffff',
      piece: {
        type: 'rook',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/90px-Chess_rdt45.svg.png'
      }
    }
  ],
  [
    {
      square: '10',
      bg: '#ffffff',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '11',
      bg: '#cccccc',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '12',
      bg: '#ffffff',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '13',
      bg: '#cccccc',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '14',
      bg: '#ffffff',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '15',
      bg: '#cccccc',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '16',
      bg: '#ffffff',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '17',
      bg: '#cccccc',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    }
  ],
  [
    { square: '20', bg: '#cccccc', piece: null },
    { square: '21', bg: '#ffffff', piece: null },
    { square: '22', bg: '#cccccc', piece: null },
    { square: '23', bg: '#ffffff', piece: null },
    { square: '24', bg: '#cccccc', piece: null },
    { square: '25', bg: '#ffffff', piece: null },
    { square: '26', bg: '#cccccc', piece: null },
    { square: '27', bg: '#ffffff', piece: null }
  ],
  [
    { square: '30', bg: '#ffffff', piece: null },
    { square: '31', bg: '#cccccc', piece: null },
    { square: '32', bg: '#ffffff', piece: null },
    { square: '33', bg: '#cccccc', piece: null },
    { square: '34', bg: '#ffffff', piece: null },
    { square: '35', bg: '#cccccc', piece: null },
    { square: '36', bg: '#ffffff', piece: null },
    { square: '37', bg: '#cccccc', piece: null }
  ],
  [
    { square: '40', bg: '#cccccc', piece: null },
    { square: '41', bg: '#ffffff', piece: null },
    { square: '42', bg: '#cccccc', piece: null },
    { square: '43', bg: '#ffffff', piece: null },
    { square: '44', bg: '#cccccc', piece: null },
    { square: '45', bg: '#ffffff', piece: null },
    { square: '46', bg: '#cccccc', piece: null },
    { square: '47', bg: '#ffffff', piece: null }
  ],
  [
    { square: '50', bg: '#ffffff', piece: null },
    { square: '51', bg: '#cccccc', piece: null },
    { square: '52', bg: '#ffffff', piece: null },
    { square: '53', bg: '#cccccc', piece: null },
    { square: '54', bg: '#ffffff', piece: null },
    { square: '55', bg: '#cccccc', piece: null },
    { square: '56', bg: '#ffffff', piece: null },
    { square: '57', bg: '#cccccc', piece: null }
  ],
  [
    {
      square: '60',
      bg: '#cccccc',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '61',
      bg: '#ffffff',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '62',
      bg: '#cccccc',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '63',
      bg: '#ffffff',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '64',
      bg: '#cccccc',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '65',
      bg: '#ffffff',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '66',
      bg: '#cccccc',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '67',
      bg: '#ffffff',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    }
  ],
  [
    {
      square: '70',
      bg: '#ffffff',
      piece: {
        type: 'rook',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/90px-Chess_rlt45.svg.png'
      }
    },
    {
      square: '71',
      bg: '#cccccc',
      piece: {
        type: 'knight',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/90px-Chess_nlt45.svg.png'
      }
    },
    {
      square: '72',
      bg: '#ffffff',
      piece: {
        type: 'bishop',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/90px-Chess_blt45.svg.png'
      }
    },
    {
      square: '73',
      bg: '#cccccc',
      piece: {
        type: 'queen',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/90px-Chess_qlt45.svg.png'
      }
    },
    {
      square: '74',
      bg: '#ffffff',
      piece: {
        type: 'king',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/90px-Chess_klt45.svg.png'
      }
    },
    {
      square: '75',
      bg: '#cccccc',
      piece: {
        type: 'bishop',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/90px-Chess_blt45.svg.png'
      }
    },
    {
      square: '76',
      bg: '#ffffff',
      piece: {
        type: 'knight',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/90px-Chess_nlt45.svg.png'
      }
    },
    {
      square: '77',
      bg: '#cccccc',
      piece: {
        type: 'rook',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/90px-Chess_rlt45.svg.png'
      }
    }
  ]
];

export default INITIAL_BOARD;
