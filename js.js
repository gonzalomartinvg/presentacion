//Animación foto de perfil

let foto = document.querySelector(".foto");

function hitch (){

    setTimeout(function(){
        foto.src = "images/foto-3.png"
    }, 1500);
    
    setTimeout(function(){
        foto.src = "images/foto-1-01.png"
    }, 2100);
    
    setTimeout(function(){
        foto.src = "images/foto-3.png"
    }, 2500);

    setTimeout(function(){
        foto.src = "images/foto-1-01.png"
    }, 3100);

    setTimeout(function(){
        foto.src = "images/foto-3.png"
    }, 3500);
    
    setTimeout(function(){
        foto.src = "images/foto-1-01.png"
    }, 4100);
    
    setTimeout(function(){
        foto.src = "images/foto-3.png"
    }, 4500);
    
    setTimeout(function(){
        foto.src = "images/foto-2-prueba.png"
    }, 5000);

    setTimeout(function(){
        foto.src = "images/foto-3.png"
    }, 5300);

    setTimeout(function(){
        foto.src = "images/foto-1-01.png"
    }, 5800);
    
}

hitch();
setInterval(hitch, 5900)

//Botón conoceme

let boton = document.querySelector(".boton");
let contenedorFoto = document.querySelector(".contenedor-foto");
let contenedorParrafo = document.querySelector(".contenedor-parrafo");

boton.addEventListener("click", cambiarInformacion);

function cambiarInformacion(){

    contenedorFoto.innerHTML = '<img class="modificarfoto" src="images/foto-2-normal-beta.png" alt="">';

    contenedorParrafo.innerHTML = '<p class="parrafo movimiento">En la web y en las redes sociales muchas personas no son quienes dicen ser. Adultos engañas a niños haciéndose pasar por otros, filtros nos desfiguran a un punto irreconocible pero los seguimos usando para encajar en el estandar de belleza, CV y perfiles de linkedin llenos de hazañas, aptitudes asombrosas y ningún fracaso.</p> <p class="parrafo movimiento">Soy Gonzalo Volpe Gómez (31), podés conocer lo que te quiero mostrar de mi en <a class="hipervinculo" href="https://www.linkedin.com/in/gonzalo-martin-volpe-gomez">Linkedin</a> y mis proyectos en <a class="hipervinculo" href="https://gonzalomartinvg.com/">www.gonzalomartinvg.com</a></p> <p class="parrafo movimiento">O podés invitarme a una entrevista y conocerme en persona <a class="hipervinculo" href="https://wa.me/5491148706906">+5491148706906</a></p>';

    boton.classList.add("boton-apagar");

}