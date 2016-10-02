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
  var myLetter = myGuess.value;
  myGuess.value = "";
  analyze(myLetter);


  console.log("this is my guess" + myLetter);
}

// var hangmanMessage = document.querySelector(".mrhangmanmessage");


function analyze (myLetter) {
  for (var i = 0; i < generatedWord.length; i ++) {
    if (generatedWord[i] === myLetter) {
      console.log("the letter matches");
      // wordBox =+ generatedWord[i];
      display.children[i].innerHTML = myLetter;
  }
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
console.log(display);
console.log(wordsAboveThree);
console.log("challenge word:" + generatedWord);

//-----game rules------//

// var lives = 8;
var btn = document.getElementById("button");
var livesLeft = document.querySelector(".lives-counter");
// livesLeft.textContent=(lives);
livesLeft.innerHTML = 8;
btn.onclick = function()
 {
  livesLeft.innerHTML--;
 };
console.log(buttonCounter);




//----------quotes section----------------//

function quotesFetcher(){
  var  randSelector= Math.floor(Math.random() * quotes.length);
  return quotes[randSelector];
}

var evilQuotes = quotesFetcher();

console.log(evilQuotes);

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




//------compare letters------//
var letterComparison = function (letter) {
for(var i = 0; i < challengeWord.length; i++) {
    console.log(letterComparison);
  }
};

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
