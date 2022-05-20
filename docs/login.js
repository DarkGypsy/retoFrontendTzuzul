let user = document.getElementById("usuario");
let password = document.getElementById("password");
const iniciar = document.getElementById("btn_login");
let usuario = "DarkGypsy";
let clave = "08241993";
iniciar.addEventListener("click", function(){
    if (user.value === usuario && password.value === clave) {
        alert("Correcto!")
        
    } else {
        alert("Datos errados")
    }
    user.value = "";
    password.value = "";
})