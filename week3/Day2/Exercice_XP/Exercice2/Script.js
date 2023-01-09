// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

let forme = document.getElementsByTagName('form')[0]
console.log(forme)

let inputs = document.getElementById('lname')
let input = document.getElementById('fname')
console.log(inputs)
console.log(input)

let inputal =forme.elements.lname 
let inputall = forme.elements.fname
console.log(inputal)
console.log(inputall)

//event action

document.getElementById('submit').addEventListener("click", function(event) {
  console.log("why");
  event.preventDefault();
}, false);

let varli = document.createElement('li')
let varul = document.getElementsByClassName('usersAnswer')[0]
let ajoutli = varul.appendChild(varli)
console.log(varul)

