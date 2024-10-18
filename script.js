
// const contenidoCard = document.getElementById("proyectos");

// proyectos.forEach(proyecto => {
//   const card = document.createElement("div");
//       card.classList.add("card");
//       card.style.backgroundImage = `url(${proyecto.imageUrl})`;

//       const detalle = document.createElement("div");
//       detalle.classList.add("detalle");
//       detalle.innerHTML = `
//               <p>${proyecto.caracteristicas}</p>
//               <p>${proyecto.medidas}</p>
//               <h1>${proyecto.precio}</h1>
//       `
//         card.appendChild(detalle);
//         contenidoCard.appendChild(card);
// });

// fetch("data.js")
//   .then((res) => res.json())
//   .then((salida) => {
//     datosJson = salida;

//     datosJson.map((cardData) => {

//       const card = document.createElement("div");
//       card.classList.add("card");
//       card.style.backgroundImage = `url(${cardData.imageUrl})`;

//       const detalle = document.createElement("div");
//       detalle.classList.add("detalle");
//       detalle.innerHTML = `
//               <p>${cardData.caracteristicas}</p>
//               <p>${cardData.medidas}</p>
//               <h1>${cardData.precio}</h1>
//       `
//       card.appendChild(detalle);
//       contenidoCard.appendChild(card);
//     });
//   });


const contenedor = document.querySelector('.proyectos');

contenedor.addEventListener('wheel', (event) => {
    event.preventDefault(); // Evita el scroll vertical
    contenedor.scrollLeft += event.deltaY; // Mueve el scroll horizontalmente
});
