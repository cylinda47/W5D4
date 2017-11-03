const testArr = [1,2,3,4,5,6,7,8,9,10];


Array.prototype.myEach = function(cbFunction) {
  for (let i = 0; i < this.length; i++) {
    cbFunction(this[i]);
  }
  // return undefined; dont need this!
};

Array.prototype.map = function (cbFunction) {
  let arr = [];
  this.myEach(el => {
    arr.push(cbFunction(el));
  });
  console.log(arr);
};

const callbackFunc1 = function(el) {
  console.log(el);
};
// console.log(testArr.myEach(callbackFunc1));


const callbackFunc2 = function(el) {
  return el*2;
};
// console.log(testArr.map(callbackFunc2));


Array.prototype.myReduce = function(cbFunction, initialValue) {
  let accumulator = (typeof initialValue === 'undefined') ? 0 : initialValue;
  // let accumulator = initialValue;
  // if (typeof initialValue === 'undefined') {
  //   accumulator = 0;
  // }


  // if (!initialValue) {
  //   initialValue = arr[0];
  //   arr = arr.slice(1);
  // }

  this.myEach(el => {
    accumulator = cbFunction(accumulator, el);
  });

  return accumulator;
};


// // without initialValue
// console.log([1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// })); // => 6

// // with initialValue
// console.log([1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25)); // => 31
