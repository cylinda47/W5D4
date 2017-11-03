Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for(let i=0; i<this.length-1; i++){
      if (this[i] > this[i+1]) {
        [this[i+1], this[i]] = [this[i], this[i+1]];
        sorted = false;
      }
    }
  }
  return this;
};

// console.log([5,3,1,10,0,-5].bubbleSort());

String.prototype.subStrings = function() {
  const allSubStrings = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      allSubStrings.push(this.slice(i, j));
    }
  }
  return allSubStrings;
};


const string = "Hello World!";

// console.log(string.subStrings());
