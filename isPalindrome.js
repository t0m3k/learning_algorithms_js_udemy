function isPalindrome(word) {
    charArr = onlyaTozChars(stringToLowerCaseArray(word))
    for (let i = (Math.floor(charArr.length / 2) + charArr.length % 2); 0 < i; i--) {
        if(charArr[i - 1] !== charArr[charArr.length - i]) return false
    }
    return true
}


const onlyaTozChars = chars => {
    return chars.filter(char =>{
        return (char >= 'a' && char <= 'z')
    })
}

const stringToLowerCaseArray = word => word.toLowerCase().split('')

console.log(isPalindrome("A man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panamaA man, a plan, a canal: panama"))
