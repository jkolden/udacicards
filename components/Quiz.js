import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  AsyncStorage,
  Animated
} from "react-native";
import { Button, Card } from 'react-native-elements'

export class Quiz extends Component {
  state = {
    score: 0,
    questionIndex: 0,
    incorrectAnswers: [],
    opacity: new Animated.Value(0)
  };

  animate() {

    const { opacity } = this.state
    Animated.timing(opacity, {toValue: 1, duration: 2000})
    .start()
  }

  resetAnimation() {
    const { opacity } = this.state
    Animated.timing(opacity, {toValue: 0, duration: 100})
    .start()

  }

  computeScore = () => {
    const navigation = this.props.navigation;
    const questionArray = navigation.state.params.obj.questions;
    return Math.round((this.state.score / questionArray.length) * 100);
  };

  restart = () => {
    this.setState({
      score: 0,
      questionIndex: 0,
      incorrectAnswers: []
       }, () => {this.resetAnimation()});
  };

  recordCorrectAnswer = () => {
    const navigation = this.props.navigation;

    const length = this.props.navigation.state.params.obj.questions.length;
    let currentIndex = this.state.questionIndex;

    if (currentIndex + 1 == length) {
      this.setState(
        { score: this.state.score + 1 },
        () =>
          navigation.navigate("QuizSummary", {
            incorrect: this.state.incorrectAnswers,
            score: this.computeScore()
          })
      );
    } else {
      this.setState({
        questionIndex: this.state.questionIndex + 1,
        score: this.state.score + 1
      }, () => {this.resetAnimation()});
    }
  };

  recordIncorrectAnswer = question => {
    const navigation = this.props.navigation;
    const length = this.props.navigation.state.params.obj.questions.length;
    let currentIndex = this.state.questionIndex;

    let incorrectArray = this.state.incorrectAnswers;
    incorrectArray.push(question);

    if (currentIndex + 1 == length) {
      this.setState({
        incorrectAnswers: incorrectArray
      });
      navigation.navigate("QuizSummary", {
        incorrect: incorrectArray,
        score: this.computeScore()
      });
    } else {
      this.setState({
        questionIndex: this.state.questionIndex + 1,
        incorrectAnswers: incorrectArray
      }, () => {this.resetAnimation()});
    }
  };

  render() {
    const navigation = this.props.navigation;
    const questionArray = navigation.state.params.obj.questions;
    const { score, questionIndex, opacity } = this.state;
    let formattedScore = Math.round(
      (this.state.score / questionArray.length) * 100
    );

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Your Score: {this.computeScore()}%</Text>
        <Text style={styles.text}>
          This is question {questionIndex + 1} of {questionArray.length}
        </Text>
        <Card>


        <Text style={styles.text}>
          Question: {questionArray[questionIndex].question}
        </Text>
        <Animated.Text style={{fontSize: 20, height: 30}, {opacity}}>
          Answer: {questionArray[questionIndex].answer}
        </Animated.Text>
        <Button
        backgroundColor="#4696ec"
        onPress={() => this.animate()}
        style={{marginTop: 10}}
        title="Show answer" />

        <Button
        style={{marginTop: 30}}
        backgroundColor="#5cb85c"
        title="Correct"
        onPress={() => this.recordCorrectAnswer()}
        />
        <Button
          style={{marginTop: 30}}
          backgroundColor="#d9534f"
          title="Incorrect"
          onPress={() =>
            this.recordIncorrectAnswer(questionArray[questionIndex].question)
          }
        />

        <Button
        style={{marginTop: 30}}
        title="Reset Quiz"
        onPress={() => this.restart()} />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    height: 60,
    fontSize: 20
  }
});
