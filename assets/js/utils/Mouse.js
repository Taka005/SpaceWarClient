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
    const rect = canvas.getBoundingClientRect();

    this.point = {
      posX: event.clientX - rect.x,
      posY: event.clientY - rect.y,
    }
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