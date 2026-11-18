document.addEventListener('DOMContentLoaded', function() {
    // Referencias a los elementos del DOM
    const miImagen = document.getElementById('miImagen');
    const seccionPregunta = document.getElementById('seccionPregunta');
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');

    // 1. Al hacer clic en la imagen, se oculta y aparece la pregunta
    miImagen.addEventListener('click', function() {
        miImagen.style.display = 'none';
        seccionPregunta.style.display = 'block';
    });

    // 2. Al hacer clic en "Sí, acepto", redirige a la siguiente página
    btnSi.addEventListener('click', function() {
        window.location.href = 'pagina1.html';
    });

        // 2. Al hacer clic en "Sí, acepto", redirige a la siguiente página
    btnNo.addEventListener('click', function() {
        window.location.href = 'pagina1.html';
    });
});