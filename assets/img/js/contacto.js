
        // Validación del formulario con JavaScript
        const form = document.getElementById('contactForm');
        
        // Evento 1: Validación en tiempo real de campos
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validarCampo(this);
            });
        });

        // Evento 2: Validación al enviar el formulario
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let esValido = true;
            
            // Validar todos los campos
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const telefono = document.getElementById('telefono');
            const asunto = document.getElementById('asunto');
            const mensaje = document.getElementById('mensaje');
            const acepto = document.getElementById('acepto');
            
            if (!validarCampo(nombre)) esValido = false;
            if (!validarCampo(email)) esValido = false;
            if (!validarCampo(telefono)) esValido = false;
            if (!validarCampo(asunto)) esValido = false;
            if (!validarCampo(mensaje)) esValido = false;
            if (!validarCampo(acepto)) esValido = false;
            
            if (esValido) {
                // Mostrar mensaje de confirmación antes de enviar
                const confirmacion = confirm(
                    '¿Deseas enviar este mensaje?\n\n' +
                    'Nombre: ' + nombre.value + '\n' +
                    'Email: ' + email.value + '\n' +
                    'Teléfono: ' + telefono.value + '\n' +
                    'Asunto: ' + asunto.options[asunto.selectedIndex].text
                );
                
                if (confirmacion) {
                    // Mostrar mensaje de éxito
                    document.getElementById('successMessage').style.display = 'block';
                    form.reset();
                    
                    // Ocultar mensaje después de 5 segundos
                    setTimeout(() => {
                        document.getElementById('successMessage').style.display = 'none';
                    }, 5000);
                    
                    // Scroll al mensaje de éxito
                    document.getElementById('successMessage').scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }
            } else {
                alert('Por favor completa todos los campos correctamente.');
            }
        });

        // Función para validar cada campo
        function validarCampo(campo) {
            const errorDiv = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
            
            // Validación según tipo de campo
            if (campo.id === 'nombre') {
                if (campo.value.trim().length < 3) {
                    mostrarError(campo, errorDiv);
                    return false;
                }
            } else if (campo.id === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(campo.value)) {
                    mostrarError(campo, errorDiv);
                    return false;
                }
            } else if (campo.id === 'telefono') {
                const telefonoLimpio = campo.value.replace(/\D/g, '');
                if (telefonoLimpio.length !== 10) {
                    mostrarError(campo, errorDiv);
                    return false;
                }
            } else if (campo.id === 'asunto') {
                if (campo.value === '') {
                    mostrarError(campo, errorDiv);
                    return false;
                }
            } else if (campo.id === 'mensaje') {
                if (campo.value.trim().length < 10) {
                    mostrarError(campo, errorDiv);
                    return false;
                }
            } else if (campo.id === 'acepto') {
                if (!campo.checked) {
                    mostrarError(campo, errorDiv);
                    return false;
                }
            }
            
            ocultarError(campo, errorDiv);
            return true;
        }

        function mostrarError(campo, errorDiv) {
            campo.style.borderColor = '#e74c3c';
            if (errorDiv) errorDiv.style.display = 'block';
        }

        function ocultarError(campo, errorDiv) {
            campo.style.borderColor = '#27ae60';
            if (errorDiv) errorDiv.style.display = 'none';
        }

        // Evento 3: Limpiar errores al resetear formulario
        form.addEventListener('reset', function() {
            setTimeout(() => {
                inputs.forEach(input => {
                    input.style.borderColor = '#e0e0e0';
                    const errorDiv = document.getElementById('error' + input.id.charAt(0).toUpperCase() + input.id.slice(1));
                    if (errorDiv) errorDiv.style.display = 'none';
                });
                document.getElementById('successMessage').style.display = 'none';
            }, 10);
        });