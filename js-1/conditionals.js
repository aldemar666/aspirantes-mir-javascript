function calcularColor(num) {
    var color;
    if (num === 1) {
        color = "negro";
    } else if (num === 2) {
        color = "blanco";
    } else if (num === 3) {
        color = "rojo";
    } else {
        color = "verde";
    }
  
    return "El color es " + color;
}