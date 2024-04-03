import Base from "./Base.js";

export default class Message extends Base{
  constructor(){
    super();

    this.color = "black";
    this.text = "";
  }

  setColor(name){
    this.color = name;

    return this;
  }

  setText(text){
    this.text = text;

    return this;
  }

  draw(ctx){
    ctx.font = "15pt Arial";
    ctx.fillStyle = this.color;
    ctx.fillText(this.text,this.posX,this.posY);
  }
}