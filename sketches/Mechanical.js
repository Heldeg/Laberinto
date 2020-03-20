let indexLevel = 0;
const maxLevel = myMaps.length;
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
    $('#winModal').modal('show');
    isDisableButton();
}
function restart(){
    iniMap();
    redraw();
}
function iniMap(){
    myMap = new Map();
    myMap.copyMap(myMaps[indexLevel]);
    myMap.mapData();
    myMap.findAll();
    justify();
    console.log(myMap.goal);
}
function nextLevel(){
    indexLevel = (indexLevel+1)%maxLevel;
    iniMap();
    resizeCanvas(windWidht, windHeight);
    redraw();
}
function isDisableButton(){
    if((indexLevel+1) === maxLevel){
        $("#nextlevelButton").hide();
        $("menuButton2").show();
    }else{
        $("#nextlevelButton").show();
        $("#menuButton2").hide();
    }
}  
function showMenu(){

}


