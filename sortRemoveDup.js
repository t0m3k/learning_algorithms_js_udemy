const mergeSort = (array) => {
  if (array.length < 2) return array;
  const middle = Math.floor(array.length / 2);
  const arr1 = array.slice(0, middle);
  const arr2 = array.slice(middle);

  return merge(mergeSort(arr1), mergeSort(arr2));
};

const merge = (arr1, arr2) => {
  const result = [];

  while (arr1.length && arr2.length) {
    const e = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();

    console.log(
      `e: ${e}; last: ${result[result.length - 1]}; result: ${result}`
    );
    if (result.length === 0 || e != result[result.length - 1]) result.push(e);
  }

  // there might be some elements left in our arrays
  arr1.forEach((item) => {
    if (item != result[result.length - 1]) result.push(item);
  });

  arr2.forEach((item) => {
    if (item != result[result.length - 1]) result.push(item);
  });

  return result;
};
