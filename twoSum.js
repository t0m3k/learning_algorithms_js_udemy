const twoSum = (numArray, sum) => {
    const result = []
    const hashTable = []
    numArray.forEach((num) => {
        if(hashTable.includes(sum - num)) result.push([num, sum-num])
        hashTable.push(num) 
    })
    return result
}

const array = [5,1,6,4,5,2,3,1,5,2,3]

const num = 6

console.log(twoSum(array, num))
