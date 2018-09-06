import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Platform, StyleSheet, TextInput, AsyncStorage } from 'react-native'
import { white, purple } from '../utils/colors'


export function DeckView ({ navigation} ) {

  const title = navigation.state.params.title

  return (

    <View style={styles.center}>
    <Text>Deck View for {title}</Text>

    </View>
    )

}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
})
