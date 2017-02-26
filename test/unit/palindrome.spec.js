const expect = require('chai').expect;

const sut = require('../../src/palindrome');

describe('palindrome check', () => {
  it('should return true for a single digit number', () => {
    expect(sut(1)).to.eql(true);
  });

  it('should return false for a non palindrome', () => {
    expect(sut(10)).to.eql(false);
  });

  it('should return true for a palindrome', () => {
    expect(sut(101)).to.eql(true);
  });
});
