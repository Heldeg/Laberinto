//import Player from './Player.js'
//import Goal from './Goal.js'
//import map1 from '../maps/map1.js'
class Map {
    constructor(newMap) {
        this._map = newMap;
        this._blockHeight = newMap.length;
        this._blockWidht = newMap[0].length;
        this.findAll(); //goal and player
        this._isFinalized = false;
    }
    createPlayer(posX, posY) {
        this._myPlayer = new Player(posX, posY);
        this._map[this._myPlayer._posY][this._myPlayer._posX] = this._myPlayer.orientation;
    }
    createGoal(posX, posY) {
        this._myGoal = new Goal(posX, posY);
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
            for (let j = 0; j < this._blockHeight; j++) {
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
//export default Map;
/*const myMap = new Map(map1.map1);
console.log(myMap);*/