let weirdObject = {
    hasOwnProperty : 'cat',
    pet2: 'dog'
};

console.log(Object.prototype.hasOwnProperty.call(weirdObject, 'pet2'));