import WebSocketManager from "./WebsocketManager.js";
import Render from "./Render.js";
import Game from "./Game.js";
import Event from "./utils/Event.js";
import Status from "./utils/Status.js";

export default class Client{
  constructor(canvas){
    this.canvas = canvas;
    this.render = new Render(this.canvas);
    this.game = new Game(this.render);
    this.ws = new WebSocketManager(this.game);

    this.render.getPage("Title").setDisplay(true);

    this.setStatus("TitlePage");
  }

  setStatus(type){
    if(!Status[type]) throw new Error("無効なステータスです");

    this.status = Status[type];
  }

  keyDown(event){
    if(event.code === "KeyH"){
      this.render.getComponent("Help")
        .setPos(this.canvas.width/4,this.canvas.height/4)
        .setDisplay(true);
    }else if(this.status === Status.TitlePage){
      this.render.getPage("Title").setDisplay(false);

      if(this.ws.ready){
        this.ws.send({
          type: Event.SessionReady
        });

        this.render.getPage("Matching").setDisplay(true);

        this.setStatus("Matching");
      }else{
        this.render.getPage("NoResponse").setDisplay(true);
      }
    }else if(this.status === Status.Readying){

    }else if(this.status === Status.Playing){

    }
  }

  keyUp(event){
    if(event.code === "KeyH"){
      this.render.getComponent("Help").setDisplay(false);
    }
  }
}