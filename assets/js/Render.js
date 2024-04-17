import RenderManager from "./RenderManager.js";
import Title from "./pages/Title.js";
import Help from "./components/Help.js";
import Message from "./components/Message.js";

export default class Render extends RenderManager{
  constructor(canvas){
    super(canvas);

    this.add("help",new Help())
      .setPos(200,200);
  }

  message(name){
    return this.add(name,new Message());
  }

  title(){
    this.clear();

    this.add("title",new Title())
      .setDisplay(true);

    this.add("titleText",new Message())
      .setPos(30,750)
      .setText("キーを押してスタート")
      .setFont("30pt Arial")
      .setDisplay(true);
  }
}