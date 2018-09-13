import React, { Component } from 'react';
import { AppRegistry, FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { getNames } from '../helpers/api'
import { Card, Button } from 'react-native-elements'

export default class Names extends Component {

  render() {

    const data = this.props.screenProps.data
    const navigation = this.props.navigation

    return (
      <View style={styles.container, {flex: 1, flexDirection: 'row'}}>
        <FlatList style={{flex: 1}}
          data={Object.keys(data)}
          renderItem={({item}) =><Card><TouchableOpacity onPress={() =>
              navigation.navigate('DeckView', data[item])}><Text style={styles.item}>{item} </Text><Text style={styles.item}>{data[item].questions.length} Cards</Text></TouchableOpacity></Card>}
          keyExtractor={(item, index) => index.toString()}
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
    height: 44,
  },
})


