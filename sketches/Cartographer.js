let blockSize; //20 /45 /30
let status = 0;
let floor, wall, cheese, ru1, ru2, rr1, rr2, rd1, rd2, rl1, rl2;
let windWidht;
let windHeight;

function preload() {
    floor = loadImage('sprites/floor.png');
    wall = loadImage('sprites/wall.png');
    cheese = loadImage('sprites/cheese.png');
    wallpaper = loadImage('img/wallpaper.jpg')
    ru1 = loadImage('sprites/up-1.png');
    ru2 = loadImage('sprites/up-2.png');
    rr1 = loadImage('sprites/right-1.png');
    rr2 = loadImage('sprites/right-2.png');
    rd1 = loadImage('sprites/down-1.png');
    rd2 = loadImage('sprites/down-2.png');
    rl1 = loadImage('sprites/left-1.png');
    rl2 = loadImage('sprites/left-2.png');
}

function grid() {
    //crea cuadricula
    for (let y = 0; y < myMap.blockHeight; y++) {
        let yPos = y * blockSize;
        for (let x = 0; x < myMap.blockWidht; x++) {
            let xPos = x * blockSize;
            identify(myMap.map[y][x], xPos, yPos, centerX(), centerY());

        }
    }
}

function justify() {
    if (myMap.blockWidht > 14 || myMap.blockHeight > 10) {
        if (myMap.blockWidht > 21 || myMap.blockHeight > 16) {
            if (myMap.blockWidht > 26 || myMap.blockHeight > 20) {
                if (myMap.blockWidht > 30 || myMap.blockHeight > 30) {
                    let myException = new ExceptionMapSize("Mapa muy grande");
                    throw myException;
                }
                if (myMap.blockHeight > 24) {
                    blockSize = 20;
                    windWidht = 800;
                    windHeight = 600;
                } else {
                    windWidht = 640;
                    windHeight = 480;
                    blockSize = 20;
                }
            } else {
                blockSize = 30;
                windWidht = 800;
                windHeight = 600;
            }
        } else {
            windWidht = 640;
            windHeight = 480;
            blockSize = 30;
        }
    }else{
        windWidht = 640;
        windHeight = 480;
        blockSize = 45;
    }
    // W: 640 X H: 480 s: 45
}

function centerX() {
    let cSizeW = (blockSize * myMap.blockWidht) / 2;
    let cW = windWidht / 2;
    return cW - cSizeW;
}

function centerY() {
    let cSizeH = (blockSize * myMap.blockHeight) / 2;
    let cH = windHeight / 2;
    return cH - cSizeH;
}

function identify(element, xPos, yPos, cW, cH) {
    switch (element) {
        case 'x':
            image(wall, xPos + cW, yPos + cH, blockSize, blockSize);
            break;
        case '-':
            image(floor, xPos + cW, yPos + cH, blockSize, blockSize);
            break;
        case '@':
            image(floor, xPos + cW, yPos + cH, blockSize, blockSize);
            image(cheese, xPos + cW + (blockSize * 0.1), yPos + cH + (blockSize * 0.1), blockSize * 0.8, blockSize * 0.8);
            break;
        case 0:
            image(floor, xPos + cW, yPos + cH, blockSize, blockSize);
            switch (status) {
                case 0:
                    image(rr1, xPos + cW + (blockSize * 0.1), yPos + cH + (blockSize * 0.1), blockSize * 0.9, blockSize * 0.6);
                    reStatus();
                    break;
                case 1:
                    image(rr2, xPos + cW + (blockSize * 0.1), yPos + cH + (blockSize * 0.1), blockSize * 0.9, blockSize * 0.6);
                    reStatus();
                    break;
            }
            break;
        case 1:
            image(floor, xPos + cW, yPos + cH, blockSize, blockSize);
            switch (status) {
                case 0:
                    image(ru1, xPos + cW + (blockSize * 0.1), yPos + cH + (blockSize * 0.1), blockSize * 0.6, blockSize * 0.8);
                    reStatus();
                    break;
                case 1:
                    image(ru2, xPos + cW + (blockSize * 0.1), yPos + cH + (blockSize * 0.1), blockSize * 0.6, blockSize * 0.8);
                    reStatus();
                    break;
            }
            break;
        case 2:
            image(floor, xPos + cW, yPos + cH, blockSize, blockSize);
            switch (status) {
                case 0:
                    image(rl1, xPos + cW + (blockSize * 0.1), yPos + cH + (blockSize * 0.1), blockSize * 0.9, blockSize * 0.6);
                    reStatus();
                    break;
                case 1:
                    image(rl2, xPos + cW + (blockSize * 0.1), yPos + cH + (blockSize * 0.1), blockSize * 0.9, blockSize * 0.6);
                    reStatus();
                    break;
            }
            break;
        case 3:
            image(floor, xPos + cW, yPos + cH, blockSize, blockSize);
            switch (status) {
                case 0:
                    image(rd1, xPos + cW + (blockSize * 0.1), yPos + cH + (blockSize * 0.1), blockSize * 0.6, blockSize * 0.8);
                    reStatus();
                    break;
                case 1:
                    image(rd2, xPos + cW + (blockSize * 0.1), yPos + cH + (blockSize * 0.1), blockSize * 0.6, blockSize * 0.8);
                    reStatus();
                    break;
            }
            break;
    }
}

function reStatus() {
    //para las images animacion
    status = (status + 1) % 2;
}