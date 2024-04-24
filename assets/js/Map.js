import config from "./config.js";

export default class Map{
  constructor(config){
    this.width = config.width;
    this.height = config.height;

    this.posX = 0;
    this.posY = 0;
    this.rotate = 0;
  }

  forward(){
    this.posY += config.speed;
  }

  backward(){
    this.posY -= config.speed;
  }

  right(){
    this.posX += config.speed;
  }

  left(){
    this.posX -= config.speed;
  }

  addRotate(angle){
    this.rotate += angle;

    if(this.rotate >= 360){
      this.rotate %= 360;
    }else if(this.rotate < 0){
      this.rotate += 360;
    }
  }

  toClient({ posX, posY }){
    return {
      posX: posX - this.posX,
      posY: posY - this.posY
    }
  }

  toServer({ posX, posY }){
    return {
      posX: posX + this.posX,
      posY: posY + this.posY
    }
  }
}