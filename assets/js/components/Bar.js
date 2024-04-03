import Base from "./Base.js";

export default class Bar extends Base{
  constructor(){
    super();

    this.width = 0;
    this.height = 0;
    this.value = 0;
    this.max = 0;
    this.isActive = false;
  }

  setSize(width,height){
    this.width = width;
    this.height = height;

    return this;
  }

  draw(ctx){
    if(!this.display) return;

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(this.posX,this.poxY,this.width,this.height);

    const posX = this.poxY + (this.value/100)*(this.width - this.max);
    ctx.beginPath();
    ctx.fillStyle = this.isActive ? "blue" : "grey";
    ctx.fillRect(this.posX,this.posY,poxY,this.height);
  }
}