import Base from "./Base";

export default class Bullet extends Base{
  constructor(){
    super();
  }

  /**
   * 弾のサイズを設定
   * @param {Number} size 弾のサイズ
   */
  setSize(size){
    this.size = size;

    return this;
  }

  draw(){
    ctx.strokeStyle = "yellow";
    ctx.fillStyle = "yellow";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.arc(this.posX,this.posY,this.size,0,2*Math.PI);
    ctx.fill();
  }
}