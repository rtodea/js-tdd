const expect = require('chai').expect;
const sinon = require('sinon');

const someModule = require('../../src/some-module');


describe('some-module', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  let sut = null;
  describe('firstFunction', () => {
    sut = someModule.firstFunction;

    const secondFunctionReturn = 'secondFunctionStub';
    beforeEach(() => {
      // This is will not be used ever...
      sandbox.stub(someModule, 'secondFunction')
        .returns(secondFunctionReturn);
    });

    xit('should mock the second function', () => {
      expect(someModule.secondFunction('anything')).to.eql(secondFunctionReturn);
      expect(sut()).to.not.eql(secondFunctionReturn);
    });
  });

});
