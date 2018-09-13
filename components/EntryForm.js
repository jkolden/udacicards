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
import { saveName } from "../helpers/api";
import { Card, Button } from "react-native-elements";

export default class EntryForm extends Component {
  state = {
    text: ""
  };

  submit = () => {
    saveName(this.state.text);

    // Clear input
    this.setState({ text: "" });
  };

  render() {
    const navigation = this.props.navigation;
    const data = this.props.screenProps.data;
    const update = this.props.screenProps.update;

    return (
      <View style={styles.container}>
        <Card>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>
            Enter a name for this flashcard deck
          </Text>
          <TextInput
            style={{ height: 40, fontSize: 20 }}
            placeholder="Enter Name"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            autoCapitalize="words"
          />

          <Button
            backgroundColor="#4696ec"
            style={{ marginTop: 30 }}
            onPress={() => {
              navigation.navigate("Names", { ...this.state });
              update(this.state.text);
              this.submit();
            }}
            title="Submit"
            disabled={!this.state.text}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  }
});
