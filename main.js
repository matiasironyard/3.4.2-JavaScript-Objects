(function(){
  "use strick";


//------filter words above 3 characters from array--------//
var wordsAboveThree = commonWords.filter(function(word){
  // var randWordArray = [ ];
  if(word.length >= 3){
  // return randWordArray.push(word);
  return word;
}
});

//------random select a word from above---------//
function randomWordGenerator (){
  var  randSelector= Math.floor(Math.random() * wordsAboveThree.length);
  return wordsAboveThree[randSelector];
}

var generatedWord = randomWordGenerator();

var display = document.querySelector(".display");
for (var i = 0; i < generatedWord.length; i++){
  var wordSpan = document.createElement("span");
  display.appendChild(wordSpan).style.width = ("50px");
  display.appendChild(wordSpan).textContent = "_";
}

//--------event listener for guess button--------//
var button = document.getElementById("button");
button.addEventListener("click", guessFetcher);

//-----------guessAnalyzer compares guess input against random word---------///

function guessFetcher(letter){
  var myGuess = document.getElementById("my-input");
  // var lettersList = document.getElementById("list-all"); TO BE USED TO LIST ALL LETTERS
  var myLetter = myGuess.value;
  lettersUsed.textContent = (myLetter);
  myGuess.value = "";
  analyze(myLetter);
}

// var hangmanMessage = document.querySelector(".mrhangmanmessage");
var happyMickey = document.querySelector(".mickey-won");
var outcomeMessage = document.querySelector(".outcome-message");
var lettersUsed = document.querySelector(".letters-used");


var correctInput = 0;
function analyze (myLetter) {
  for (var i = 0; i < generatedWord.length; i ++) {
    if (generatedWord[i] === myLetter) {
      // console.log("the letter matches");
      display.children[i].innerHTML = myLetter;
      correctInput += 1;
      }
    }
    if (correctInput == generatedWord.length){
      outcomeMessage.innerHTML = ("YOU WON!");
    }
}
//----------why is this funciton below not changing the message when the letters do not match?
//--------------//

// function youWillDie(myLetter) {
//   for (var i = 0; i < generatedWord.length; i ++) {
//     if (myLetter !== generatedWord[i]) {
// //       hangmanMessage.textContent = "Try again, for your life!";
//   }
// }
// }

console.log(generatedWord);
// console.log(display);
// console.log(wordsAboveThree);
// console.log("challenge word:" + generatedWord);

//-----game rules------//

var lives = livesLeft;
var btn = document.getElementById("button");
var livesLeft = document.querySelector(".lives-counter");
livesLeft.innerHTML = 8;
btn.onclick = function() {
  livesLeft.innerHTML--;
  if (livesLeft.innerHTML === "0"){
     evilMessageBox.textContent = ("Time to hang!");
  }
  else if(livesLeft.innerHTML <= 2){
    evilMessageBox.textContent = ("You are about to die!");
  }
  else if(livesLeft.innerHTML <= 3){
    evilMessageBox.textContent = ("Now, think wisely!");
  }
if(livesLeft.innerHTML < "0"){
    location.reload(true);
  }
  if (correctInput == generatedWord.length){
    evilMessageBox.textContent = ("If this didn't kill you, functions will. Mwah ha ha ha ha!");
 }
 };

//----------letters used-----------------//


//----------quotes section----------------//

function quotesFetcher(){
  var  randSelector= Math.floor(Math.random() * quotes.length);
  return quotes[randSelector];
}
var evilQuotes = quotesFetcher();

// console.log(evilQuotes);

var evilMessageBox = document.querySelector(".mrhangmanmessage");
 evilMessageBox.textContent = (evilQuotes);

//------breakdown word into letters--------//

// for(var i = 0; i < challengeWord.length; i ++){
//   var wordLetters = challengeWord[i];
//   // document.getElementById("challenge-word").innerHTML= wordLetters;
//   console.log(wordLetters);
// }

// var wordLength = new Array(challengeWord.length);
// console.log(wordLength);

//------create span--------//
// var challengeWordBox = document.querySelector(".challege-word-box");
// for(var i = 0; i < challengeWord.length; i ++){
//   var wordLetters = document.createElement("span");
//   // document.getElementById("word-box").innerHTML = (wordLetters);
//   challengeWordBox.appendChild(wordLetters);
//   console.log(wordLetters);
// }




// //------compare letters------//
// var letterComparison = function (letter) {
// for(var i = 0; i < challengeWord.length; i++) {
//     console.log(letterComparison);
//   }
// };

//------------create challenge word-----------//
// var challegeWord = wordGenerator();
//
// console.log(wordsAboveThree);
// console.log(challegeWord);
//
// function wordGenerator(){
// var randomWordSelector = Math.floor(Math.random() * wordsAboveThree.length);
// return wordsAboveThree[randomWordSelector];
// }



}());
