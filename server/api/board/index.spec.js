'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var boardCtrlStub = {
  index: 'boardCtrl.index',
  show: 'boardCtrl.show',
  create: 'boardCtrl.create',
  update: 'boardCtrl.update',
  destroy: 'boardCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var boardIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './board.controller': boardCtrlStub
});

describe('Board API Router:', function() {

  it('should return an express router instance', function() {
    expect(boardIndex).to.equal(routerStub);
  });

  describe('GET /api/boards', function() {

    it('should route to board.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'boardCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/boards/:id', function() {

    it('should route to board.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'boardCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/boards', function() {

    it('should route to board.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'boardCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/boards/:id', function() {

    it('should route to board.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'boardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/boards/:id', function() {

    it('should route to board.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'boardCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/boards/:id', function() {

    it('should route to board.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'boardCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
