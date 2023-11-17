// CAMBIAR NOMBRE, CIUDAD Y GUSTO 
let nombre = "Maicol";
let gusto = "aprender";
let ciudad = "Bogota";
let parrafo =  document.querySelector(".parrafo2");

function cambiarName(nombre, ciudad, gusto){
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} Santander y vivo en Colombia. Me gusta el ${gusto} y la programación a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen`;

    return contenido;
    
}
parrafo.innerText = cambiarName(nombre, ciudad, gusto);

// NAV BAR 
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};



