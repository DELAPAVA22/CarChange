// Arreglos de IDs de imágenes agrupadas
const carImages = ["car1", "car2", "car3"];
const landscapeImages = ["landscape1", "landscape2", "landscape3"];
const roadImages = ["road1", "road2", "road3"];

// Índices iniciales para cada grupo
let carIndex = 0;
let landscapeIndex = 0;
let roadIndex = 0;

// Función para mostrar solo la imagen actual y ocultar las demás del grupo
function showOnlyCurrentImage(className, imagesArray, currentIndex) {
  // Oculta todas las imágenes del grupo
  document.querySelectorAll(`.${className}`).forEach((img) => {
    img.style.display = "none"; // Oculta todas las imágenes
  });
  // Muestra solo la imagen actual usando su ID
  document.getElementById(imagesArray[currentIndex]).style.display = "block";
}

// Función para cambiar las imágenes de tipo 'car'
function changeCarImage() {
  carIndex = (carIndex + 1) % carImages.length; // Índice cíclico
  showOnlyCurrentImage("car-image", carImages, carIndex);
}

// Función para cambiar las imágenes de tipo 'landscape'
function changeLandscapeImage() {
  landscapeIndex = (landscapeIndex + 1) % landscapeImages.length;
  showOnlyCurrentImage("landscape-image", landscapeImages, landscapeIndex);
}

// Función para cambiar las imágenes de tipo 'road'
function changeRoadImage() {
  roadIndex = (roadIndex + 1) % roadImages.length;
  showOnlyCurrentImage("road-image", roadImages, roadIndex);
}

// Añadir eventos a los botones
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("car-button")
    .addEventListener("click", changeCarImage);
  document
    .getElementById("landscape-button")
    .addEventListener("click", changeLandscapeImage);
  document
    .getElementById("road-button")
    .addEventListener("click", changeRoadImage);

  // Inicializar mostrando solo la primera imagen de cada grupo
  showOnlyCurrentImage("car-image", carImages, carIndex);
  showOnlyCurrentImage("landscape-image", landscapeImages, landscapeIndex);
  showOnlyCurrentImage("road-image", roadImages, roadIndex);
});
