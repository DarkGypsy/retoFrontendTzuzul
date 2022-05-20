let mensajes = document.getElementById("mensajes");
let textbox = document.getElementById("textbox");
const postear = document.getElementById("btn_postear");

postear.addEventListener("click", function(){
     let nuevoPost = document.createElement("li");
     nuevoPost.innerHTML = textbox.value;
     mensajes.appendChild(nuevoPost);
     textbox.value = "";
});