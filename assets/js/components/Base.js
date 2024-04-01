export default class Base{
  constructor(){
    this.display = false;
    this.posX = 0;
    this.posY = 0
  }

  setDisplay(bool){
    this.display = bool;

    return this;
  }

  setPos(posX,posY){
    this.posX = posX;
    this.posY = posY;

    return this;
  }
}