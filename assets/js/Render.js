import Title from "./pages/Title.js";
import config from "./config.js";

export default class Render{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.pages = [
      new Title()
    ]

    setInterval(()=>{
      this.update();
    },1000/config.fps);
  }

  update(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

    this.pages.forEach(page=>{
      page.draw(this.ctx);
    });
  }

  getPage(name){
    return this.pages.find(page=>page.constructor.name === name);
  }
}