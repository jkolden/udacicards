import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Platform, StyleSheet, FlatList } from 'react-native'
import { getDecks } from '../utils/api'

function Deck ({title}) {

  return (

    <View>
    <Text>{title}</Text>

    </View>

    )
}

export class Decks extends Component {

  render () {

    return (
      <View>
      {
        getDecks().then(data => {
          console.log('hello')
          Object.keys(data).map((deck) => <Deck key={data[deck].title} title={data[deck].title} />)
      })
    }

      </View>

      )
  }

}



