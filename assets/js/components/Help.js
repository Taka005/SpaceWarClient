import Base from "./Base.js";
import config from "../config.js";

export default class Help extends Base{
  NoChange;

  constructor(){
    super();

    this.img = new Image();
    this.img.src = `${config.host}/assets/img/help.png`;
    this.rank = 2;
  }

  draw(ctx){
    if(!this.isDisplay) return;

    ctx.drawImage(
      this.img,
      this.posX - this.img.width/2,
      this.posY - this.img.height/2
    );
  }
}