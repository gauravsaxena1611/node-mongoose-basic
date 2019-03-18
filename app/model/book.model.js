var mongoose = require('mongoose');
var bookSchema = require('../schema/book.schema.js');

var bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;

/** A Mongoose Model, when saved, creates a Document in MongoDB with the properties as defined 
 *  by the schema it is derived from. */