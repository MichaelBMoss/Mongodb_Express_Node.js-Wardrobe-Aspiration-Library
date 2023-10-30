require('dotenv').config();
require('./config/database');

const Product = require('./models/product');
const Performer = require('./models/performer');

(async function() {

  /*-- Write the code for each exercise below --*/

  let result;

  console.log('BEGIN EXERCISES...')
  
  // 1) Find all product docs (solution provided as an example)
  result =  await Product.find({});
  console.log('1): ', result);
  

  // 2) Find all performer docs
  // Be sure to assign to result, e.g.:
  // result = await ...
  result = await Performer.find({});
  console.log('2): ', result);
  
  
  // 3) Find all products with an MPAA Rating of 'PG'
  result = await Product.find({ mpaaRating: 'PG' });
  console.log('3): ', result);
  
  
  // 4) Find all products that are still showing
  result = await Product.find({ nowShowing: true });
  console.log('4): ', result);

  
  // 5) Find all products with an MPAA Rating of 'PG' or 'PG-13'
  // Hint: Google "MongoDB $in operator" or use Mongoose's .where & .in Query Builder methods using this syntax:
  // Model.where('property').in(['val1', 'val2', etc.]).then(...)
  // result = await Product.find({ mpaaRating: { $in: ['PG', 'PG-13'] } });  // mongoDB syntax
  result = await Product.where('mpaaRating').in(['PG', 'PG-13']);  // mongoose query builder syntax
  console.log('5): ', result);

  
  // 6) Find the first product found with a releaseYear of 2018
  result = await Product.findOne({ releaseYear: 2018 });
  console.log('6): ', result);

  
  // 7) Find all products released after 1980
  // result = await Product.where('releaseYear').gt(1980);  // mongoose query builder
  result = await Product.find({ releaseYear: { $gt: 1980 } });  // mongoDB syntax
  console.log('7): ', result);

  
  // 8) Find all products whose titles start with a 'C'
  // Hint: Great use-case for a regular expression
  result = await Product.find({ title: /^C/ });  // The ^ matches the start of the string
  console.log('8): ', result);

  
  // 9) Find the performer named 'Rami Malek'
  result = await Performer.findOne({ name: 'Rami Malek' });
  console.log('9): ', result);

  
  // 10) Find all performers born before 1980
  // result = await Performer.where('born').lt(1980);  // mongoose query builder
  result = await Performer.find({ born: { $lt: 1980 } });  // mongoDB syntax
  console.log('10): ', result);

  
  // 11) Find all performers whose name starts with a 'J'
  // Hint: Regular Expressions strike again!
  result = await Performer.find({ name: /^J/ });
  console.log('11): ', result);

  
  // 12) Add the ObjectId of performer 'Bill Murray' to
  //     the product Caddyshack's cast property and save.
  //     console.log the updated product.
  result = await Promise.all([
    Product.findOne({ title: 'Caddyshack' }),
    Performer.findOne({ name: 'Bill Murray' })
  ]);
  result[0].cast.push(result[1]);
  await result[0].save();
  console.log('12): ', result);
  
  
  // Lastly, use process.exit() to "cleanly" shut down the Node program
  process.exit();
})();
