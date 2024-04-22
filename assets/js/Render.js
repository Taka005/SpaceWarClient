import RenderManager from "./RenderManager.js";
import Title from "./pages/Title.js";
import Readying from "./pages/Readying.js";
import Ready from "./pages/Ready.js";
import Play from "./pages/play.js";
import Help from "./components/Help.js";
import Message from "./components/Message.js";
import Bar from "./components/Bar.js";

export default class Render extends RenderManager{
  constructor(canvas){
    super(canvas);

    this.add("help",new Help())
      .setPos(400,400)
      .setChange(false);

    this.add("error",new Message())
      .setPos(400,200)
      .setColor("red")
      .setChange(false);

    this.add("message",new Message())
      .setPos(400,300)
      .setChange(false);
  }

  setMessage(name){
    return this.add(name,new Message())
      .setDisplay(true);
  }

  setTitle(){
    this.clear();

    this.add("title",new Title())
      .setDisplay(true);

    this.add("titleText",new Message())
      .setPos(400,750)
      .setText("キーを押してスタート")
      .setFont("40pt Arial")
      .setDisplay(true);
  }

  setReadying(){
    this.clear();

    this.add("readying",new Readying())
      .setDisplay(true);
  }

  setReady(){
    this.clear();

    this.add("ready",new Ready())
      .setDisplay(true);
  }

  setPlay(){
    this.clear();

    this.add("play",new Play())
      .setDisplay(true);
  }

  setBar(name){
    return this.add(name,new Bar())
      .setSize(500,50)
      .setMax(100)
      .setDisplay(true);
  }
}