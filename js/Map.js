class Map {
    constructor() {
        this._isFinalized = false;
    }
    copyMap(newMap){
        this._map=[];
        for(let i = 0; i< newMap.length; i++){
            this._map[i]=[];
            for (let j = 0; j < newMap[0].length;j++){
                this._map[i][j] = newMap[i][j];
            }
        }
    }
    mapData(){
        this._blockHeight = this._map.length;
        this._blockWidht = this._map[0].length; 
    }
    createPlayer(posX, posY) {
        this._myPlayer = new Player();
        this._myPlayer._posX=posX;
        this._myPlayer._posY=posY;
        this._myPlayer._orientation = 0;
        this._map[this._myPlayer._posY][this._myPlayer._posX] = this._myPlayer.orientation;
    }
    createGoal(posX, posY) {
        this._myGoal = new Goal();
        this._myGoal._posX = posX;
        this._myGoal._posY = posY;
        this._map[this._myGoal._posY][this._myGoal._posX] = this._myGoal.symbol;
    }
    positionIsFree(posX, posY) {
        let ans = false;
        if (posX > -1 && posX < this._blockWidht && posY > -1 && posY < this._blockHeight) {
            if (this._map[posY][posX] === '-' || this._map[posY][posX] === '@') {
                ans = true;
            }
        }
        return ans;
    }
    isInGoal() {
        let ans = false;
        if (this._myGoal._posX === this._myPlayer._posX && this._myGoal._posY === this._myPlayer._posY) {
            ans = true;
        }
        return ans;
    }
    walk() {
        let posX = this._myPlayer._posX, posY = this._myPlayer._posY;
        this._myPlayer.move();
        let ans = this.positionIsFree(this._myPlayer._posX, this._myPlayer._posY);
        if (ans) {
            this.update();
            this._map[posY][posX] = '-';
            this.win();
        } else {
            this._myPlayer.returnMove();
        }
        return ans
    }
    rotate() {
        this._myPlayer.rotate();
        this.update();
    }
    update() {
        this._map[this._myPlayer._posY][this._myPlayer._posX] = this._myPlayer._orientation;
    }
    win() {
        if (this._myPlayer._posX == this._myGoal._posX && this._myPlayer._posY == this._myGoal._posY) {
            this._isFinalized = true;
        }
    }
    findAll() {
        for (let i = 0; i < this._blockHeight; i++) {
            for (let j = 0; j < this._blockWidht; j++) {
                if (this._map[i][j] === '0') {
                    this.createPlayer(j, i);
                }
                if (this._map[i][j] === '@') {
                    this.createGoal(j, i);
                }
            }
        }
    }
    get map() {
        return this._map;
    }
    get isFinalized() {
        return this._isFinalized;
    }
    get blockWidht() {
        return this._blockWidht;
    }
    get blockHeight() {
        return this._blockHeight;
    }
    get player(){
        return this._myPlayer;
    }
    get goal(){
        return this._myGoal;
    }

}

function createEmptyMap(widht, height) {
    let map = [];
    for (let i = 0; i < height; i++) {
        map[i] = [];
        for (let j = 0; j < widht; j++) {
            map[i][j] = '-';
        }
    }
    return map;
}