'use strict';

import mongoose from 'mongoose';

var ProfileSchema = new mongoose.Schema({
  _user: { type: Number, ref: 'User' },
  job_title: String,
  caps: [],
  active: Boolean
});

export default mongoose.model('Profile', ProfileSchema);
