"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
title: String,
author: String,
category: String

// published: {
//   type: Date,
//   default: Date.now
// },
// keyuwords: Array,
// published: Boolean,
// author: {
//   type: Schema.ObjectId,
//   ref: 'User'
// },
// detail: {
//   modelNumber: Number,
//   hardCover: Boolean,
//   reviews: Number,
//   rank: Number
// }
});

module.exports = mongoose.model('Book', BookSchema);
