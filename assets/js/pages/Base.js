export default class Base{
  constructor(){
    this.type = "page";
    this.rank = 0;
    this.isDisplay = false;
    this.isChange = true;
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
}