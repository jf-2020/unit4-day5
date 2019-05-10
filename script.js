function flatten(arr) {
 // setup return value
  const ret_val = [];
  // loop over the items in the array
  arr.forEach((e) => {
    // check if the current item is an array
    if (Array.isArray(e)) {
      // if it is, then recursively call flatten on it
      ret_val.push(...flatten(e));
    } else {
      // otherwise, it's not, so append it to the return value
      ret_val.push(e);
    }
  });
  // after looping thru all such items, we're done
  return ret_val; 
};

const tests = [[1, 2, 3, [4, 5]],
               [1, [2, [3, 4], [[5]]]],
               [[1],[2],[3]],
               [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]
              ];
tests.forEach((test) => {
  console.log(flatten(test));
});