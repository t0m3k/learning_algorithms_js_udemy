function harmlessRansomNote(noteText, magazineText) {
    let noteArray = noteText.split(' ')
    let notePossible = true
    let magazineObj = {}
    magazineText.split(' ').forEach((word) => {
        if (!magazineObj[word]) magazineObj[word] = 0
        magazineObj[word]++
    })

    noteArray.forEach(word => {
        if  (magazineObj[word]) {
            magazineObj[word]--
        } else notePossible = false
    })

    return notePossible
}

let result = harmlessRansomNote('Tomasz Tracz to to to Tomasz', 'Tomasz Tracz Tomasz to to to')
result
