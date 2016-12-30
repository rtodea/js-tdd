const expect = require('chai').expect;

const sut = require('../../src/hello');

describe('hello-world', () => {
  it('should return "Hello, world" string', () => {
    expect(sut()).to.eql('Hello, world');
  });
});
