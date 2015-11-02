var rand = require('rand-range');

var choice = function(arr){
    if (arr.constructor !== Array) 
        throw Error('Argument is not an array'); 
    index = rand.randomInt(0, arr.length-1);
    return arr[index];
};

module.exports.choice = choice;