// Validación del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (nombre && email && mensaje) {
        alert('Mensaje enviado exitosamente.');
        this.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Smooth scroll para navegación
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Inicializar AOS
AOS.init();