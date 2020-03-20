let myMap;
function setup(){
    //preload();
    iniMap();
    let canvas = createCanvas(windWidht, windHeight);//640x480 800 x 600
    canvas.parent('sketch-holder');
    noLoop();
}
function draw(){
    background(200);
    image(wallpaper,0,0,windWidht,windHeight);
    grid();
}