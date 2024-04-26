import lib from "./lib.js";

export default class Mouse{
  constructor(canvas){
    this.canvas = canvas;

    this.point = null;

    this.start = null;
    this.end = null;
  }

  move(event){
    this.point = lib.getMousePos(event,this.canvas);
  }

  down(){
    this.start = this.point;
  }

  up(){
    this.end = this.point;
  }
}