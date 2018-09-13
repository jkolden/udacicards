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
} from "react-native";
import { Button } from "react-native-elements";
import { saveName } from "../helpers/api";

export class DeckView extends Component {
  render() {
    const props = this.props.navigation.state.params;
    const navigation = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.item}>Deck: {props.name}</Text>
        <Text style={styles.item}>
          There are {props.questions.length} Questions in this deck
        </Text>
        <Button
          backgroundColor="#4696ec"
          style={{marginTop: 30}}
          title="Enter New Question"
          onPress={() => navigation.navigate("Question", { name: props.name })}
        />
        <Button
          backgroundColor="#96bf5c"
          style={{marginTop: 30}}
          title="Start Quiz"
          disabled={props.questions.length == 0}
          onPress={() => navigation.navigate("Quiz", { obj: props })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
