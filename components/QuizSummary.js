import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  FlatList,
  AsyncStorage
} from "react-native";
import { Button } from 'react-native-elements'


export class QuizSummary extends Component {

  render () {
     const navigation = this.props.navigation;
     const { incorrect, score } = navigation.state.params

    return (
      <ScrollView style={styles.container}>
      <Text style={styles.item}>Quiz Score: {score}%</Text>

      {incorrect.length > 0 &&
      <View>
      <Text style={styles.item}>Here are some things to study:</Text>
       <FlatList
          data={incorrect}
          renderItem={({item}) =><Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
         </View>
      }
      {incorrect.length == 0 &&
      <View>
      <Text style={styles.item}>Congratulations on a perfect score!!</Text>
      </View>
      }

      <Button
      backgroundColor="#4696ec"
      style={{ marginTop: 30 }}
      title='Return to Decks View'
      onPress={() => navigation.navigate('Names')}></Button>

      </ScrollView>
    )
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
    height: 44,
  },
})