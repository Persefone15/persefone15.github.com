//Obtener los elementos de la clase .cierre
let links = document.querySelectorAll(".cierre");

//Recorrerlos
links.forEach(function(link){

  //Agregar un elemento click a cada uno de ellos
  link.addEventListener("click", function(ev){
    ev.preventDefault();

    let contenido = document.querySelector('.contenido');

    //Quitarle las clases de animacion que ya tiene
    contenido.classList.remove("animate__zoomIn");
    contenido.classList.remove("animate");

    //Agregar clases para animar su salida fadeOutUp
    contenido.classList.add("animate__fadeOutDown");
    contenido.classList.add("animate");

    setTimeout(function(){
        location.href = "../index.html";
    },600); // Añado 1segundo de tiempo para que me dirija a la otra página

    return false; // Bloquea el comportamiento por defecto y evita que se ejecute
  });
});
