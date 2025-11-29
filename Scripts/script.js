// ABRIR / CERRAR MENÚ RESPONSIVE
const nav = document.querySelector("nav");
const toggle = document.getElementById("nav-toggle");

toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
});


// FUNCIÓN BOTÓN IR ARRIBA
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// FORMULARIO: CAMBIAR MENSAJE AL ENVIAR
const form = document.getElementById("formulario-contacto");
const mensaje = document.getElementById("mensaje-enviado");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    mensaje.textContent =
        "Gracias por elegirme para esta nueva etapa en tu empresa. Nos estaremos poniendo en contacto a través de tu correo. ¡Gracias!";

    form.style.display = "none";
});