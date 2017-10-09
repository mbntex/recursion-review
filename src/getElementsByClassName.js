// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, el) {
  // your code here
  var ret = []; 
  if (el === undefined) {
    el = document.body;
  }

  var traverseDOM = function(className, el) {
    var classList = el.classList;
    //check each element for classes
    if (classList && classList.length > 0) {
      for (var i = 0; i < classList.length; i++) {
        if (classList[i] === className) {
          ret.push(el);
          break;
        }
      }
    }
    //recursionification
    if (el.childNodes) {
      for (var j = 0; j < el.childNodes.length; j++) {
        traverseDOM(className, el.childNodes[j]);
      }
    }
  };
////

  traverseDOM(className, el); 

  return ret;
};


