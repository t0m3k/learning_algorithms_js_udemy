const primesUpTo = (num) => {
    const sqrtn = Math.floor(Math.sqrt(num))
    sqrtn
    let result = []
    arr = []

    for(let i = 0; i <= num; i++) {
        arr[i] = true
    }

    arr.forEach((v, index) => {
        if(index < 2) arr[index] = false
        else if(index <= sqrtn) {
            for(let i = index * 2; i <= num; i += index) {
                arr[i] = false
            }
        }
    })

    arr.forEach((v, index) => {
        if(v) result.push(index)
    })

    return result
}

const res = primesUpTo(200)

console.log(res)
