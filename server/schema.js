var mongoose = require('mongoose'),
    moment = require('moment'),
    main = require("./main"),
    Schema = mongoose.Schema;

/*
  TODO: Add a Mongoose schema for storing files on this server
*/

var DocumentSchema = new Schema({


});

DocumentSchema.pre('save', function(next) {

  // Update updatedAt time
  this.updatedAt = new Date();

  // TODO: Add more pre-save actions for Documents...

  next();
});

var Game = module.exports = mongoose.model('Game', GameSchema);
