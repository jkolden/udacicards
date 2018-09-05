import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Platform, StyleSheet, TextInput, AsyncStorage } from 'react-native'
import { white, purple } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'


function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

export class AddDeck extends Component {

  state = {
    text: '',
}

  submit = () => {


    // Update Redux

    // Navigate to home

    // Save to "DB"
    saveDeckTitle(this.state.text)

    // Clear local notification
    this.setState({text: ''})
  }

  render () {

    return (

      <View>
      <TextInput
          style={{height: 40}}
          placeholder="Enter Title of Deck"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

      <SubmitBtn onPress={this.submit}/>

      </View>


      )
  }

  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
})