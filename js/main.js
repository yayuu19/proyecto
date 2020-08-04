(function(){
    var saludo = function(){
      
        boton.innerHTML= "<img class='letraa' src='https://i.pinimg.com/originals/99/ee/50/99ee50dbb4c1b790e277acd66f511bbc.gif'></img><img class='lisafeliz' src='http://www.mundosimpson.com.ar/galerias/anim/xlisa02.gif'> "
     };
     let boton = document.getElementById("boton")
      boton.addEventListener("click", saludo);
    }());
    (function(){
      
       let puerta = document.getElementById("puertacentral")
        puerta.addEventListener("click",function(){puerta.style.transform = "rotateY(110deg)"} );
      }())