
const reverseArray = (array) => {
    const arrMax = array.length -1
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        const tmp = array[i]
        array[i] = array[arrMax - i]
        array[arrMax - i] = tmp
    }
    return array
}

const array1 = [1,2,3,4]
const array2 = [1,2,3]
const array3 = []
const array4 = ['raz', 'dwa']
const array5 = ['raz', 'dwa', 'trzy', 'cztery', 'piec']

console.log(reverseArray(array1)) // 4, 3, 2, 1
console.log(reverseArray(array2)) // 3, 2, 1
console.log(reverseArray(array3)) // []
console.log(reverseArray(array4)) // dwa, raz
console.log(reverseArray(array5)) // piec, czteru, trzy, dwa, raz

/**
 * Proposed solution:
 * 
 * 

function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  
  return arr;
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);


 * 
 */
