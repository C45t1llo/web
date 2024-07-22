// Validación básica del formulario
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor completa todos los campos.');
    } else {
        // Aquí podrías agregar código para enviar el formulario
        alert('Formulario enviado correctamente.');
        form.reset();
    }
});
