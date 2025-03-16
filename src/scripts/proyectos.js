document.addEventListener("DOMContentLoaded", function () {
  const proyectosContainer = document.getElementById("proyectos-container");
  console.log(proyectosContainer);

  if (!proyectosContainer) {
    console.error("El contenedor de proyectos no existe en el DOM.");
    return;
  }

  const proyectos = [
    {
      titulo: "Proyecto 1",
      descripcion:
        "Este fue mi primer trabajo calificado en FUNVAL, en el cual creé una página web básica utilizando HTML y CSS. La página incluía una breve descripción sobre mí, donde compartí información personal y mis intereses. A través de este proyecto, pude aplicar los conocimientos adquiridos sobre estructura web y diseño, utilizando etiquetas HTML para el contenido y propiedades de CSS para la estética y el estilo.",
      imagen: "./src/images/proyecto1.png",
      url: "https://strong-stroopwafel-43a5e0.netlify.app/",
    },
    {
      titulo: "Proyecto 2",
      descripcion:
        "Este fue mi tercer trabajo calificado en FUNVAL, en el cual desarrollé una página web práctica utilizando HTML y CSS. El propósito del proyecto fue aplicar y reforzar los conceptos aprendidos durante el curso, enfocándome en la creación de una página web simple. A través de esta actividad, pude mejorar mis habilidades de desarrollo web, utilizando etiquetas HTML para la estructura del contenido y propiedades de CSS para el diseño y la estética.",
      imagen: "src/images/Proyecto 2.png",
      url: "https://superb-dieffenbachia-178911.netlify.app/",
    },
    {
      titulo: "Proyecto 3",
      descripcion:
        "Este fue un proyecto que realicé para un colegio, en el cual desarrollé una landing page utilizando la herramienta WordPress. A través de este trabajo, pude demostrar mis habilidades en diseño y desarrollo web, creando una página funcional y atractiva. El cliente quedó muy satisfecho con el resultado, lo cual refleja el cumplimiento de sus expectativas y la efectividad de la solución proporcionada.",
      imagen: "./src/images/proyecto3.png",
      url: "https://trencitodinosaurios.cl",
    },
  ];

  function loadProyectos(array, elementoHTML) {
    elementoHTML.innerHTML = "";

    array.forEach((proyecto) => {
      const proyectoTarjeta = document.createElement("a");
      proyectoTarjeta.href = proyecto.url;
      proyectoTarjeta.target = "_blank";
      proyectoTarjeta.className =
        "bg-deep-blue rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow";
      proyectoTarjeta.innerHTML = `
                <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-highlight text-xl">${proyecto.titulo}</h3>
                    <p class="text-white mt-2 text-sm">${proyecto.descripcion}</p>
                </div>
            `;
      elementoHTML.appendChild(proyectoTarjeta);
    });
  }

  loadProyectos(proyectos, proyectosContainer);
});

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
