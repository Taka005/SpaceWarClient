export default class Base{
  constructor(){
    this.rank = 0;
    this.posX = 0;
    this.posY = 0;
  }

  /**
   * 座標を設定
   * @param {Number} posX X座標
   * @param {Number} posY Y座標
   */
  setPos(posX,posY){
    this.posX = posX;
    this.posY = posY;

    return this;
  }

  setName(name){
    this.name = name;

    return this;
  }
}