
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

const sentence = 'Some sentence to be word reversed'

console.log(reverseWords(sentence))

/**
 * PROPOSED CODE:

    function reverseWords(string) {
    var wordsArr = string.split(' ');
    var reversedWordsArr = [];
    
    wordsArr.forEach(word => {
        var reversedWord = '';
        for (var i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
        };
        reversedWordsArr.push(reversedWord);
    });
    
    return reversedWordsArr.join(' ');
    }

    reverseWords('Coding JavaScript');

 */
