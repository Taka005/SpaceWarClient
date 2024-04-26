import lib from "./lib.js";

export default class Mouse{
  constructor(canvas){
    this.canvas = canvas;

    this.isPress = false;

    this.point = {
      posX: 0,
      posY: 0
    }

    this.start = null;
    this.end = null;
  }

  update(event){
    this.point = lib.getMousePos(event,this.canvas);
  }

  down(){
    if(!this.isPress) return;

    this.start = this.point;

    this.isPress = true;
  }

  up(){
    this.end = this.point;

    this.isPress = false;
  }
}