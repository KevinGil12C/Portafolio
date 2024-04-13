document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío del formulario

    // Obtener valores de los campos
    const nombre = document.getElementsByName('nombre')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const asunto = document.getElementsByName('asunto')[0].value;
    const mensaje = document.getElementById('mensaje').value;

    // Verificar si todos los campos están llenos
    if (nombre && email && asunto && mensaje) {
        // Si todos los campos están llenos, abrir WhatsApp Web y llenar el mensaje
        const mensajeWhatsApp = `Hola, soy ${nombre}.\nMe gustaría ponerme en contacto contigo.\nMi email es ${email} \n${asunto}. \n${mensaje}`;
        const numeroWhatsApp = '+527221595250'; // Número de teléfono de WhatsApp
        const urlWhatsAppWeb = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajeWhatsApp)}`;
        window.open(urlWhatsAppWeb, '_blank');
        alert('Por favor, complete la acción de enviar el mensaje manualmente en WhatsApp Web.');
    } else {
        // Si no todos los campos están llenos, mostrar mensaje de error
        alert('Por favor complete todos los campos.');
    }
});
