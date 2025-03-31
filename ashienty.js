/*Boton de descarga*/
document.getElementById("target").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "Documents/CV2025.pdf";
  link.download = "CV2025.pdf";
  link.click();
});
/*Cursor con seguimiento*/
const cursor = Object.assign(document.createElement("div"), { id: "cursor" });
document.body.appendChild(cursor);

// Crear la imagen del cursor dentro del div
cursor.appendChild(
  Object.assign(document.createElement("img"), {
    src: "Documents/pua.webp",
    style: "width: 60px; height: 30px;",
    alt: "Cursor personalizado",
  })
);

// Estilo del cursor
Object.assign(cursor.style, {
  position: "fixed",
  pointerEvents: "none",
  zIndex: "2",
  transform: "translate(-50%, -50%)",
  display: "none",
});

// Botón para activar
const cursorButton = document.querySelector(".cursor");
cursorButton.addEventListener("click", () => {
  document.addEventListener("mousemove", updateCursor);
  document.body.style.cursor = "none";
  cursor.style.display = "block";
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    const originalCursor = window.getComputedStyle(element).cursor;
    if (originalCursor === "pointer") {
      element.style.cursor = "none";
    }
  });
});
// Función para actualizar la posición del cursor
function updateCursor(event) {
  const cursor = document.getElementById("cursor");
  const target = document.getElementById("target");
  function updateCursorPosition(cursorX, cursorY) {
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    const targetRect = target.getBoundingClientRect();
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;
    const deltaX = targetX - cursorX;
    const deltaY = targetY - cursorY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    cursor.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  }
  // Movimiento del mouse
  document.addEventListener("mousemove", function (event) {
    updateCursorPosition(event.clientX, event.clientY);
  });
  // Desplazamiento de la rueda
  document.addEventListener("wheel", function (event) {
    updateCursorPosition(event.clientX, event.clientY);
  });
}

// Botón para restaurar el cursor
const arrowButton = document.querySelector(".arrow");

arrowButton.addEventListener("click", () => {
  document.removeEventListener("mousemove", updateCursor);
  document.body.style.cursor = "default";
  cursor.style.display = "none";
  /**/
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    element.style.removeProperty("cursor");
  });
  /**/
});

// Nombre de los iconos

const imgs = document.querySelectorAll(".icons");

const nameDisplay = document.createElement("div");
nameDisplay.style.position = "absolute";
nameDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
nameDisplay.style.color = "white";
nameDisplay.style.padding = "3px";
nameDisplay.style.borderRadius = "3px";
nameDisplay.style.display = "none";

document.body.appendChild(nameDisplay);

imgs.forEach((img) => {
  img.addEventListener("mouseenter", (event) => {
    nameDisplay.textContent = event.target.getAttribute("data-name");
    nameDisplay.style.display = "block";

    nameDisplay.style.left = `${event.pageX + 10}px`;
    nameDisplay.style.top = `${event.pageY + 10}px`;
  });

  img.addEventListener("mouseleave", () => {
    nameDisplay.style.display = "none";
  });
});
//DarkMode
function toggleDarkMode() {
  let switchElement = document.getElementById("darkMode");
  let button = switchElement.querySelector("button");
  let body = document.body;

  if (switchElement.classList.contains("active")) {
    switchElement.classList.remove("active");
    body.classList.remove("light-mode");
    button.innerHTML = "🌕";
  } else {
    switchElement.classList.add("active");
    body.classList.add("light-mode");
    button.innerHTML = "🌑";
  }
}
