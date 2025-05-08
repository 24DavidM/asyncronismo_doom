
const url = 'https://fakestoreapi.com/products';

async function cargarProductos() {
    const mensaje = document.getElementById('mensaje');
    const contenedor = document.getElementById('productos');

    try {
        const respuesta = await fetch(url);
        const productos = await respuesta.json();
        mensaje.textContent = '';

        productos.slice(0, 8).forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('producto');

            div.innerHTML = `
                <h2>${producto.title}</h2>
                <img src="${producto.image}" alt="${producto.title}">
                <p>${producto.description.substring(0, 100)}...</p>
                <strong>Precio: $${producto.price}</strong>
            `;

            contenedor.appendChild(div);
        });
    } catch (error) {
        mensaje.textContent = 'Error al cargar los productos.';
        console.error(error);
    }
}

cargarProductos();
