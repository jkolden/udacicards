import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Platform, StyleSheet, FlatList } from 'react-native'
import { getDecks } from '../utils/api'

function Deck ({title, questions}) {

  return (

    <View>
    {title !== null && <Text>{title}, {questions} Cards</Text>}

    </View>

    )
}

export class Decks extends Component {

  state = {}

  componentDidMount() {
    getDecks().then(data => this.setState(data))
  }

  render () {

    return (
      <View style={styles.center}>

       {
          Object.keys(this.state).map((deck) => <Deck key={this.state[deck].title} title={this.state[deck].title} questions={this.state[deck].questions.length} />)
    }

      </View>

      )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
})



