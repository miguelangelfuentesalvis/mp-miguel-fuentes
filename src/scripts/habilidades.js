const contenedor = document.querySelector("#skills");
console.log(contenedor);

const proyectos = [
  {
    nombre: "Proyecto 1",
    descripcion: "Esta hecho en HTML",
    imagen1: "./src/images/imagen1.bmp",
  },
  {
    nombre: "Proyecto 2",
    descripcion: "Esta hecho en HTML ",
    imagen1: "./src/images/imagen2.bmp",
  },
  {
    nombre: "Proyecto 3",
    descripcion: "Esta hecho en HTML ",
    imagen1: "./src/images/imagen3.bmp",
  },
  {
    nombre: "Proyecto 4",
    descripcion: "Esta hecho en HTML ",
    imagen1: "./src/images/imagen4.bmp",
  },
];

const habilidades = [
  "./src/images/reaccionar.png",
  "./src/images/html.png",
  "./src/images/css.png",
  "./src/images/js.webp",
  "./src/images/nodejs.png",
  "./src/images/github.png",
  "./src/images/tailwind.webp",
  "./src/images/piton.png",
  "./src/images/visual-basico.png",
];

function loadSkills(array, elmenetoHTML) {
  elmenetoHTML.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const icon = array[i];

    const template = `
      <div class="w-16 h-18 p-3 bg-deep-blue rounded-lg content-center  lg:w-20 lg:h-22">
      <img src="${icon}"
      alt="Foto decorativa" class="p-2 mx-auto" width="40">
      </div>`;
    elmenetoHTML.innerHTML += template;
  }
}
loadSkills(habilidades, contenedor);

/* Validación del Formulario */

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    const nombre = document.querySelector(
      '#formulario input[type="text"]'
    ).value;
    const email = document.querySelector(
      '#formulario input[type="email"]'
    ).value;
    const comentario = document.querySelector("#formulario textarea").value;

    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      comentario.trim() === ""
    ) {
      alert("Por favor, completa todos los campos.");
      event.preventDefault();
    }
  });

/* Cerrar el Menú */
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector("nav");

  // Cerrar el menú al hacer clic fuera de él
  document.addEventListener("click", function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnMenuToggle =
      event.target === menuToggle ||
      event.target.closest('label[for="menu-toggle"]');

    // Si el clic es fuera del menú y no en el botón de toggle, cerrar el menú
    if (!isClickInsideMenu && !isClickOnMenuToggle) {
      menuToggle.checked = false;
    }
  });

  // Cerrar el menú al hacer clic en un enlace dentro del menú
  const menuLinks = document.querySelectorAll("nav a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.checked = false;
    });
  });
});
