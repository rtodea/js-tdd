const expect = require('chai').expect;

const sut = require('../../src/equilibrium-index');

describe('equilibrium-index', () => {
  it('should return 3 as A[0] + A[1] + A[2] = A[4] + A[5] + A[6]', () => {
    const sample = [-7, 1, 5, 2, -4, 3, 0];
    expect(sut(sample)).to.eql(3);
  });

  it('should be 2 as A[0] + A[1] = A[4]', () => {
    const sample = [-1, 1, 8, 0];
    expect(sut(sample)).to.eql(2);
  });
});
