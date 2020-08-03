(function(){
    var saludo = function(){
      
        boton.innerHTML= "<img class='letraa' src='https://reygif.com/media/letra-mayuscula-m-fucsia-44688.gif'></img>"
     };
     let boton = document.getElementById("boton")
      boton.addEventListener("click", saludo);
    }());
    (function(){
      
       let puerta = document.getElementById("puertacentral")
        puerta.addEventListener("click",function(){puerta.style.transform = "rotateY(110deg)"} );
      }())