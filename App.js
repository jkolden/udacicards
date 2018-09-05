import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddDeck } from './components/AddDeck'
import { Decks } from './components/Decks'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <AddDeck />
        <Decks />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
