// var db = require('./models');
//
// var band_list = [
//   {
//     name: "To Kill a Mockingbird",
//     origin: "Harper Lee",
//     genre: "https://s3-us-west-2.amazonaws.com/sandboxapi/to_kill_a_mockingbird.jpg",
//     established: "July 11, 1960"
//   },
//   {
//     name: "The Great Gatsby",
//     origin: "F Scott Fitzgerald",
//     genre: "https://s3-us-west-2.amazonaws.com/sandboxapi/great_gatsby.jpg",
//     established: "April 10, 1925"
//   },
//   {
//     name: "Les Miserables",
//     origin: "Victor Hugo",
//     genre: "https://s3-us-west-2.amazonaws.com/sandboxapi/les_miserables.jpg",
//     established: "Unknown 1862"
//   },
//   {
//     name: "Around the World in 80 Days",
//     origin: "Jules Verne",
//     genre: "https://s3-us-west-2.amazonaws.com/sandboxapi/around_the_world_in_80_days.jpg",
//     established: "January 30, 1873"
//   },
//   {
//     name: "Lean In",
//     origin: "Sheryl Sandberg",
//     genre: "https://s3-us-west-2.amazonaws.com/sandboxapi/lean_in.jpg",
//     established: "March 11, 2013"
//   },
//   {
//     name: "The Four Hour Workweek",
//     origin: "Tim Ferriss",
//     genre: "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg",
//     established: "April 1, 2007"
//   },
//   {
//     name: "Of Mice and Men",
//     origin: "John Steinbeck",
//     genre: "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg",
//     established: "Unknown 1937"
//   },
//   {
//     name: "Romeo and Juliet",
//     origin: "William Shakespeare",
//     genre: "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
//     established: "Unknown 1597"
//   }
// ];
//
// // remove all records that match {} -- which means remove ALL records
// db.Band.remove({}, function(err, books){
//   if(err) {
//     console.log('Error occurred in remove', err);
//   } else {
//     console.log('removed all books');
//
//   }
// });
// function createBand (req, res) {
//   // db.Band.create(bands_list, function(err, books){
//   //   if (err) { return console.log('err', err); }
//   //   console.log("created", band.length, "books");
//   // //   process.exit();
//   // });
//   const newBand = db.Band ({
//     name: req.body.name,
//     origin: req.body.origin,
//     genre: req.body.genre,
//     established: req.body.established
//
//   })
//   // newBand.save(function (err, data){
//   //   if (err) { return console.log('err', err);
//   // } else {
//   //   newBand.json(data)
//   // }
//
// });
//
//
// module.exports {
//   createBand: createBand
// }
//     // create new records based on the array books_list
//     // db.Band.create(bands_list, function(err, books){
//     //   if (err) { return console.log('err', err); }
//     //   console.log("created", band.length, "books");
//     //   process.exit();
//     // });
//   // }
// });
