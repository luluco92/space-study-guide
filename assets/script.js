//=============================================================================
// script.js - Prework Study Guide
//=============================================================================

//creates a variable containing a string value
//var topics = "HTML, CSS, Git, JavaScript";

//prints the value of this variable in the console.
//console.log(topics);


var topic = ['HTML', 'CSS', 'Git', 'JavaScript'];
var result = ["Let's study HTML!", "Let's study CSS!", "Let's study Git!", "Let's study JavaScript!"];
var randomTopic = topic[Math.floor(Math.random() * topic.length)];

function selectTopic() {
	//basic if else.
	if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
	} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
	} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
	} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
	} else {
  console.log('Please try again!');
}
}

function listTopics() {
	//for loop.
	for (var x = 0; x < topic.length; x++) {
 	console.log(topic[x]);
	}
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();