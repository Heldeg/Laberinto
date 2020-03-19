class Player{
    constructor(posX, posY) {
        this._posX = posX;
        this._posY = posY;
        this._orientation = 0;
        if (typeof Player.instance === 'object') {
            return Player.instance;
        }

        Player.instance = this;
        return this;
    }
    rotate() {
        this._orientation = (this._orientation + 1) % 4;
    }
    move() {
        switch (this._orientation) {
            case 0:
                this._posX++;
                break;
            case 1:
                this._posY--;
                break;
            case 2:
                this._posX--;
                break;
            case 3:
                this._posY++;
        }
    }
    returnMove(){
        switch (this._orientation) {
            case 0:
                this._posX--;
                break;
            case 1:
                this._posY++;
                break;
            case 2:
                this._posX++;
                break;
            case 3:
                this._posY--;
        }
    }
    set posX(newPosX){
        this._posX = newPosX;
    }
    set posY(newPosY){
        this._posX = newPosY;
    }
    get orientation(){
        return this._orientation;
    }
    get posX(){
        return this._posX;
    }
    get posY(){
        return this._posY;
    }
}
//export default Player;
