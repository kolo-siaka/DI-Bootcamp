/**
 * @Autor: soro kolo siaka
 * @Description: function use to Update value that recuperate in Tag input
 * */


let input = document.getElementById("letter")

input.style.color="red"
input.style.border="200"





            function letter(event) {
                // Récupérer la valeur de input
                var Value = event.target.value;

                 // Filtrer les caractères speciaux
                var filtrageValue = Value.replace(/[^a-zA-Z]/gi, ''); 

                // Mettre à jour la valeur de input
                event.target.value = filtrageValue;
            }