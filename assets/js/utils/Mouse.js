import lib from "./lib.js";

export default class Mouse{
  constructor(){
    this.start = null;
    this.end = null;
  }

  down(event){
    const { posX, posY } = lib.getMousePos(event);

    this.start = {
      posX: posX,
      posY: posY
    }
  }

  up(event){
    const { posX, posY } = lib.getMousePos(event);

    this.end = {
      posX: posX,
      posY: posY
    }
  }
}