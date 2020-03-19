let myMap;
function setup(){
    //preload();
    let canvas = createCanvas(640, 480);
    canvas.parent('sketch-holder');
    myMap = new Map(map1);
    frameRate(30);
    noLoop();
}
function draw(){
    background(200);
    grid();
}