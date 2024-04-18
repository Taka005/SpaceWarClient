import Base from "./Base.js";

export default class Message extends Base{
  constructor(){
    super();

    this.color = "white";
    this.text = "";
    this.font = "15pt Arial";
  }

  /**
   * 色を設定
   * @param {String} name 色
   */
  setColor(name){
    this.color = name;

    return this;
  }

  /**
   * テキストを設定
   * @param {String} text テキスト
   */
  setText(text){
    this.text = text;

    return this;
  }

  /**
   * フォントを設定
   * @param {String} text フォント
   */
  setFont(text){
    this.font = text;

    return this;
  }

  draw(ctx){
    if(!this.isDisplay) return;

    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.textAlign = "center";
    ctx.fillText(this.text,this.posX,this.posY);
  }
}