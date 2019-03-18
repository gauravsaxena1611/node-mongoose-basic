var mongoose = require('mongoose');

// the author schema
var authorSchema = mongoose.Schema({
    /** To link the Author and Book together, 
     *  the first property of the author schema is an _id property that is an ObjectId schema type.
     * 
     * _id is the common syntax for creating a primary key in Mongoose and MongoDB*/
    _id: mongoose.Schema.Types.ObjectId,
    //the firstname and lastname properties are the child objects of a name property
    name: {
        firstName: {
            type: String,
            /** The firstName property has been attributed with the required property. 
             *  Now when I call the save function, Mongoose will return an error with a message 
             *  indicating the firstName property is required. */
            required: true
        },
        lastName: String
    },
    biography: String,
    /** The twitter, facebook, and linkedin properties all have very similar custom validators 
     *  applied to them. They each ensure that the values begin with the social networks' respective 
     *  domain name. These fields are not required, so the validator will only be applied when data 
     *  is supplied for that property */
    twitter: {
        type: String,
        validate: {
            validator: function (text) {
                return text.indexOf('https://twitter.com/') === 0;
            },
            message: 'Twitter handle must start with https://twitter.com/'
        }
    },
    facebook: {
        type: String,
        validate: {
            validator: function (text) {
                return text.indexOf('https://www.facebook.com/') === 0;
            },
            message: 'Facebook must start with https://www.facebook.com/'
        }
    },
    linkedin: {
        type: String,
        validate: {
            validator: function (text) {
                return text.indexOf('https://www.linkedin.com/') === 0;
            },
            message: 'LinkedIn must start with https://www.linkedin.com/'
        }
    },
    // a Buffer schema type that could hold the author's profile picture
    profilePicture: Buffer,
    /** Created property of type Date. 
     *  it has defined a default value of "now". 
     *  When an author is persisted to the database, 
     * this property will be set to the current date/time */
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = authorSchema;