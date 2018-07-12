const maxStockProfit = pricesArr => {
    let max = -1
    let buy = 0
    let sell = 0

    let changeBuy = true

    pricesArr.forEach((price, i) => {
        if(changeBuy) buy = price
        sell = pricesArr[i + 1]

        if(sell < buy) {
            changeBuy = true
        } else {
            const profit = sell - buy
            if(max < profit) max = profit
            changeBuy = false
        }
    })

    return max
}

const array = [10, 18, 4, 5, 9, 6, 16, 12]

const result = maxStockProfit(array)

console.log(result)
