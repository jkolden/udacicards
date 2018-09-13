import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  AsyncStorage,
  Header
} from "react-native"
import { Button, Card } from 'react-native-elements'
import { addCardToDeck } from "../helpers/api";

export class Question extends Component {
  state = {
    question: "",
    answer: ""
  };

  submit = name => {
    const addQuestion = this.props.screenProps.addQuestion;

    addCardToDeck(name, {
      question: this.state.question,
      answer: this.state.answer
    });
    // Clear input
    this.setState({ question: "" });
    this.setState({ answer: "" });

    //update state
    addQuestion(name, {
      question: this.state.question,
      answer: this.state.answer
    });
  };

  render() {
    const name = this.props.navigation.state.params.name;
    const navigation = this.props.navigation;

    return (
      <View>
        <Text style={{ height: 40, fontSize: 20 }}>You are entering cards for deck: {name}</Text>
        <Card>
        <TextInput
          style={{ height: 40, fontSize: 20 }}
          placeholder="Enter Question"
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
        />
        <TextInput
          style={{ height: 40, fontSize: 20 }}
          placeholder="Enter Answer"
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
        />
        <Button
          backgroundColor="#4696ec"
          style={{marginTop: 30}}
          title="Save and Create Another"
          disabled={this.state.answer == '' || this.state.question == ''}
          onPress={() => {
            this.submit(name);
          }}
        />

        <Button
          backgroundColor="#96bf5c"
          style={{marginTop: 30}}
          title="Save and Return to Decks View"
          disabled={this.state.answer == '' || this.state.question == ''}
          onPress={() => {
            this.submit(name), navigation.navigate("Names");
          }}
        />
        </Card>
      </View>
    );
  }
}
