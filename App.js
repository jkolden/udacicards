import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { AddDeck } from './components/AddDeck'
import { Decks } from './components/Decks'
import { createBottomTabNavigator } from 'react-navigation';
import { white, purple } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'


const Tabs = createBottomTabNavigator({
  History: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Create New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
  AddEntry: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})


export default class App extends React.Component {
  render() {
    return (

        <Tabs />


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
