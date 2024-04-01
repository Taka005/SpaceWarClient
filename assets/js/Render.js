import Title from "./pages/Title.js";
import Matching from "./pages/Matching.js";
import NoResponse from "./pages/NoResponse.js";
import Help from "./components/Help.js";
import Message from "./components/Message.js";
import config from "./config.js";

export default class Render{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.pages = [
      new Title(),
      new Matching(),
      new NoResponse()
    ]

    this.components = [
      new Help()
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

    this.components.forEach(component=>{
      component.draw(this.ctx);
    });
  }

  getPage(name){
    return this.pages.find(page=>page.constructor.name === name);
  }
}