import Base from "./Base";

export default class Unit extends Base{
  constructor(){
    super();
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

  /**
   * 索敵範囲を設定
   * @param {Number} size 索敵範囲
   */
  setSearch(size){
    this.search = size;

    return this;
  }

  draw(){
    if(this.search){
      ctx.strokeStyle = "white";
      ctx.fillStyle = "white";
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.arc(this.posX,this.posY,this.search,0,2*Math.PI);
      ctx.fill();
    }

    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.arc(this.posX,this.posY,this.size,0,2*Math.PI);
    ctx.fill();

    ctx.font = "15pt Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(this.hp,this.posX,this.posY+this.size+15);
  }
}