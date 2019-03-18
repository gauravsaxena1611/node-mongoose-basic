var mongoose = require('mongoose');

var authorModel = require('./app/model/author.model.js');
var bookModel = require('./app/model/book.model.js');

module.exports = function () {

    // New Author
    var jamieAuthor = new authorModel({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'Jamie',
            lastName: 'Munro'
        },
        biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
        twitter: 'https://twitter.com/endyourif',
        facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
    });

    jamieAuthor.save(function (err) {
        if (err) throw err;

        console.log('Author successfully saved.');

        // New Book document
        var mvcBook = new bookModel({
            _id: new mongoose.Types.ObjectId(),
            title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
            author: jamieAuthor._id,
            ratings: [{
                summary: 'Great read'
            }]
        });

        mvcBook.save(function (err) {
            if (err) throw err;

            console.log('Book successfully saved.');
        });

        // New Book document
        var knockoutBook = new bookModel({
            _id: new mongoose.Types.ObjectId(),
            title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
            author: jamieAuthor._id
        });

        knockoutBook.save(function (err) {
            if (err) throw err;

            console.log('Book successfully saved.');
        });

    });

};





/** Here flow starts by creating and saving a jamieObject that is created from an Author Model.
 *  Inside the save function of the jamieObject, if an error occurs,
 *  the application will output an exception.
 *
 *  When the save is successful, inside the save function, the two book objects are created and saved.
 *  Similar to the jamieObject, if an error occurs when saving, an error is outputted;
 *  otherwise, a success message is outputted in the console.
 *
 *  To create the reference to the Author, the book objects both reference the author
 *  schema's _id primary key in the author property of the book schema. */