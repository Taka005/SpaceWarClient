import Base from "./Base.js";
import config from "../config.js";

export default class Help extends Base{
  constructor(){
    super();

    this.img = new Image();
    this.img.src = `${config.host}/assets/img/help.png`;
  }

  draw(ctx){
    if(!this.display) return;

    ctx.drawImage(this.img,this.posX,this.posY);
  }
}