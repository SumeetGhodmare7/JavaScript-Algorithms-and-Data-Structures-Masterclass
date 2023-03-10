function binarySearch(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (arr[mid] !== num && left <= right) {

    if (num < arr[mid]) {
      right = mid - 1;
    }
    else {
      left = mid + 1
    }
    mid = Math.floor(left + right) / 2
  }
  if (arr[mid] === num) {
    return mid;
  }
  return -1;
}

binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)