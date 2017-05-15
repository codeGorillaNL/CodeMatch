'use strict';

var app = require('../..');
import request from 'supertest';

var newBoard;

describe('Board API:', function() {

  describe('GET /api/boards', function() {
    var boards;

    beforeEach(function(done) {
      request(app)
        .get('/api/boards')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          boards = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(boards).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/boards', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/boards')
        .send({
          name: 'New Board',
          info: 'This is the brand new board!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newBoard = res.body;
          done();
        });
    });

    it('should respond with the newly created board', function() {
      expect(newBoard.name).to.equal('New Board');
      expect(newBoard.info).to.equal('This is the brand new board!!!');
    });

  });

  describe('GET /api/boards/:id', function() {
    var board;

    beforeEach(function(done) {
      request(app)
        .get('/api/boards/' + newBoard._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          board = res.body;
          done();
        });
    });

    afterEach(function() {
      board = {};
    });

    it('should respond with the requested board', function() {
      expect(board.name).to.equal('New Board');
      expect(board.info).to.equal('This is the brand new board!!!');
    });

  });

  describe('PUT /api/boards/:id', function() {
    var updatedBoard;

    beforeEach(function(done) {
      request(app)
        .put('/api/boards/' + newBoard._id)
        .send({
          name: 'Updated Board',
          info: 'This is the updated board!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedBoard = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedBoard = {};
    });

    it('should respond with the updated board', function() {
      expect(updatedBoard.name).to.equal('Updated Board');
      expect(updatedBoard.info).to.equal('This is the updated board!!!');
    });

  });

  describe('DELETE /api/boards/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/boards/' + newBoard._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when board does not exist', function(done) {
      request(app)
        .delete('/api/boards/' + newBoard._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
