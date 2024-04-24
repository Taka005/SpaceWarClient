import Base from "./Base.js";

export default class Unit extends Base{
  constructor(){
    super();

    this.rank = 1;
    this.isFocus = false;
  }

  /**
   * フォーカス状態を設定
   * @param {Boolean} bool フォーカス状態
   */
  setFocus(bool){
    this.isFocus = bool;

    return this;
  }

  /**
   * 色を設定
   * @param {String} name 表示色
   */
  setColor(name){
    this.color = name;

    return this;
  }

  /**
   * 表示サイズを設定
   * @param {Number} size 表示サイズ
   */
  setSize(size){
    this.size = size;

    return this;
  }

  /**
   * 体力を設定
   * @param {Number} hp 体力
   */
  setHp(hp){
    this.hp = hp;

    return hp;
  }

  draw(){
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;

    if(this.isFocus){
      ctx.lineWidth = 5;

      ctx.beginPath();
      ctx.arc(this.posX,this.posY,this.size+10,0,2*Math.PI);
    }

    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.arc(this.posX,this.posY,this.size,0,2*Math.PI);
    ctx.fill();

    ctx.font = "15pt Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(this.hp,this.posX,this.posY+this.size+20);
  }
}