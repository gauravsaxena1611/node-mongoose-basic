var mongoose = require('mongoose');
var authorSchema = require('../schema/author.schema.js');

var authorModel = mongoose.model('Author', authorSchema);

module.exports = authorModel;

/** A Mongoose Model, when saved, creates a Document in MongoDB with the properties as defined 
 *  by the schema it is derived from. */