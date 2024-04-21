export default class Base{
  constructor(){
    this.type = "component"
    this.rank = 0;
    this.isDisplay = false;
    this.isChange = true;
    this.posX = 0;
    this.posY = 0;
  }

  /**
   * 表示状態を設定
   * @param {Boolean} bool 表示するかどうか
   */
  setDisplay(bool){
    this.isDisplay = bool;

    return this;
  }

  /**
   * 変更可能状態を設定
   * @param {Boolean} bool 変更するかどうか
   */
  setChange(bool){
    this.isChange = bool;

    return this;
  }

  /**
   * 座標を設定
   * @param {Number} posX X座標
   * @param {Number} posY Y座標
   */
  setPos(posX,posY){
    this.posX = posX;
    this.posY = posY;

    return this;
  }

  /**
   * 時間経過で指定された状態にします
   * @param {Number} ms 変更されるまでの時間(ミリ秒)
   * @param {Boolean} bool 表示するかどうか
   */
  setTime(ms,bool){
    setTimeout(()=>{
      this.isDisplay = bool;
    },ms);

    return this;
  }
}