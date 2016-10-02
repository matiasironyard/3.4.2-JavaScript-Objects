(function(){
  "use strick";


//------filter words above 3 characters from array--------//
var wordsAboveThree = commonWords.filter(function(word){
  var randWordArray = [];
  if(word.length > 3){
  return randWordArray.push(word);
}
});

//------random select a word from above---------//
var  challengeWord = wordsAboveThree[Math.floor(Math.random() * wordsAboveThree.length)];
console.log(wordsAboveThree);
console.log("challenge word:" + challengeWord);

//------breakdown word into letters--------//

for(var i = 0; i < challengeWord.length; i ++){
  var wordLetters = challengeWord[i];
  // document.getElementById("challenge-word").innerHTML= wordLetters;
  console.log(wordLetters);
}

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

//-----game rules------//

// var lives = 8;


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
