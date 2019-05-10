function nestedEvenSum(obj) {
 // setup return value
  let ret_val = 0;
  // loop over the items in the object
  Object.keys(obj).forEach((o) => {
    // check if the current item's value is an object
    if (typeof(obj[o]) === 'object') {
      // if it is, then recursively call on it
      ret_val += nestedEvenSum(obj[o]);
    }
    // next, check if its value is a number 
    else if (typeof(obj[o]) === 'number') {
      // if it is, need to determine whether or not it's even
      if (obj[o] % 2 == 0) {
        // if it is, then add it to the return value
        ret_val += obj[o];  
      }
    // otherwise, it's not a number, so ignore
    }
    // otherwise, it's not an object nor a number, so ignore
  });
  // after looping thru all such items, we're done
  return ret_val; 
};

// testing
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));