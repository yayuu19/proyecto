//location.href='https://yayuu19.github.io/startavina-desafio1/index#intro';

let diningRoom = document.getElementById("dining-room");
let switcher = document.getElementById("switcher");
let darkness = document.getElementById("darkness");
let span = document.getElementById("close");
let hint = document.getElementById("hint");

switcher.addEventListener("click", function(){
    switcher.style.display = "none";
    darkness.className = "off";
    span.style.display = "block";
    hint.innerText = "H";
    hint.style.color = "yellow";
    hint.style.opacity = "1";
 });

span.addEventListener("click", function(){
    switcher.style.display = "block";
    span.style.display = "none";
    span.parentNode.className = "";
    hint.innerText = "A";
    hint.style.color = "skyblue";
    hint.style.opacity = "0.8";
});


let curtain = document.getElementById("curtain");

curtain.addEventListener("click", function(){
    curtain.style.transform = "translateX(90px)";
    curtain.style.transitionDuration = "1s";
    curtain.style.transitionTimingFunction = "ease-in-out";
})

let glass = document.getElementById("glass");

glass.addEventListener("click", function(){
    glass.style.transformOrigin = "bottom";
    glass.style.transform = "rotateZ(90deg) translate(150px)";
    glass.style.transitionTimingFunction = "ease-in";
    glass.style.transitionDuration = "2s";
})


