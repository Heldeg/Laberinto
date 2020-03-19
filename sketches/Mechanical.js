function keyTyped() {
    let ans;
    if (key === 'q') {
        //Rota el jugador sentido contrario manecillas reloj
        myMap.rotate();
        redraw();
    } else if (key === 'w') {
        //avanza si es posible
        ans = myMap.walk();
        redraw();
        if(myMap.isFinalized){
            //si llega a la meta
            gameOver();
        }
    }
}
function gameOver(){
    //ToDo
    myMap = new Map(map1);
    console.log(map1);
    redraw();
}

