
window.onload = function() {
  //write your code here
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//generacion aleatoria
function randomnumber(max) {
  return Math.floor(Math.random() * max); 
}
  //genracion aleatoria who:
let RandomWhoIndex = randomnumber(who.length) 
  //genracion aleatoria action:
let RandomActionIndex = randomnumber(action.length) 
  //genracion aleatoria what:
let RandomWhatIndex = randomnumber(what.length) 
  //genracion aleatoria when:
let RandomWhenIndex = randomnumber(when.length) 

let excuse = who[RandomWhoIndex] + " " + action[RandomActionIndex] + " " + what[RandomWhatIndex] + " " + when[RandomWhenIndex];

document.getElementById("excuse").innerHTML = excuse;
};
