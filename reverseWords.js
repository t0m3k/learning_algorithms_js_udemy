
const reverseWords = (sentence) => {
    let wordsArray = sentence.split(' ')
    wordsArray = wordsArray.map((word) => {
        let result = ''
        for(let i = word.length - 1; i >= 0; i--) {
            result += word[i]
        }
        return result
    })

    return wordsArray.join(' ')
}

console.log(reverseWords('Some sentence to be word reversed'))
