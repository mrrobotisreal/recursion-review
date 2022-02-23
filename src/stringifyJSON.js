// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // create result variable and set to empty string
  // if typeof obj is number
    // return concat number to obj
  // if typeof obj is boolean
    // return concat boolean to obj
  // if typeof obj is string
    // return string quotes around obj
  // if typeof obj is array
    // return string brackets around obj
  // iterate through the obj
    // recursively call stringifyJSON on each element (concat)
};
