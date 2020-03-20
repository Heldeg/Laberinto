let myMap;
let isMenu =true;
function setup(){
    menuDimensions();
    let canvas = createCanvas(windWidht, windHeight);//640x480 800 x 600
    canvas.parent('sketch-holder');
    //noLoop();
}
function draw(){
    image(wallpaper,0,0,windWidht,windHeight);
    if(isMenu){
        menuGrid();
    }else{
        grid();
        noLoop();
    }

}