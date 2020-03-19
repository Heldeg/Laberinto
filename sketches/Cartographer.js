let size = 30;
let status = 0;
let floor, wall, cheese, ru1, ru2, rr1, rr2, rd1, rd2, rl1, rl2;

function preload() {
    floor = loadImage('../sprites/floor.png');
    wall = loadImage('../sprites/wall.png');
    cheese = loadImage('../sprites/cheese.png');
    ru1 = loadImage('../sprites/up-1.png');
    ru2 = loadImage('../sprites/up-2.png');
    rr1 = loadImage('../sprites/right-1.png');
    rr2 = loadImage('../sprites/right-2.png');
    rd1 = loadImage('../sprites/down-1.png');
    rd2 = loadImage('../sprites/down-2.png');
    rl1 = loadImage('../sprites/left-1.png');
    rl2 = loadImage('../sprites/left-2.png');
}

function grid() {
    //crea cuadricula
    for (let y = 0; y < myMap.blockHeight; y++) {
        let yPos = y * size;
        for (let x = 0; x < myMap.blockHeight; x++) {
            let xPos = x * size;
            identify(myMap.map[y][x], xPos, yPos);

        }
    }
}

function identify(element, xPos, yPos) {
    switch (element) {
        case 'x':
            //fill(0);
            //rect(xPos,yPos,size,size);
            image(wall, xPos, yPos, size, size);
            break;
        case '-':
            //fill(255,255,255);
            //rect(xPos,yPos,size,size);
            image(floor, xPos, yPos, size, size);
            break;
        case '@':
            //fill(0,0,255);
            //rect(xPos,yPos,size,size);
            image(floor, xPos, yPos, size, size);
            image(cheese, xPos + (size * 0.1), yPos + (size * 0.1), size * 0.8, size * 0.8);
            break;
        case 0:
            //fill(0,255,0);
            //rect(xPos,yPos,size,size);
            image(floor, xPos, yPos, size, size);
            switch (status) {
                case 0:
                    image(rr1, xPos + (size * 0.1), yPos + (size * 0.1), size * 0.9, size * 0.6);
                    reStatus();
                    break;
                case 1:
                    image(rr2, xPos + (size * 0.1), yPos + (size * 0.1), size * 0.9, size * 0.6);
                    reStatus();
                    break;
            }
            break;
        case 1:
            //fill(255,0,0);
            //rect(xPos,yPos,size,size);
            image(floor, xPos, yPos, size, size);
            switch (status) {
                case 0:
                    image(ru1, xPos + (size * 0.1), yPos + (size * 0.1), size * 0.6, size * 0.8);
                    reStatus();
                    break;
                case 1:
                    image(ru2, xPos + (size * 0.1), yPos + (size * 0.1), size * 0.6, size * 0.8);
                    reStatus();
                    break;
            }
            break;
        case 2:
            //fill(255,0,255);
            //rect(xPos,yPos,size,size);
            image(floor, xPos, yPos, size, size);
            switch (status) {
                case 0:
                    image(rl1, xPos + (size * 0.1), yPos + (size * 0.1), size * 0.9, size * 0.6);
                    reStatus();
                    break;
                case 1:
                    image(rl2, xPos + (size * 0.1), yPos + (size * 0.1), size * 0.9 , size * 0.6);
                    reStatus();
                    break;
            }
            break;
        case 3:
            //fill(255,255,0);
            //rect(xPos,yPos,size,size);
            image(floor, xPos, yPos, size, size);
            switch (status) {
                case 0:
                    image(rd1, xPos + (size * 0.1), yPos + (size * 0.1), size * 0.6, size * 0.8);
                    reStatus();
                    break;
                case 1:
                    image(rd2, xPos + (size * 0.1), yPos + (size * 0.1), size * 0.6, size * 0.8);
                    reStatus();
                    break;
            }
            break;
    }
}

function reStatus() {
    //para las images
    status = (status + 1) % 2;
}