//задание 1
function recursiveReverseString(inputStr) {
  if (typeof inputStr === 'string')
    return inputStr
      ? recursiveReverseString(inputStr.substring(1)) + inputStr[0]
      : inputStr;
  else throw new TypeError('Input is not a string.');
}

console.log(recursiveReverseString('qwerty'));

//задание 2
function recursiveBinarySearch(
  array,
  target,
  startIndex = 0,
  endIndex = array.length
) {
  if (!Array.isArray(array)) throw new TypeError('Input is not an array.');

  if (startIndex > endIndex) return -1;
  let middleIndex = Math.floor((startIndex + endIndex) / 2);

  if (target < array[middleIndex])
    return recursiveBinarySearch(array, target, startIndex, middleIndex - 1);
  else if (target > array[middleIndex])
    return recursiveBinarySearch(array, target, middleIndex + 1, endIndex);
  else return middleIndex;
}

const array = [2, 3, 5, 7, 9, 12, 17, 20];

console.log(recursiveBinarySearch(array, 2));
console.log(recursiveBinarySearch(array, 3));
console.log(recursiveBinarySearch(array, 5));
console.log(recursiveBinarySearch(array, 7));
console.log(recursiveBinarySearch(array, 9));
console.log(recursiveBinarySearch(array, 12));
console.log(recursiveBinarySearch(array, 17));
console.log(recursiveBinarySearch(array, 20));
console.log(recursiveBinarySearch(array, 20, 0, 5));
console.log(recursiveBinarySearch(array, 20, 3, 6));
console.log(recursiveBinarySearch({}, 20));
