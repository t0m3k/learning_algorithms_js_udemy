const caesarCipher = (sentence, i = 1) => {
    const charArr = sentence.split('')
    const cipher = charArr.map(char => moveChar(char, i))
    return cipher.join('')
}

const moveChar = (char, i = 1) => {
    const charCode = char.charCodeAt(0)
    const chars = {
        'A': 'A'.charCodeAt(0),
        'Z': 'Z'.charCodeAt(0),
        'a': 'a'.charCodeAt(0),
        'z': 'z'.charCodeAt(0)
    }

    if(i > (chars['z'] - chars['a'] + 1)) 
        i = i % (chars['z'] - chars['a'] + 1)

    if(charCode <= chars['Z'] && charCode >= chars['A']) {
        return stringFromCode(addIntWithLimits(charCode, i, chars['A'], chars['Z']))
    } else  
    
    if(charCode <= chars['z'] && charCode >= chars['a']) {
        return stringFromCode(addIntWithLimits(charCode, i, chars['a'], chars['z']))
    } else return char

   
}

const addIntWithLimits = (i, add, lowLimit, highLimit) => {
    const diff = highLimit - lowLimit

    if(i < lowLimit) {
        i = lowLimit
        add = add - lowLimit
        if(add < 1) return i
    }

    if(add > diff) {
        add = add % (diff + 1)
    }

    if (i > highLimit) i = highLimit

    if(i + add <= highLimit)
        return i + add
    else return i + add - diff - 1
}

const stringFromCode = code => String.fromCharCode(code)

console.log(caesarCipher('Zoo keeper', 2)) // should respond with Bqq mggrt
console.log(caesarCipher('ABCabc', 27)) // should respond with Bqq mggrt

console.log(addIntWithLimits(0, 8, 0, 5))
console.log(addIntWithLimits(6, 8, 0, 5))
console.log(addIntWithLimits(1, 8, 4, 5))
console.log(addIntWithLimits(1, 2, 15, 20))