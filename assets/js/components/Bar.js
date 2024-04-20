import Base from "./Base.js";

export default class Bar extends Base{
  constructor(){
    super();

    this.isActive = false;
    this.width = 0;
    this.height = 0;
    this.value = 0;
    this.max = 0;
  }

  setActive(bool){
    this.isActive = bool;
  }

  setSize(width,height){
    this.width = width;
    this.height = height;

    return this;
  }

  setValue(value){
    this.value = value;

    return this;
  }

  setMax(max){
    this.max = max;
  }

  draw(ctx){
    if(!this.isDisplay) return;

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(this.posX,this.poxY,this.posX + this.width,this.posY + this.height);

    const posX = this.poxX + (this.value/this.max)*this.width;

    ctx.beginPath();
    ctx.fillStyle = this.isActive ? "blue" : "grey";
    ctx.fillRect(this.posX,this.posY,posX,this.posY + this.height);
  }
}