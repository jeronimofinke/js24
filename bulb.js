var miImagen = document.getElementById("miImagen");
var imagenes = ["Bild_2024-01-30_143833818-split.png", "Bild_2024-01-30_143833818-split (1).png"];
var imagenActual = 0;

function cambiarImagen() {
    if (imagenActual === 0) {
        miImagen.src = imagenes[1];  // Set the image to the second one to turn off
        imagenActual = 1;
    } else {
        miImagen.src = imagenes[0];  // Set the image to the first one to turn on
        imagenActual = 0;
    }
}
