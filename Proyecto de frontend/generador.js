function numeroAleatorio() {
    var numero = Math.round(Math.random() * ((20 + 1) - 1) +1);
}
var cartas = document.getElementById("cartas");
var generador = document.getElementById("btn_carta")

generador.addEventListener("click" , function(){
    var carta = document.createElement("");
    carta.innerHTML = //Colocar valores de la carta;
    cartas.appendChild(carta);
})