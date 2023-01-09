//Declare a global variable named allBoldItems.

//Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

//Create a function called highlight() that changes the color of all the bold text to blue.

//Create a function called return_normal() that changes the color of all the bold text back to black.

//Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

let allBoldItems=[] ;
let balp = document.getElementsByTagName('p')[0]
let taille = balp.getElementsByTagName('strong').length

/**
 * @Desciption: function pour recuperer dans une table toute les balise Strong
 * 
 * */

function getBold_items() {

   let i =0
   while(i < taille){

    allBoldItems.push(balp.getElementsByTagName('strong')[i]) 
    i++

   }
   console.log(allBoldItems)
}

getBold_items()

/**
 * @Desciption: function pour changer la couleur des textes en gra
 * 
 * */

function highlight() {

     let y =0
   while(y < taille){

    balp.getElementsByTagName('strong')[y].style.color = 'blue'
    y++ 
}
}

/**
 * @Desciption: function pour revenir a la forme normal des texte en gra
 * 
 * */
function return_normal() {
  let y =0
   while(y < taille){

    balp.getElementsByTagName('strong')[y].style.color = 'black'
    y++ 
}}


