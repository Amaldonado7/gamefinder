document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;

        // Simular un registro (puedes agregar tu lógica real aquí)
        alert(`¡Gracias por registrarte, ${nombre}! Te hemos enviado un correo de confirmación a ${email}.`);
    });
});
