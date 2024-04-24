import Base from "./Base.js";

export default class Range extends Base{
  constructor(){
    super();
  }

  /**
   * 範囲のサイズを設定
   * @param {Number} size 範囲
   */
  setSize(size){
    this.size = size;

    return this;
  }

  draw(){
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.arc(this.posX,this.posY,this.size,0,2*Math.PI);
    ctx.fill();
  }
}