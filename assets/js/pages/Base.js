export default class Base{
  constructor(){
    this.type = "page";
    this.rank = 0;
    this.isDisplay = false;
  }

  /**
   * 表示状態を設定
   * @param {Boolean} bool 表示するかどうか
   */
  setDisplay(bool){
    this.isDisplay = bool;

    return this;
  }
}