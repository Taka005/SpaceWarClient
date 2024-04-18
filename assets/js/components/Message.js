import Base from "./Base.js";

export default class Message extends Base{
  constructor(){
    super();

    this.color = "white";
    this.text = "";
    this.font = "15pt Arial";
  }

  setColor(name){
    this.color = name;

    return this;
  }

  setText(text){
    this.text = text;

    return this;
  }

  setFont(text){
    this.font = text;

    return this;
  }

  draw(ctx){
    if(!this.isDisplay) return

    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(this.text,this.posX,this.posY);
  }
}