const botonesMostrar = document.querySelectorAll(".mostrar");

botonesMostrar.forEach((boton) => {
    boton.addEventListener("click", function () {
        const trailer = boton.previousElementSibling;
        if (trailer.style.display === "none" || trailer.style.display === "") {
            trailer.style.display = "block";
        } else {
            trailer.style.display = "none";
        }
    });
});