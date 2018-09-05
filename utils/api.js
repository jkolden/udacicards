import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'JK1'

const testData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function formatDeckResults(results) {
  return results === null
    ? testData
    : JSON.parse(results)
}

export function saveDeckTitle ( title ) {

  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      'title': title,
      'questions': []
    }

  }))
}

export function getDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(formatDeckResults)
}

