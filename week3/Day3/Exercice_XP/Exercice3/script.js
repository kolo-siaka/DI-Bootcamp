
/**
 * @Autor: Soro kolo siaka 
 * @Description: function which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.

 * */

 let element = document.getElementById("box")

 element.setAttribute('draggable','true');

element.addEventListener("dragstart", function(event) {
  event.target.style.backgroundColor = "lightpink";

});

element.addEventListener("dragend", function(event) {
    event.target.style.backgroundColor = "lightgreen";
    let _x = event.clientX;  //l 'espace
    let _y = event.clientY; //l 'espace
    console.log(event)
    event.target.style.left = _x + "px";
    event.target.style.top = _y + "px";
    event.target.style.position = "absolute"; 

  });