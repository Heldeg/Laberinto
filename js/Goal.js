class Goal{
    constructor() {
        this._symbol = '@';
        if (typeof Goal.instance === 'object') {
            return Goal.instance;
        }
        Goal.instance = this;
        return this;
    }
    set posX(newPosX){
        this._posX = newPosX;
    }
    set posY(newPosY){
        this._posX = newPosY;
    }
    get symbol(){
        return this._symbol;
    }
    get posX(){
        return this._posX;
    }
    get posY(){
        return this._posY;
    }

}
//export default Goal;