// includes the mongoose library
var mongoose = require('mongoose');

var createDocuments = require('./create.documents.js');
var searchUpdateDocument = require('./search.update.document.js');

//we open a connection to a database that we have called mongoose_basics using the connect function.
mongoose.connect('mongodb://localhost:27017/mongoose_basics', function (err) {

    if (err) throw err;

    console.log('Mongodb Successfully connected');

    createDocuments();

    searchUpdateDocument.findUpdate.findTop5BooksByTitle('/mvc');

    searchUpdateDocument.findUpdate.findAuthorById("5c8f228c0431bc1f4c8e5717");

    searchUpdateDocument.findUpdate.findAuthorByIdAndUpdate("5c8f228c0431bc1f4c8e5717");

});

/** https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527 */