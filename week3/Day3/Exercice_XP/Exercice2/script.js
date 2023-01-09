/**
 * @Description: function setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
 * 
 * */

      //recuperation des id
      const Div1 = document.querySelector('#animate');
      const Div2 = document.querySelector('#container');
      const button = document.querySelector('button');

      let segment
      let gauche =0
      /**
       * @Description: fuction use to move
       * */
        function deplacement() {
            if(gauche === 350 ) return
        gauche += 1;
        Div1.style.left = gauche + "px";

      
            
        

        if (gauche >= Div1.offsetWidth - Div2.offsetWidth) {
            clearInterval(segment);
        }
    }


      function myMove() {
       setInterval(deplacement, 1);
    }
