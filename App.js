import * as React from 'react';
import { Text, View, StyleSheet, Container, Platform } from 'react-native';
import { Constants } from 'expo';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { getNames, addCardToDeck } from './helpers/api';
import { DeckView } from './components/DeckView';
import { Question } from './components/Question';
import { Quiz } from './components/Quiz';
import { QuizSummary } from './components/QuizSummary';
import { setLocalNotification } from './helpers/notification'


// You can import from local files
import EntryForm from './components/EntryForm';
import Names from './components/Names';

const Tabs = createBottomTabNavigator(
  {
    Names: {
      screen: Names,
      navigationOptions: {
        tabBarLabel: 'Decks',
      },
    },
    AddEntry: {
      screen: EntryForm,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      labelStyle: { fontSize: 20 },
      activeTintColor: '#00000f',

      style: {
        height: 56,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: '#00000f',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
  Question: {
    screen: Question,
    navigationOptions: {
      headerTintColor: '#00000f',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: '#00000f',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
  QuizSummary: {
    screen: QuizSummary,
    navigationOptions: {
      headerTintColor: '#00000f',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
});

export default class App extends React.Component {
  state = {};

  componentDidMount() {
    getNames().then(data => this.setState(data))
    setLocalNotification()
  }

  updateNames = name => {
    let obj = {
      [name]: {
        name: name,
        questions: [],
      },
    }

    this.setState((state, props) => {
      return { ...state, ...obj };
    });
  };

addQuestion = (name, question) => {
  let obj = this.state[name]
  let arr = obj.questions
  arr.push(question)

  let newobj = {
      [name]: {
        name: name,
        questions: arr
      },
    };

  this.setState((state, props) => {
      return { ...state, ...newobj };
    });

}

  render() {
    return (
      <MainNavigator
        screenProps={{ data: this.state, update: this.updateNames, addQuestion: this.addQuestion }}
      />
    );
  }
}
