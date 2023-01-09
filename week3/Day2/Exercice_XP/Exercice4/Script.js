
/**
*@Decription: fuction pour calculer le volume d'un sphere 
* @param: Radius pour recuperer les valeur entrer en input
*
*/
function vol() {
    let Radius = document.getElementById('radius').value
      if (!isNaN(Radius) == true) {
          let volum = (4/3) * 3.14 * (Radius**3)
          let subm = document.getElementById('volume').value =volum
      }else{
           Radius = document.getElementById('radius').value = ""
      }
    
}