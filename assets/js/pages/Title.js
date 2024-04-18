import Base from "./Base.js";
import config from "../config.js";

export default class Title extends Base{
  constructor(){
    super();

    this.img = new Image();
    this.img.src = `${config.host}/assets/img/title.png`;
  }

  draw(ctx){
    if(!this.isDisplay) return;

    ctx.drawImage(this.img,0,0);
  }
}