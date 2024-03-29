'use strict';

import mongoose from 'mongoose';

var BoardSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Board', BoardSchema);
