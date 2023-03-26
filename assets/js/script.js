//iguales
cantidad = document.querySelector("#cantidad");
color = document.querySelector("#color");
precio = document.querySelector("#precio");
totalfinal = document.querySelector("#total-final");
totalcantidad = document.querySelector("#total-cantidad");
colorfinal = document.querySelector(".circulo");
//calculadora
totalfinal.innerHTML = Number(cantidad.value) * 400000;
totalcantidad.innerHTML = cantidad.value;

//color
colorfinal.style.backgroundcolor = circulo.value;