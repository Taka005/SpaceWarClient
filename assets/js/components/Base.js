export default class Base{
  constructor(){
    this.type = "component"
    this.isDisplay = false;
    this.posX = 0;
    this.posY = 0
  }

  setDisplay(bool){
    this.isDisplay = bool;

    return this;
  }

  setPos(posX,posY){
    this.posX = posX;
    this.posY = posY;

    return this;
  }

  setTime(ms){
    setTimeout(()=>{
      this.isDisplay = !this.isDisplay;
    },ms);

    return this;
  }
}