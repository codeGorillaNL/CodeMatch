'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var profileCtrlStub = {
  index: 'profileCtrl.index',
  show: 'profileCtrl.show',
  create: 'profileCtrl.create',
  update: 'profileCtrl.update',
  destroy: 'profileCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var profileIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './profile.controller': profileCtrlStub
});

describe('Profile API Router:', function() {

  it('should return an express router instance', function() {
    expect(profileIndex).to.equal(routerStub);
  });

  describe('GET /api/profiles', function() {

    it('should route to profile.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'profileCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/profiles/:id', function() {

    it('should route to profile.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'profileCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/profiles', function() {

    it('should route to profile.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'profileCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/profiles/:id', function() {

    it('should route to profile.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'profileCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/profiles/:id', function() {

    it('should route to profile.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'profileCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/profiles/:id', function() {

    it('should route to profile.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'profileCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
