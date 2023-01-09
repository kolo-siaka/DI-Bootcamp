/**
 * @Autor: Soro kolo siaka
 * @Description: function setTimeOut call after 2 seconds and alert hello world   
 * */


function hello(){

    alert("Hello World")
}

setTimeout(hello,2000)


/**
 * @Autor: Soro kolo siaka
 * @Description: function setTimeOut call after 2 seconds and add a new paragraph <p>Hello World</p> to the <div id="container">.  
 * */



const container = document.getElementById("container")

 function world(){
    const  Nworld = document.createElement('p') 
   
     Nworld.textContent = "Hello World"

    container.appendChild(Nworld);


 }

 setTimeout(world,2000)


/**
 * @Description: function setTimeOut call after 2 seconds 
 * */


/


function world(){
    const  Nworld = document.createElement('p') 

     Nworld.textContent = "Hello World"

    container.appendChild(Nworld);


}
let set = setInterval(world,2000)

const button = document.getElementById('clear'); 
button.addEventListener('click', function() {
    clearInterval(set);
});




function world() {
    if (container.childElementCount === 5) {
        clearInterval(set);
        return;
    }

    const  Nworld = document.createElement('p') 
    Nworld.textContent = "Hello World"
    
    container.appendChild(Nworld); 
}

setInterval(world, 2000)