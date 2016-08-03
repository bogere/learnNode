
//defining modules for any complex web app/project...
//learn how to import functions from other files.

//importing from a file.
//var movies = require('./movies'); // avoid movies.js extension  as some systems dont allow browser access to file system
                               //./movies--- check in the same directory as iam... linux file path.
                              // Error: Cannot find module './movies'
 var movies = require('./movies/movies'); // like in linux file system.. relative path... recall the bad days..
 movies.avatar();
 movies.playArrow(); //let try with private function..