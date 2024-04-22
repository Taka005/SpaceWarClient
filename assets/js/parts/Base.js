export default class Base{
  constructor(){
    this.rank = 0;
  }

  setName(name){
    this.name = name;

    return this;
  }
}