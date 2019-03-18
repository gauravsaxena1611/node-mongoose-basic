/** demonstrate how to find all books that contain the string "mvc" in their title. */

/** Inside the find function, I am searching for the case insensitive string "mvc" on the title property. 
 *  This is accomplished using the same syntax for searching a string with JavaScript.
 * 
 *  The find function call also be chained to other query methods, 
 *  such as where, and, or, limit, sort, any, etc.
 * 
 *  we limit our results to the first five books and sort on the created date descending. 
 *  This will return up to the five most recent books containing "mvc" in the title. */

var authorModel = require('./app/model/author.model.js');
var bookModel = require('./app/model/book.model.js');

module.exports.findUpdate = {

    findTop5BooksByTitle(ttl) {
        bookModel.find({
            title: ttl + '/i'
            //  title: /mvc/i
        }).sort('-created')
            .limit(5)
            .exec(function (err, books) {
                if (err) throw err;

                console.log(books);
            });
    },

    /** As I mentioned earlier, the findById is executed a bit differently. 
     *  It executes immediately and accepts a callback function, instead of allowing for a chain of 
     *  functions. In this next example, I am querying a specific author by their _id. */
    findAuthorById(id) {

        authorModel.findById(id, function (err, author) {
            //authorModel.findById('59b31406beefa1082819e72f', function (err, author) {
            if (err) throw err;

            author.linkedin = 'https://www.linkedin.com/in/jamie-munro-8064ba1a/';

            author.save(function (err) {
                if (err) throw err;

                console.log('Author updated successfully');
            });
        });
    },


    /** Once an object has been returned, you can modify any of its properties to update it. 
     *  Once you have made the necessary changes, you call the save method, just like when you were 
     *  creating the object. Here, we have extend the findbyId example and update the 
     *  linkedin property on the author. 
     * 
     *  After the author is successfully retrieved, the linkedin property is set and the save function is 
     *  called. Mongoose is able to detect that the linkedin property was changed, and it will send an update 
     *  statement to MongoDB on only the properties that have been modified. 
     * 
     *  If an error occurred when saving, an exception will be thrown and will halt the application. 
     *  When successful, a success message is logged to the console.*/

    findAuthorByIdAndUpdate(id) {
        authorModel.findByIdAndUpdate(id,
            //  authorModel.findByIdAndUpdate('59b31406beefa1082819e72f',
            { linkedin: 'https://www.linkedin.com/in/jamie-munro-8064ba1a/' },
            function (err, author) {
                if (err) throw err;

                console.log(author);
            });

    }

};


/** Mongoose also offers two additional functions that make finding an object and saving it in a
 *  single step with the appropriately named functions: findByIdAndUpdate and findOneAndUpdate.
 *
 *  In the code above, the properties to update are supplied as an object to the second parameter of
 *  the findByIdAndUpdate function. The callback function is now the third parameter.
 *  When the update is successful, the author object returned contains the updated information.
 *  This is logged to the console to see the updated author's properties.
 */