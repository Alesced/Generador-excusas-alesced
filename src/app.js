
window.onload = function() {
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//generacion aleatoria
function randomnumber(max) {
  return Math.floor(Math.random() * max); 
}
  //generacion aleatoria who:
let RandomWhoIndex = randomnumber(who.length) 
  //generacion aleatoria action:
let RandomActionIndex = randomnumber(action.length) 
  //generacion aleatoria what:
let RandomWhatIndex = randomnumber(what.length) 
  //generacion aleatoria when:
let RandomWhenIndex = randomnumber(when.length) 

document.querySelector("#excuse").innerHTML = who[RandomWhoIndex] + " " + action[RandomActionIndex] + " " + what[RandomWhatIndex] + " " + when[RandomWhenIndex];

};
