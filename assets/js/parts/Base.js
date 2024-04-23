export default class Base{
  constructor(){
    this.rank = 0;
    this.posX = 0;
    this.posY = 0;
  }

  setName(name){
    this.name = name;

    return this;
  }
}