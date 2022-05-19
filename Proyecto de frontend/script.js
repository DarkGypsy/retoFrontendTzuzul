//Login
var user = document.getElementById("usuario");
var password = document.getElementById("password");
var iniciar = document.getElementById("btn_login");
var usuario = "DarkGypsy";
var clave = "08241993";
iniciar.addEventListener("click", function(){
    if (user.value === usuario && password.value === clave) {
        alert("Correcto!")
        
    } else {
        alert("Datos errados")
    }
    user.value = "";
    password.value = "";
})

//Generador de cartas
var cartas = document.getElementById("cartas");
var generador = document.getElementById("btn_carta")

generador.addEventListener("click" , function(){
    var carta = document.createElement("");
    carta.innerHTML = //Colocar valores de la carta;
    cartas.appendChild(carta);
})

//Escribenos

var mensajes = document.getElementById("mensajes");
var textbox = document.getElementById("textbox");
var postear = document.getElementById("btn_postear");

postear.addEventListener("click", function(){
     var nuevoPost = document.createElement("li");
     nuevoPost.innerHTML = textbox.value;
     mensajes.appendChild(nuevoPost);
     textbox.value = "";
});