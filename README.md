# Udacicards Project for Udacity React Nanodegree

This is the Udacicards project for Udacity's React Nanodegree. This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

This application allows users to create decks of flashcards to assist them when studying for exams. Below you'll find information about performing common tasks using this native mobile application.
## How to Install

- Clone this repo into a local directory on your machine: `https://github.com/jkolden/udacicards.git`
- install yarn `brew install yarn`.
- cd into the directory and run `$ yarn install` to install the dependencies.
- To start the application, run `yarn start`.
- You may need to run the following commands the first time running this project:
  - `sudo sysctl -w kern.maxfiles=5242880`
  - `sudo sysctl -w kern.maxfilesperproc=524288`
- It may take a couple minutes to start the first time this is run.
- Follow the screen prompts to run in an iOS or Android simulator, or better yet, select the `s` option to send a link to your mobile device so you can run the application from your phone.

## How to use this application

As mentioned above, this application will help you study for quizzes and tests by allowing to create decks of flashcards.

To begin, select the `Add Deck` tab at the bottom of the screen. This will take you to an input form where you can create a new deck of flashcard. Give the deck a unique name and the `Submit` button will activate. After the deck is created you will be returned to the `Decks` view.

<img width="410" alt="pastedgraphic-2" src="https://user-images.githubusercontent.com/21246211/45512306-46eeef80-b754-11e8-833b-fa29b892087d.png">

Next, click on the deck and you will be taken to the screen where you can add new flashcards to the deck. Enter a question and answer and choose the option to save and return the decks view, or choose `save and create another` to remain on this page to create additional decks.

<img width="417" alt="pastedgraphic-4" src="https://user-images.githubusercontent.com/21246211/45512425-8b7a8b00-b754-11e8-8d5b-f57161f3c387.png">

To quiz yourself on these flash cards from the main decks view, simply tap the deck name and then click `Start Quiz`. You can answer each question in the deck with a correct or incorrect button and when complete you will be routed to a quiz summary. You'll also receive study suggestions on any areas that you answered incorrectly!

<img width="425" alt="pastedgraphic-5" src="https://user-images.githubusercontent.com/21246211/45512559-e8764100-b754-11e8-99f6-16ab9784caf1.png">

If you get stuck on a question, you can reveal the answer by clicking the `Answer` button and the answer will animate into view. You will also receive a daily reminder to study for your quizzes!

![img_8742](https://user-images.githubusercontent.com/21246211/45513434-8965fb80-b757-11e8-9bf9-c658d34ab874.PNG)

Continue using this application to create additional decks. You can always come back to a deck to add additional questions in order to further your studies.
