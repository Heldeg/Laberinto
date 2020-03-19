function inside(x, y, w, h) {
    //identifica si está en el cuadrante
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        return true;
    } else {
        return false;
    }
}