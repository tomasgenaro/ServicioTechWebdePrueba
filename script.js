document.addEventListener('DOMContentLoaded', function() {

    const imagenesCarousel = document.querySelectorAll('.carousel img');
    let indiceActual = 0;

    function mostrarImagen(indice) {
        imagenesCarousel.forEach((imagen, i) => {
            imagen.style.opacity = (i === indice) ? 1 : 0;
        });
    }

    function siguienteImagen() {
        indiceActual = (indiceActual + 1) % imagenesCarousel.length;
        mostrarImagen(indiceActual);
    }

    setInterval(siguienteImagen, 3000); // Cambiar cada 3 segundos

    // Función para copiar texto al portapapeles
    function copiarTextoAlPortapapeles(texto) {
        const areaTexto = document.createElement("textarea");
        document.body.appendChild(areaTexto);
        areaTexto.value = texto;
        areaTexto.select();
        document.execCommand("copy");
        document.body.removeChild(areaTexto);
    }

    // Función para agregar botón de copiar
    function agregarBotonCopiar(enlace, mensajeExito) {
        const botonCopiar = document.createElement('button');
        botonCopiar.textContent = 'Copiar';
        botonCopiar.addEventListener('click', () => {
            const texto = enlace.textContent.trim();
            copiarTextoAlPortapapeles(texto);
            alert(`${mensajeExito}: ${texto}`);
        });
        enlace.parentNode.insertBefore(botonCopiar, enlace.nextSibling);
    }

    // Botón de copiar para el número de teléfono
    const enlaceTelefono = document.querySelector('.contact-info a[href^="tel:"]');
    if (enlaceTelefono) {
        agregarBotonCopiar(enlaceTelefono, 'Número de teléfono copiado');
    }

    // Botón de copiar para el correo electrónico
    const enlaceEmail = document.querySelector('.contact-info a[href^="mailto:"]');
    if (enlaceEmail) {
        agregarBotonCopiar(enlaceEmail, 'Correo electrónico copiado');
    }

});
