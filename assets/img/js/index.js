<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        // Evento 1: Mostrar mensaje al hacer clic en el botón
        function mostrarMensaje() {
            alert('¡Gracias por tu interés en AutoPartes MX! Navega por nuestro catálogo para conocer nuestros productos.');
        }

        // Evento 2: Animación del título al cargar la página
        window.addEventListener('load', function() {
            const title = document.getElementById('mainTitle');
            title.style.opacity = '0';
            setTimeout(function() {
                title.style.transition = 'opacity 1.5s ease-in';
                title.style.opacity = '1';
            }, 100);
        });

        // Evento 3: Efecto hover en las cajas de características
        document.addEventListener('DOMContentLoaded', function() {
            const featureBoxes = document.querySelectorAll('.feature-box');
            featureBoxes.forEach(box => {
                box.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = '#fff5f5';
                });
                box.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'white';
                });
            });
        });
    