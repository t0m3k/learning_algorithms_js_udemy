
const binarySearch = (array, num) => {
    let middle = Math.floor(array.length / 2)
    if(array[middle] === num) return true
    else if(array[middle] < num && 1 < array.length) return binarySearch(array.slice(middle), num)
    else if(num < array[middle] && 1 < array.length) return binarySearch(array.slice(0, middle), num)
    else return false
}

const array = [3, 4, 6, 12, 23, 25, 28, 42, 59, 82, 124, 431, 532, 576, 912, 1261, 1650]
const num = 532

console.log(binarySearch(array, num))

/**
 * Proposed code
 * 
    function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];
    
    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}
 * 
 */
