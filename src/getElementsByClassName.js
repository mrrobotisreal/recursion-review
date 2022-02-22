// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element
) {
  // Second parameter (element)
  console.log('Element: ' + element);
  // Create accumulator array
  var accumulator = [];
  // Set that element to have a value of element if passed or document.body
  element = element || document.body;
  // If current element contains the className
  if (element.classList && element.classList.contains(className)) {
    // Push to an accumulator array
    accumulator.push(element);
  }
  // If current element has childNodes
  if (element.hasChildNodes()) {
    // Iterate through the childNodes
    element.childNodes.forEach(function(child) {
      // Recursively call getElementsByClassName on each child node (concat)
      accumulator = accumulator.concat(getElementsByClassName(className, child));
    });
  }
  // Return accumulator array
  return accumulator;
};
