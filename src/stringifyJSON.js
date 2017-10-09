// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // primitive types - number, boolean, string 
  var string = '';

  var recursiveStringify = function(obj) {
    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
      string += obj; 
    }

    // array
    if (Array.isArray(obj)) {
      string += '[';
      obj.forEach(val => {
        recursiveStringify(val);
        string += ', ';
      });
      string = string.slice(0, string.length - 2) + ']';
    }
    
    // object 
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      string += '{';
      for (var key in obj) {
        string += `${key}: `;
        recursiveStringify(obj[key]);
        string += ', ';
      }
      string = string.slice(0, string.length - 2) + '}';
    }

  };
  
  recursiveStringify(obj);

  return string;

};
