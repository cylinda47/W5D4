function range(start, end) {
  return start === end ? end : [start].concat( range(start+1, end) );
}

// console.log(range(0,5));

function sumRec(arr) {
  return arr.length === 1 ? arr[0] : arr[0] + sumRec( arr.slice(1) );
}

// console.log( sumRec( [1,2,3,4]) );


function exponentType1(base, exp) {
  return exp === 0 ? 1 : base * exponentType1(base, exp - 1);
}


function exponentType2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1){
    return base;
  } else if (exp % 2 === 0){
    return Math.pow(exponentType2(base, exp/2), 2);
  } else if (exp % 2 === 1){
    return ( base * (Math.pow(exponentType2( base, ( (exp-1)/2) ), 2)) );
  }
}

// console.log(exponentType2(3, 1));
// console.log(exponentType2(3, 2));
// console.log(exponentType2(3, 3));
// console.log(exponentType2(3, 4));
// console.log(exponentType2(3, 5));


function fibonacci(n) { // n = first 5
  //base case
  if (n <= 0) {
    return null;
  } else if ( n === 1) {
    return [0];
  } else if (n === 2 ) {
    return [0, 1];
  }
  //inductive step
   return fibonacci(n-1).concat( [ fibonacci(n-1).slice(-1)[0] + fibonacci(n-2).slice(-1)[0] ] );

}

// console.log(fibonacci(5));

function bsearch(arr,target){
  if (arr.length === 0) {
    return -1;
  }

  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === target){
    return mid;

  // } else if (arr.length === 1) {
  //   if (arr[0] !== target) {
  //     return -1;
  //   }

  } else if (arr[mid] > target) {
    let leftArr = arr.slice(0, mid);
    return bsearch(leftArr, target);

  } else if (arr[mid] < target) {
    let rightArr = arr.slice(mid+1, arr.length);
    let rightSearch = bsearch(rightArr, target);

    return (rightSearch === -1) ? -1 : (rightSearch + mid+1);
    }

//offset by one OR deal with the case that there may an array length of 1 left over

  return -1;
}
//
// console.log(bsearch([1,2,3,4], 1));
// console.log(bsearch([1,2,3,4], 2));
// console.log(bsearch([1,2,3,4], 3));
// console.log(bsearch([1,2,4,5], 3));
// console.log(bsearch([1,2,3,4], 0));

function mergeSort(arr){
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let leftSort = mergeSort(arr.slice(0, mid));
  let rightSort = mergeSort(arr.slice(mid));

  return myMerge(leftSort, rightSort);
}

function myMerge(left, right) {
  const ansArr = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      ansArr.push(left.shift());
    } else if ( left[0] === right[0]) {
      ansArr.push(left.shift());
    } else if (left[0] > right[0]) {
      ansArr.push(right.shift());
    }
  }

  return ansArr.concat(left).concat(right);
}
//
// console.log(mergeSort([2,4,3]));

function subSets(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  const lastEl = arr.slice(-1)[0];// 1

  let newSubset = [];

  let oldSubset = subSets(arr.slice(0, -1));

  oldSubset.forEach(el => {
    // console.log(el.concat(lastEl));
    newSubset.push(el.concat(lastEl));
  });

  return oldSubset.concat(newSubset);
}

console.log(subSets([1,2,3]));

// subsets([]) # => [[]]
// subsets([1]) # => [[], [1]]




// subsets([1, 2]) # => [[], [1], [2], [1, 2]]
// subsets([1, 2, 3])
// # => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
