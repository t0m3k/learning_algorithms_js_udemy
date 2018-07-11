const bubbleSort = (arr) => {
    for(let i = arr.length; 0 < i; i--) {
        for(let pos = 0; pos < i; pos++) {
            if(arr[pos] > arr[pos + 1]) {
                const tmp = arr[pos]
                arr[pos] = arr[pos + 1]
                arr[pos + 1] = tmp
            }
        }
    }
    return arr
}

arr = [102,4,5,2,67,3,7,8,5,9]

res = bubbleSort(arr)

console.log(res)
