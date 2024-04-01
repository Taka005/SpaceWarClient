import Base from "./Base.js";
import config from "../config.js";

export default class NoResponse extends Base{
  constructor(){
    super();

    this.img = new Image();
    this.img.src = `${config.host}/assets/img/noResponse.png`;
  }

  draw(ctx){
    if(!this.display) return;

    ctx.drawImage(this.img,0,0);
  }
}