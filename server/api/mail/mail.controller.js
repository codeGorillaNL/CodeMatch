/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /mail              ->  index
 * POST    /mail              ->  create
 * GET     /mail/:id          ->  show
 * PUT     /mail/:id          ->  update
 * DELETE  /mail/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import nodemailer from 'nodemailer';

let smtpConfig = {
    host: 'smtp.transip.email',
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
        user: 'bert@codegorilla.nl',
        pass: 'c0d3G0r1lla'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
};

let transporter = nodemailer.createTransport(smtpConfig);

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    if(entity) {
      var updated = _.merge(entity, updates);
      return updated.save()
        .then(updated => {
          return updated;
        });
    }
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Mails
export function index(req, res) {
  return Mail.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Mail from the DB
export function show(req, res) {
  return Mail.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Mail in the DB
export function create(req, res) {
  
  var parseJson = function(data){
    var html = '';

    for(var i in data){
      html += i + ': ' + data[i] + '\n';
    }
    return html;
  }

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"CodeGorilla website." <admin@codegorilla.nl>',
      replyTo: '"' + req.body.name + '" <' + req.body.email + '>',
      to: 'bert.leiting@gmail.com',
      subject: 'New message from CodeGorilla website.',
      text: JSON.stringify(req.body, null, 2)
  };

  return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
          return res.status(403).end();
      }
      return res.status(200).json('Message sent');
  });
}

// Updates an existing Mail in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Mail.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Mail from the DB
export function destroy(req, res) {
  return Mail.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
