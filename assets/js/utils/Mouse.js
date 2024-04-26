import lib from "./lib.js";

export default class Mouse{
  constructor(canvas){
    this.canvas = canvas;

    this.start = null;
    this.end = null;
  }

  down(event){
    const { posX, posY } = lib.getMousePos(event,this.canvas);

    this.start = {
      posX: posX,
      posY: posY
    }
  }

  up(event){
    const { posX, posY } = lib.getMousePos(event,this.canvas);

    this.end = {
      posX: posX,
      posY: posY
    }
  }
}