Array.prototype.uniq = function uniq() {
  const uniqArr = [];

  for (var i = 0; i < this.length; i++) {
    if (uniqArr.indexOf(this[i]) <= -1 ){
      uniqArr.push(this[i]);
    }

  }
  return uniqArr;
};

Array.prototype.twoSum = function twoSum() {
  const zeroPairs = [];
  for (let i = 0; i < this.length; i++) {
    for (let k = i+1; k < this.length; k++) {
      if (this[i] + this[k] === 0) {
        zeroPairs.push([i, k]);
      }
    }
  }
  return zeroPairs;
};

// console.log([0,2,0,3,0].twoSum());


Array.prototype.transpose = function transpose() {
  const transposeArr = [];

  for (let i = 0; i < this.length; i++) {
    const rowArr = [];
    for (let k = 0; k < this.length; k++) {
      rowArr.push(this[k][i]);
    }
    transposeArr.push(rowArr);
  }
  return transposeArr;
};

// let arr = [[1,2],[3,4]];
// console.log(arr.transpose());
