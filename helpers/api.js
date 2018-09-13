import { AsyncStorage } from 'react-native'

const KEY = 'KEY2'

const testData = {
  John: {
    name: 'John',
    questions: []
  },
  Mariah: {
    name: 'Mariah',
    questions: [{
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      }
    ]
  }
}

function formatResults(results) {
 // return results === null
   // ? testData :
    JSON.parse(results)
}

export function saveName ( name ) {
  return AsyncStorage.mergeItem(KEY, JSON.stringify({
    [name]: {
      'name': name,
      'questions': []
    }
  }))
}

export function getNames () {
  return AsyncStorage.getItem(KEY)
  .then(formatResults)
}

export function addCardToDeck(name, card) {

    return AsyncStorage.getItem(KEY, (err, result) => {
        const obj = JSON.parse(result)
        const questions = obj[name].questions
        questions.push(card)

        AsyncStorage.mergeItem(KEY, JSON.stringify({
            [name]: {
                'questions': questions
            }
        }))

    });
}
