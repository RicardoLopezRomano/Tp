
   const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const transicion = document.querySelector(".transicion ul");

    let currentIndex = 0;

    prevButton.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + 6) % 6;
      updateSlide();
    });

    nextButton.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % 5;
      updateSlide();
    });

    function updateSlide() {
      transicion.style.transform = `translateX(-${currentIndex * 16.67}%)`; 
    }
  /*

    document.addEventListener("DOMContentLoaded", function () {
      const prevButton = document.getElementById("prev");
      const nextButton = document.getElementById("next");
      const imageList = document.querySelector(".transicion ul");
    
      let currentPosition = 0;
    
      // Función para avanzar al siguiente grupo de imágenes
      function nextImageGroup() {
        currentPosition -= 100; // Cambia el valor según el ancho de cada imagen en tu carrusel
        if (currentPosition < 500) {
          currentPosition = 0; // Vuelve al primer grupo de imágenes
        }
        updateImageListPosition();
      }
    
      // Función para retroceder al grupo de imágenes anterior
      function prevImageGroup() {
        currentPosition += 100; // Cambia el valor según el ancho de cada imagen en tu carrusel
        if (currentPosition > 0) {
          currentPosition = -500; // Vuelve al último grupo de imágenes
        }
        updateImageListPosition();
      }
    
      // Función para actualizar la posición del carrusel
      function updateImageListPosition() {
        imageList.style.marginLeft = currentPosition + "%";
      }
    
      // Agregar event listeners a los botones
      nextButton.addEventListener("click", nextImageGroup);
      prevButton.addEventListener("click", prevImageGroup);
    });