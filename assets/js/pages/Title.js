import Base from "./Base";

export default class Title extends Base{
  constructor(){
    super();

    this.img = new Image();
    this.img.src = "../../img/title";
  }

  draw(ctx){
    if(!this.display) return;

    ctx.drawImage(this.img,0,0);
  }
}