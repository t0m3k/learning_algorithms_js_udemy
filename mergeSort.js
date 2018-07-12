
const mergeSort = array => {
    if(array.length < 2) return array
    const middle = Math.floor(array.length / 2)
    const fHalf = array.slice(0, middle)
    const sHalf = array.slice(middle)

    return merge(mergeSort(fHalf), mergeSort(sHalf))

}

const merge = (array1, array2) => {
    const result = []

    while(array1.length && array2.length) {
        const e = (array1[0] < array2[0])
        ? array1.shift()
        : array2.shift()
        result.push(e)
    }

    // there might be some elements left in our arrays
    array1.forEach(item => result.push(item))
    array2.forEach(item => result.push(item))

    return result
}

const array = [6,3,54,6,3,23,67,8,3023,292,54,7,28,4,2,643,23,54,69,12,51,91,5,37,35,812,85]

const result = mergeSort(array)

console.log(result)


