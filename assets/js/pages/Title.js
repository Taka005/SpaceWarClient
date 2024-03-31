import Base from "./Base.js";

export default class Title extends Base{
  constructor(){
    super();

    this.img = new Image();
    this.img.src = "../../assets/img/title.png";
  }

  draw(ctx){
    if(!this.display) return;

    ctx.drawImage(this.img,0,0);
  }
}