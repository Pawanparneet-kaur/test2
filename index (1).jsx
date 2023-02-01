import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
class Game {}
Game.input = null;
Game.hangman = () => {
  this.input = new Scanner(System.in);
  let company = ['Maruti', 'Tata', 'Suzuki', 'Ducati', 'Toyota'];
  System.out.println(' Welcome to HANGMAN GAME ');
  var obj = new Random();
  var Ran_num = obj.nextInt(5);
  var word = (company[Ran_num]);
  word = word.toUpperCase();
  var word1 = word.replaceAll('[A-Z]', '_ ');
  System.out.println('let\'s play the game');
  this.startGame(word, word1);
};
Game.startGame = (word, word1) => {
  var guess_ = 0;
  var wrong = 0;
  var guess = null;
  var letter = '';
  var guessescontainsguess = false;
  var guesses = '';
  var guessinword = false;
  while (wrong < 5 && word1.contains('_')) {
    System.out.println(word1 + '\n');
    let temp = 5 - wrong;
    if (wrong !== 0) {
      System.out.println('You have ' + temp + ' guesses left.');
    }
    System.out.print('Your Guess:');
    guess = this.input.nextLine();
    guess = guess.toUpperCase();
    letter = guess.charAt(0);
    guessescontainsguess = (guesses.indexOf(letter)) !== -1;
    guesses += letter;
    letter = Character.toUpperCase(letter);
    System.out.println();
    if (guessescontainsguess === true) {
      System.out.println('You ALREADY guessed ' + letter + '. \n');
    }
    guessinword = (word.indexOf(letter)) !== -1;
    if (guessinword === true) {
      System.out.println(letter + ' is present in the word.');
      System.out.print('\n');
      for (let position = 0; position < word.length(); position++) {
        if (word.charAt(position) === letter && word1.charAt(position) !== letter) {
          word1 = word1.replaceAll('_ ', '_');
          var word2 = null;
          word2 = word1.substring(0, position) + letter + word1.substring(position + 1);
          word2 = word2.replaceAll('_', '_ ');
          word1 = word2;
        }
      }
    } else {
      System.out.println(letter + ' is not present in the word.');
      wrong++;
    }
    guess_++;
  }
  if (wrong === 5) {
    System.out.println('YOU LOST!, maximum limit of incorrect guesses reached.');
  } else {
    System.out.print('The word is: ' + word1 + '\n Well Played, you did it!!');
  }
   }
Game.main = (args) => {
  this.hangman();
};
