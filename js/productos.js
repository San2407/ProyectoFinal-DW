const productos = [
    //COMPUTADORAS
    {
        id: "computadora",
        titulo: "Notebook Dell 15,6” Ryzen 7 16GB 512GB SSD INSP3525 V6GX4",
        imagen: "../img/productos/computadoras/computadora.webp",
        categoria: {
            nombre: "Computadoras",
            id: "computadoras"
        },
        precio: 699.999
    },
    {
        id: "computadora",
        titulo: "Notebook Acer 15,6” Celeron 4GB 128GB SSD Aspire 3 A315-34-C0WF",
        imagen: "../img/productos/computadoras/notebook-acer-4gb.webp",
        categoria: {
            nombre: "Computadoras",
            id: "computadoras"
        },
        precio: 249.999
    },
    {
        id: "computadora",
        titulo: "Notebook Asus Vivobook AMD RZ3 8GB 256GB SSD M415DA-EB1026W",
        imagen: "../img/productos/computadoras/notebook-asus-amd.webp",
        categoria: {
            nombre: "Computadoras",
            id: "computadoras"
        },
        precio: 322.999
    },
    {
        id: "computadora",
        titulo: "Notebook Dell 15,6” Ryzen 5 8B 256GB SSD INSP3525 94JM5",
        imagen: "../img/productos/computadoras/notebook-dell.webp",
        categoria: {
            nombre: "Computadoras",
            id: "computadoras"
        },
        precio: 479.999
    },
    {
        id: "computadora",
        titulo: "Notebook Exo L69Plus Intel N4020 4GB SSD64 HDD1TB Windows 11",
        imagen: "../img/productos/computadoras/notebook-exo.webp",
        categoria: {
            nombre: "Computadoras",
            id: "computadoras"
        },
        precio: 368.999
    },
    {
        id: "computadora",
        titulo: "Notebook Galaxy Book3 Intel Core i5 10 Núcleos 512GB 8GB Silver",
        imagen: "../img/productos/computadoras/samsung-i5-8gb.webp",
        categoria: {
            nombre: "Computadoras",
            id: "computadoras"
        },
        precio: 599.999
    },
    //HELADERAS
    {
        id: "heladera",
        titulo: "Heladera Cíclica Drean HDR400F11S 396L Gris",
        imagen: "../img/productos/heladeras/heladera.webp",
        categoria: {
            nombre: "Heladeras",
            id: "heladeras"
        },
        precio: 438.699
    },
    {
        id: "heladera",
        titulo: "Heladera Cíclica Drean 277Lts HDR280F00B Blanco",
        imagen: "../img/productos/heladeras/heladera-drean-277lts.webp",
        categoria: {
            nombre: "Heladeras",
            id: "heladeras"
        },
        precio: 275.699
    },
    {
        id: "heladera",
        titulo: "Heladera con freezer Gafa HGF378AFB Blanca 326lts",
        imagen: "../img/productos/heladeras/heladera-gafa.webp",
        categoria: {
            nombre: "Heladeras",
            id: "heladeras"
        },
        precio: 327.999
    },
    {
        id: "heladera",
        titulo: "Heladera No Frost Drean HDR300N30M 285Lts Steel",
        imagen: "../img/productos/heladeras/heladera-nofrost-drean.webp",
        categoria: {
            nombre: "Heladeras",
            id: "heladeras"
        },
        precio: 374.499
    },
    {
        id: "heladera",
        titulo: "Heladera No Frost Duo Cooling Koh-I-Noor KHDB42D/8 409Lt",
        imagen: "../img/productos/heladeras/heladera-nofrost.webp",
        categoria: {
            nombre: "Heladeras",
            id: "heladeras"
        },
        precio: 449.999
    },
    {
        id: "heladera",
        titulo: "Heladera Sigma 2F1200Ba 239L con eficiencia energética es clase A+",
        imagen: "../img/productos/heladeras/heladera-sigma.webp",
        categoria: {
            nombre: "Heladeras",
            id: "heladeras"
        },
        precio: 219.999
    },
    //TELEVISORES
    {
        id: "televisores",
        titulo: "Smart TV 4K UHD Samsung 70” UN70AU7000GCFV",
        imagen: "../img/productos/televisores/tv-uhd70-samsung.webp",
        categoria: {
            nombre: "Televisores",
            id: "televisores"
        },
        precio: 574.999
    },
    {
        id: "televisores",
        titulo: "Smart TV Led 32” Noblex DR32X7000",
        imagen: "../img/productos/televisores/tv-noblex.webp",
        categoria: {
            nombre: "Televisores",
            id: "televisores"
        },
        precio: 91.999
    },
    {
        id: "televisores",
        titulo: "Smart TV LED 55” 4K UHD RCA AND55P6UHD-F",
        imagen: "../img/productos/televisores/tv-rca.webp",
        categoria: {
            nombre: "Televisores",
            id: "televisores"
        },
        precio: 239.999
    },
    {
        id: "televisores",
        titulo: "Smart TV LED 75” 4K UHD Samsung Crystal UN75BU8000GCFV",
        imagen: "../img/productos/televisores/tv-uhd-samsung.webp",
        categoria: {
            nombre: "Televisores",
            id: "televisores"
        },
        precio: 849.999
    },
    {
        id: "televisores",
        titulo: "Smart TV 32” HD TCL LE40SMART21-F",
        imagen: "../img/productos/televisores/tv-tlc.webp",
        categoria: {
            nombre: "Televisores",
            id: "televisores"
        },
        precio: 95.999
    },
    {
        id: "televisores",
        titulo: "Smart TV 32” HD Samsung UN32T4300A",
        imagen: "../img/productos/televisores/tv-samsung.webp",
        categoria: {
            nombre: "Televisores",
            id: "televisores"
        },
        precio: 129.999
    },
    //TABLETS
    {
        id: "tablets",
        titulo: "Tablet Positivo BGH 64GB TAB Q10 PIK123454",
        imagen: "../img/productos/tablets/tablet-bgh.webp",
        categoria: {
            nombre: "Tablets",
            id: "tablets"
        },
        precio: 76.999
    },
    {
        id: "tablets",
        titulo: "Galaxy Tab S9 Ultra con Funda y Teclado",
        imagen: "../img/productos/tablets/samsung-tab-s9-ultra.webp",
        categoria: {
            nombre: "Tablets",
            id: "tablets"
        },
        precio: 898.999
    },
    {
        id: "tablets",
        titulo: "Tablet Samsung Galaxy Tab A7 Silver",
        imagen: "../img/productos/tablets/samsung-tab-a7.webp",
        categoria: {
            nombre: "Tablets",
            id: "tablets"
        },
        precio: 95.999
    },
    {
        id: "tablets",
        titulo: "Tablet Samsung Galaxy Tab A8 Silver",
        imagen: "../img/productos/tablets/samsung-tab-a8.webp",
        categoria: {
            nombre: "Tablets",
            id: "tablets"
        },
        precio: 159.999
    },
    {
        id: "tablets",
        titulo: "Tablet Lenovo M10 Plus ZAAJ0231AR Storm Grey",
        imagen: "../img/productos/tablets/tablet-lenovo-m10.webp",
        categoria: {
            nombre: "Tablets",
            id: "tablets"
        },
        precio: 124.999
    },
    {
        id: "tablets",
        titulo: "Tablet Lenovo Yoga 11 128GB 4GB ZA8W0010",
        imagen: "../img/productos/tablets/tablet-lenovo-yoga.webp",
        categoria: {
            nombre: "Tablets",
            id: "tablets"
        },
        precio: 199.999
    },
    //CELULARES
    {
        id: "celulares",
        titulo: "Galaxy Z Fold5 Phantom Black 512gb",
        imagen: "../img/productos/celulares/samsung-z-fold5.webp",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 919.546
    },
    {
        id: "celulares",
        titulo: "Celular Motorola E13 64 GB Azul Metálico",
        imagen: "../img/productos/celulares/motorola-e13.webp",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 67.999
    },
    {
        id: "celulares",
        titulo: "Celular Samsung Galaxy A34 5G 128GB Silver",
        imagen: "../img/productos/celulares/samsung-a34.webp",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 229.999
    },
    {
        id: "celulares",
        titulo: "Celular Samsung Galaxy A54 5G 128GB Lime",
        imagen: "../img/productos/celulares/samsung-a54.webp",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 283.999
    },
    {
        id: "celulares",
        titulo: "Celular Samsung Galaxy S21 FE 5G 128 GB Negro",
        imagen: "../img/productos/celulares/samsung-s21-fe.webp",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 329.999
    },
    {
        id: "celulares",
        titulo: "Celular Samsung Galaxy Z Flip5 512GB Cream",
        imagen: "../img/productos/celulares/samsung-z-flip5.webp",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 614.999
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
            <div class="card h-100 cartasProductos">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
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