// Mensaje de bienvenida al cargar la página
window.addEventListener("load", () => {
    alert("¡Bienvenid@ a mi página web! Espero que disfrutes explorando.");
});

// Desplazamiento suave al hacer clic en los enlaces del menú
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Cambiar el color del encabezado al pasar el cursor
const header = document.querySelector("header");

header.addEventListener("mouseover", () => {
    header.style.backgroundColor = "#581845"; // Marrón rojizo
});

header.addEventListener("mouseout", () => {
    header.style.backgroundColor = ""; // Vuelve al color original
});

// Validación del formulario de contacto
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar el envío por defecto

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nombre || !email) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.`);
    form.reset();
});

// Función para validar correo electrónico
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
