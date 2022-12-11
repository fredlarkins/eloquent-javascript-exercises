/*
Write a function that compares two objects to see if they are the same.
*/

function deepEquals(a, b, n=0) {
    if (!_bothAreObjects(a, b)) {
        return a === b;
    } else {
        if (!_sameLength(a, b)) {
            return false;
        } else {
            let aKeys = Object.keys(a);
            let bKeys = Object.keys(b);
            if (!_sameKey(aKeys[n], bKeys[n])) {
                return false;
            } else {
                if (!_sameValue(a, aKeys[n], b, bKeys[n])) {
                    return false;
                } else {
                    return n == aKeys.lenth - 1 || 
                                deepEquals(a[aKeys[n]], b[bKeys[n]], n++);
                    }
                }
            }
        }
    }





// helper functions
function _bothAreObjects(a, b) {
    function check(object) {
        return typeof object == 'object' && object != null;
    }
    return check(a) && check(b);
}

function _sameLength(a, b) {
    return Object.keys(a).length == Object.keys(b).length;
}

function _sameKey(aKey, bKey) {
    return aKey === bKey;
}

function _sameValue(a, aKey, b, bKey) {
    return a[aKey] === b[bKey];
}


let a = {
    'name' : 'Freddie',
    'surname' : 'Mercury',
    'isPopStar' : true,
};

let b = {
    'name' : 'Freddie',
    'surname' : 'Larkins',
    'isPopStar': false
};

console.log(deepEquals(a, b))


// Stealing solutions from EJ website! I tried.
function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }
  
  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true