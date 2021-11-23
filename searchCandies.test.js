//should return Skitties and Skittles for lowercase "s"

const searchCandies = require('./searchengine');

describe('searchCandies', () => {
  it('return Mars and Maltesers when passed Ma and 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Maltesers', 'Mars' ]);
  });

  it('return Mars when passed Ma and 2', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });

  it('return Skitties, Skittles and Starburst when passed S and 10', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it('return Skitties and Skittles when passed S and 4', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });

  it('return Skitties and Skittles when passed s and 4', () => {
    expect(searchCandies('s', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
});