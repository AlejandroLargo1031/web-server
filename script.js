async function obtenerMensaje() {
    try {
        const respuesta = await fetch('data.json');
        const datos = await respuesta.json();
        document.getElementById('mensaje').innerText = datos.message;
    } catch (error) {
        console.error('Error cargando el mensaje:', error);
    }
}

obtenerMensaje();
