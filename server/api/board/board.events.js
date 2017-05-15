/**
 * Board model events
 */

'use strict';

import {EventEmitter} from 'events';
import Board from './board.model';
var BoardEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
BoardEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Board.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    BoardEvents.emit(event + ':' + doc._id, doc);
    BoardEvents.emit(event, doc);
  }
}

export default BoardEvents;
