function divide(arr, n) {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (const num of arr) {
    if (currentSum + num <= n) {
      currentSubarray.push(num);
      currentSum += num;
    } else {
      result.push(currentSubarray);
      currentSubarray = [num];
      currentSum = num;
    }
  }

  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
}

// Prompt user for input
// const arrInput = prompt("Enter array elements separated by commas:");
// const n = Number(prompt("Enter the maximum sum for subarrays:"));
// const arr = arrInput.split(',').map(Number);

// alert(JSON.stringify(divide(arr, n)))



