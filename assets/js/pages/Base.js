export default class Base{
  constructor(){
    this.type = "page";
    this.isDisplay = false;
  }

  setDisplay(bool){
    this.isDisplay = bool;

    return this;
  }
}