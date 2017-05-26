/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/profiles              ->  index
 * POST    /api/profiles              ->  create
 * GET     /api/profiles/:id          ->  show
 * PUT     /api/profiles/:id          ->  update
 * DELETE  /api/profiles/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import User from '../user/user.model';

var profiles = [
  {
    "_id": "591b1647130e676cb8c272db",
    "picture": "http://placebeard.it/450/300",
    "name": "Travis Green",
    "skills": [
      "ullamco",
      "magna",
      "sint",
      "nisi",
      "sint",
      "do",
      "officia"
    ],
    "jobTtitle": "codeZilla"
  },
  {
    "_id": "591b164792796b32d6e334db",
    "picture": "http://placebeard.it/450/300",
    "name": "Jerry Valenzuela",
    "skills": [
      "exercitation",
      "dolore",
      "cupidatat",
      "aute",
      "esse",
      "pariatur",
      "anim"
    ],
    "jobTtitle": "Junior-developer"
  },
  {
    "_id": "591b16478330f466ab2ac175",
    "picture": "http://placebeard.it/450/300",
    "name": "Crosby Head",
    "skills": [
      "laborum",
      "commodo",
      "aute",
      "nostrud",
      "aute",
      "excepteur",
      "pariatur"
    ],
    "jobTtitle": "codeZilla"
  },
  {
    "_id": "591b1647f1340eafb484350a",
    "picture": "http://placebeard.it/450/300",
    "name": "Kelley Mckee",
    "skills": [
      "laboris",
      "ullamco",
      "esse",
      "esse",
      "elit",
      "ad",
      "officia"
    ],
    "jobTtitle": "codeZilla"
  },
  {
    "_id": "591b1647f2e95ca4b5f86873",
    "picture": "http://placebeard.it/450/300",
    "name": "Mullins Benson",
    "skills": [
      "proident",
      "duis",
      "eiusmod",
      "tempor",
      "eiusmod",
      "ad",
      "dolor"
    ],
    "jobTtitle": "codeZilla"
  },
  {
    "_id": "591b16475131b0e4753831cf",
    "picture": "http://placebeard.it/450/300",
    "name": "Dunn Crosby",
    "skills": [
      "sint",
      "non",
      "est",
      "excepteur",
      "quis",
      "labore",
      "tempor"
    ],
    "jobTtitle": "Senior-developer"
  },
  {
    "_id": "591b1647926cd0772449de7d",
    "picture": "http://placebeard.it/450/300",
    "name": "Allison Mack",
    "skills": [
      "nostrud",
      "incididunt",
      "cupidatat",
      "enim",
      "eu",
      "eiusmod",
      "proident"
    ],
    "jobTtitle": "Junior-developer"
  },
  {
    "_id": "591b1647dfa01e9a3ceff8e3",
    "picture": "http://placebeard.it/450/300",
    "name": "Frieda Meyer",
    "skills": [
      "enim",
      "occaecat",
      "nostrud",
      "dolor",
      "dolor",
      "in",
      "duis"
    ],
    "jobTtitle": "Junior-developer"
  },
  {
    "_id": "591b1647f0468d5a6d177e8c",
    "picture": "http://placebeard.it/450/300",
    "name": "Winnie Joseph",
    "skills": [
      "pariatur",
      "anim",
      "consequat",
      "aute",
      "veniam",
      "aliqua",
      "occaecat"
    ],
    "jobTtitle": "Junior-developer"
  },
  {
    "_id": "591b16478e523a61b5bd5d38",
    "picture": "http://placebeard.it/450/300",
    "name": "Kramer Barrera",
    "skills": [
      "occaecat",
      "ut",
      "officia",
      "occaecat",
      "ad",
      "ad",
      "labore"
    ],
    "jobTtitle": "Senior-developer"
  },
  {
    "_id": "591b1647ace8c67b04d0c7f4",
    "picture": "http://placebeard.it/450/300",
    "name": "Gilbert Tran",
    "skills": [
      "ex",
      "qui",
      "esse",
      "amet",
      "laborum",
      "sint",
      "occaecat"
    ],
    "jobTtitle": "Junior-developer"
  },
  {
    "_id": "591b164777abcc1aa393e2ab",
    "picture": "http://placebeard.it/450/300",
    "name": "Bell Wyatt",
    "skills": [
      "aute",
      "ipsum",
      "non",
      "fugiat",
      "sit",
      "ea",
      "culpa"
    ],
    "jobTtitle": "Junior-developer"
  },
  {
    "_id": "591b1647dc34e61087d82325",
    "picture": "http://placebeard.it/450/300",
    "name": "Lorene Hayden",
    "skills": [
      "consequat",
      "adipisicing",
      "proident",
      "pariatur",
      "est",
      "ullamco",
      "nostrud"
    ],
    "jobTtitle": "Senior-developer"
  },
  {
    "_id": "591b1647beb62b8cd7b7dd53",
    "picture": "http://placebeard.it/450/300",
    "name": "Avila Buckner",
    "skills": [
      "veniam",
      "ullamco",
      "excepteur",
      "deserunt",
      "sint",
      "cillum",
      "exercitation"
    ],
    "jobTtitle": "Junior-developer"
  },
  {
    "_id": "591b16479bbe0d76132bbe11",
    "picture": "http://placebeard.it/450/300",
    "name": "Hill Conner",
    "skills": [
      "aliquip",
      "magna",
      "cupidatat",
      "fugiat",
      "eiusmod",
      "est",
      "nulla"
    ],
    "jobTtitle": "codeZilla"
  },
  {
    "_id": "591b1647fb5c7a8dd965c439",
    "picture": "http://placebeard.it/450/300",
    "name": "Socorro Heath",
    "skills": [
      "Lorem",
      "officia",
      "qui",
      "ad",
      "non",
      "laborum",
      "nulla"
    ],
    "jobTtitle": "codeZilla"
  },
  {
    "_id": "591b1647d4b0a236967a41a2",
    "picture": "http://placebeard.it/450/300",
    "name": "Cathleen Justice",
    "skills": [
      "et",
      "aliquip",
      "voluptate",
      "dolor",
      "aliquip",
      "nisi",
      "voluptate"
    ],
    "jobTtitle": "Junior-developer"
  }
]

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

// Gets a list of Profiles
export function index(req, res) {
  return User.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Profile from the DB
export function show(req, res) {
  return Profile.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Profile in the DB
export function create(req, res) {
  return Profile.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Profile in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Profile.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Profile from the DB
export function destroy(req, res) {
  return Profile.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
