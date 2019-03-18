var mongoose = require('mongoose');

/** Book schema that contains a reference to the author by using the ObjectId schema type: */
var bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    summary: String,
    isbn: String,
    thumbnail: Buffer,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    /** an Array of ratings. 
     *  Each rating consists of a summary, detail, numberOfStars, and created date property. */
    ratings: [
        {
            summary: String,
            detail: String,
            numberOfStars: Number,
            created: {
                type: Date,
                default: Date.now
            }
        }
    ],
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = bookSchema;


/** Mongoose allows you the flexibility to create schemas with references to other schemas or, 
 *  as in the above example with the ratings property, 
 *  it allows you to create an Array of child properties that could be contained 
 *  in a related schema (like book to author) 
 *  or inline as in the above example (with book to a ratings Array). */