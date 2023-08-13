const productos = [
    //COMPUTADORAS
    {
        id: "computadora",
        titulo: "Computadora de escritorio Intel Core I5 32gb 960 Ssd",
        imagen: "../img/productos/computadora.png",
        categoria: {
            nombre: "Computadoras",
            id: "computadoras"
        },
        precio: 517.999
    },
    //HELADERAS
    {
        id: "heladera",
        titulo: "Heladera Midea Side By Side RF-S18",
        imagen: "../img/productos/Heladera.png",
        categoria: {
            nombre: "Heladeras",
            id: "heladeras"
        },
        precio: 865.999
    },
    //TELEVISORES
    {
        id: "televisores",
        titulo: "Smart TV 4K UHD Samsung 50 UN50AU7000",
        imagen: "../img/productos/tv.png",
        categoria: {
            nombre: "Televisores",
            id: "televisores"
        },
        precio: 419.546
    },
    //TABLETS
    {
        id: "tablets",
        titulo: "Tablet Sony Xperia Z 16 GB ROM 2 GB RAM WiFi original Android",
        imagen: "../img/productos/tablet.png",
        categoria: {
            nombre: "Tablets",
            id: "tablets"
        },
        precio: 419.546
    }
];

const contenedorProductos = document.querySelector("#contenedorProductos");
const botonCatalogo = document.querySelectorAll(".botonCatalogo");
const tituloPrincipal = document.querySelector("#tituloProductos");



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("col-xl-4", "col-md-6", "col-sm-12");
        div.innerHTML = `
            <div class="card cartasProductos">
                <img src="${producto.imagen}" class="card-img-top mw-100" alt="${producto.titulo}">
                <div class="card-body">
                    <h3 class="card-title">$${producto.precio}</h3>
                    <p class="card-text">${producto.titulo}</p>
                    <a href="#" class="btn colorBtn w-100">Comprar</a>
                </div>
            </div>
        `;
        contenedorProductos.append(div);
    })
}

cargarProductos(productos);

botonCatalogo.forEach(boton => {
    boton.addEventListener("click",(e) => {

        botonCatalogo.forEach(boton => boton.classList.remove("active"))

        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    
    })
})