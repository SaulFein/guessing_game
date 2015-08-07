'use strict';
//This is a guessing game constructor.
var Game = function(question, answer, badGuessMessage, numGuesses){
  this.badGuessMessage = badGuessMessage;
  this.answer = answer;
  this.numGuesses = numGuesses;
  this.question = question
  this.guess = 0;
  this.startGame = function (){
      var container = document.getElementById("guess-response");
          console.log('The answer is ' + answer);
      while (this.numGuesses) {
          this.guess = prompt(question);
          console.log('You guessed ' + this.guess);

      if (this.guess > answer) {

        var message = ' Your guess is too high. Hint: the number is between 1,030 and 1,040 ';
        var guessResponse1 = document.createElement('h2');
        guessResponse1.innerHTML = message;
        container.appendChild(guessResponse1);
        //alert(this.badGuessMessage + message);
        console.log(message)
        this.numGuesses --;


      } else if (this.guess < answer){

        var message2 = ' Your guess is too low. Hint: the number is between 1,030 and 1,040 ';
        var guessResponse2 = document.createElement('h2');
        guessResponse2.innerHTML = message2;
        container.appendChild(guessResponse2);
        //alert(this.badGuessMessage + message2);
        this.numGuesses --;

      } else {

        var message3 = 'The answer is ' + (answer) + '.';
        var guessResponse3 = document.createElement('h2');
        guessResponse3.innerHTML = message3;
        container.appendChild(guessResponse3);
        this.numGuesses = 0;
        //alert('You guessed right! ' + message3);
      }
    }
  }
}


  var game1 = new Game('How vinyl records do I have in my collection?', 1035, 'Sorry, that is not the correct number. ', 3);











