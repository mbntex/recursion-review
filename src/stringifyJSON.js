// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // primitive types - number, boolean, string 
  var string = '';

  var recursiveStringify = function(obj) {
    if (obj === null || typeof obj === 'number' || typeof obj === 'boolean') {
      string += obj;
    }

    if (typeof obj === 'string') {
      string += `"${obj}"`;
    }

    // array
    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        string += '[]';
      } else {   
        string += '[';
        obj.forEach(val => {
          recursiveStringify(val);
          string += ',';
        });
        string = string.slice(0, string.length > 1 ? string.length - 1 : string.length) + ']';
      }
    }
    
    // object 
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      if (Object.keys(obj).length === 0) {
        string += '{}';
      } else {
        string += '{';
        for (var key in obj) {
          if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
            string += `"${key}":`;
            recursiveStringify(obj[key]);
            string += ',';
          } 
        }
        string = string.slice(0, string.length > 1 ? string.length - 1 : string.length) + '}';
      }
    }

  };
  
  recursiveStringify(obj);

  return string;

};
