const INITIAL_BOARD = [
  [
    {
      square: '00',
      piece: {
        type: 'rook',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/90px-Chess_rdt45.svg.png'
      }
    },
    {
      square: '01',
      piece: {
        type: 'knight',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/90px-Chess_ndt45.svg.png'
      }
    },
    {
      square: '02',
      piece: {
        type: 'bishop',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/90px-Chess_bdt45.svg.png'
      }
    },
    {
      square: '03',
      piece: {
        type: 'queen',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/90px-Chess_qdt45.svg.png'
      }
    },
    {
      square: '04',
      piece: {
        type: 'king',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/90px-Chess_kdt45.svg.png'
      }
    },
    {
      square: '05',
      piece: {
        type: 'bishop',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/90px-Chess_bdt45.svg.png'
      }
    },
    {
      square: '06',
      piece: {
        type: 'knight',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/90px-Chess_ndt45.svg.png'
      }
    },
    {
      square: '07',
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
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '11',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '12',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '13',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '14',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '15',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '16',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    },
    {
      square: '17',
      piece: {
        type: 'pawn',
        color: 'black',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/90px-Chess_pdt45.svg.png'
      }
    }
  ],
  [
    { square: '20', piece: null },
    { square: '21', piece: null },
    { square: '22', piece: null },
    { square: '23', piece: null },
    { square: '24', piece: null },
    { square: '25', piece: null },
    { square: '26', piece: null },
    { square: '27', piece: null }
  ],
  [
    { square: '30', piece: null },
    { square: '31', piece: null },
    { square: '32', piece: null },
    { square: '33', piece: null },
    { square: '34', piece: null },
    { square: '35', piece: null },
    { square: '36', piece: null },
    { square: '37', piece: null }
  ],
  [
    { square: '40', piece: null },
    { square: '41', piece: null },
    { square: '42', piece: null },
    { square: '43', piece: null },
    { square: '44', piece: null },
    { square: '45', piece: null },
    { square: '46', piece: null },
    { square: '47', piece: null }
  ],
  [
    { square: '50', piece: null },
    { square: '51', piece: null },
    { square: '52', piece: null },
    { square: '53', piece: null },
    { square: '54', piece: null },
    { square: '55', piece: null },
    { square: '56', piece: null },
    { square: '57', piece: null }
  ],
  [
    {
      square: '60',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '61',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '62',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '63',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '64',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '65',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '66',
      piece: {
        type: 'pawn',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/90px-Chess_plt45.svg.png'
      }
    },
    {
      square: '67',
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
      piece: {
        type: 'rook',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/90px-Chess_rlt45.svg.png'
      }
    },
    {
      square: '71',
      piece: {
        type: 'knight',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/90px-Chess_nlt45.svg.png'
      }
    },
    {
      square: '72',
      piece: {
        type: 'bishop',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/90px-Chess_blt45.svg.png'
      }
    },
    {
      square: '73',
      piece: {
        type: 'queen',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/90px-Chess_qlt45.svg.png'
      }
    },
    {
      square: '74',
      piece: {
        type: 'king',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/90px-Chess_klt45.svg.png'
      }
    },
    {
      square: '75',
      piece: {
        type: 'bishop',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/90px-Chess_blt45.svg.png'
      }
    },
    {
      square: '76',
      piece: {
        type: 'knight',
        color: 'white',
        svg:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/90px-Chess_nlt45.svg.png'
      }
    },
    {
      square: '77',
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
