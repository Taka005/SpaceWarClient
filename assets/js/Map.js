export default class Map{
  constructor(config){
    this.width = config.width;
    this.height = config.height;

    this.posX = 0;
    this.posY = 0;
    this.rotate = 0;
  }

  calcPos({ posX, posY }){
    posX = posX - this.posX;
    posY = posY - this.posY;


  }

  toClientPos(posX,posY){
    return {
      posX: posX - this.posX,
      posY: posY - this.posY
    }
  }
}