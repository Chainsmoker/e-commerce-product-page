const abrirMenu = document.querySelector("#btnAbrir"),
      aside = document.querySelector("aside"),

      // Slideshow
      btnSiguiente = document.querySelector("#btnSiguiente"),
      btnAtras = document.querySelector("#btnAtras"),
      img_actual = document.querySelector("#img_actual"),
      productos = document.querySelectorAll("#productos"),
      productos_base = document.querySelectorAll("#productos_base"),
      slideshow = document.querySelector(".slideshow"),
      cerrar_slideshow = document.querySelector("#cerrar_slideshow"),

      // Carrito
      quitar_carrito = document.querySelector("#quitarCarrito"),
      add_carrito = document.querySelector("#addCarrito"),
      cuenta_carrito = document.querySelector("#cuentaCarrito");

let contador = 0;
let contadorImages = 1;
let carritoContador = 1;

// Abrir menu
abrirMenu.addEventListener("click", ()=> {
    aside.classList.toggle("translate")
    if (contador == 1) {
        btnAbrir.src = "images/icon-menu.svg";
        contador--;
        return;
    }
    btnAbrir.src = "images/icon-close.svg"
    contador++;
});

// Siguiente imagen del Slideshow
btnSiguiente.addEventListener("click", ()=>{
    contadorImages++;
    if (contadorImages > 4) {
        contadorImages = 1;
    }
    img_actual.src = `images/image-product-${contadorImages}.jpg`
});

// Anterior imagen del Slideshow
btnAtras.addEventListener("click", ()=>{
    if (contadorImages == 1) {
        contadorImages = 5;
    }
    contadorImages--;
    img_actual.src = `images/image-product-${contadorImages}.jpg`
});

// Boton para cerrar el Slideshow
cerrar_slideshow.addEventListener("click", ()=>{
    slideshow.style.display = "none"
});

// Añadir cantidad al carrito
add_carrito.addEventListener("click", ()=>{
    cuenta_carrito.textContent = carritoContador;
    carritoContador++;
});

// Disminuir cantidad al carrito
quitar_carrito.addEventListener("click", ()=>{
    if (carritoContador == 0) {
        return;
    }
    carritoContador--;
    cuenta_carrito.textContent = carritoContador;
});

// Abrir el Slideshow
for (let i = 0; i < productos_base.length; i++) {
    productos_base[i].addEventListener("click", ()=>{
        slideshow.style.display = "flex"
        img_actual.src = `images/image-product-${i+1}.jpg`
    });
}

// Cambiar imagen del Slideshow por sus imagenes
for (let i = 0; i < productos.length; i++) {
    productos[i].addEventListener("click", ()=>{
        img_actual.src = `images/image-product-${i+1}.jpg`
    });
}