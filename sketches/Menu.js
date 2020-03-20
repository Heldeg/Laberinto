const menuBlockSize = 80;
const numBlock = 7;
const marginBlock = 10;
let startIndex = 0;
let endIndex = 35;
function menuDimensions() {
    windWidht = 640;
    windHeight = 480;
}
class Level {
    constructor(id, xPos, yPos) {
        this._id = id;
        this._xPos = xPos;
        this._yPos = yPos;
    }
}


function menuGrid() {
    let x = 0,
        y = 0;
    let maxNumLevel;
    if(maxLevel <= endIndex){
        maxNumLevel = maxLevel; 
    }else{
        maxNumLevel = endIndex;
    }
    for (let i = startIndex; i < maxLevel; i++) {
        let xPos = (x * (menuBlockSize+marginBlock)) + marginBlock;
        let yPos = (y * (menuBlockSize+marginBlock)) + marginBlock;
        let level = i + 1;
        stroke(0, 41, 85)
        if (inside(xPos, yPos, menuBlockSize, menuBlockSize)) {
            // were inside
            fill(0, 78, 161);
            if (mouseIsPressed) {
                indexLevel = i;
                isMenu = false;
                iniMap();
            }
        } else {
            // not inside
            fill(0, 115, 237);
        }
        rect(xPos, yPos, menuBlockSize, menuBlockSize);
        push();
        textSize(50);
        fill(245, 123, 158);
        text(level, xPos, yPos, menuBlockSize, menuBlockSize);
        pop();
        x++;
        if (numBlock == x) {
            x = 0;
            y++;
        }
    }
}
function nextPage(){
    startIndex = endIndex+1;
    endIndex += endIndex;
}
function prevPage(){
    endIndex = startIndex-1;
    startIndex -= startIndex+1; 
}