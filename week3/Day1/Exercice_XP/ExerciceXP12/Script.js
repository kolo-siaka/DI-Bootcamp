//get Div by DOM

let NewD = document.getElementById('container');
console.log(NewD)
// get last child

let newU = document.getElementsByClassName('list');
let fistUl= newU[0]
console.log(fistUl.textContent.replace('Pete',' Richard '))

// function replace name
let fistUl1 = newU[0]
console.log(fistUl1.textContent.replace('John',' SORO '))
let fistUl2 = newU[1]
console.log(fistUl2.textContent.replace('David',' SIAKA '))

//Remove function

let fistUl3 = newU[1]
let sarahl = fistUl3.getElementsByTagName('li')[1]
console.log(sarahl.remove())

//Exercise 2 : Users And Style


let col = document.getElementsByTagName('div')[1]
col.setAttribute('style',"color:white;border :1px solid #ccc;background-color : blue ") 

let ulchild = document.getElementsByTagName('ul')[2]
ulchild.firstElementChild.setAttribute('style','display:none') 
ulchild.lastElementChild.setAttribute('style','border:1px solid #ccc') 
let bod =document.body.setAttribute('style',"font-size : 225%")






