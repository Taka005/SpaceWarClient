import WebSocketManager from "./WebsocketManager.js";
import Render from "./Render.js";
import Game from "./Game.js";
import config from "./config.js";
import Event from "./utils/Event.js";
import Status from "./utils/Status.js";

export default class Client{
  constructor(canvas){
    this.render = new Render(canvas);
    this.game = new Game(this,this.render);
    this.ws = new WebSocketManager(this.game);

    this.setStatus("Waiting");

    setInterval(()=>{
      this.render.update();

      if(this.status === Status.Waiting){
        this.render.title();
      }
    },1000/config.fps);
  }

  setStatus(type){
    if(!Status[type]) throw new Error("無効なステータスです");

    this.status = Status[type];
  }

  keyDown(event){
    if(event.code === "KeyH"){
      this.render.get("help")
        .setDisplay(true);
    }else if(this.status === Status.Waiting){
      if(this.ws.ready){
        this.ws.send({
          type: Event.SessionReady
        });

        this.render.get("titleText")
          .setText("マッチング中")

        this.setStatus("Matching");
      }else{
        this.render.message("error")
          .setPos(100,500)
          .setColor("red")
          .setText("サーバーが応答していません");
      }
    }else if(this.status === Status.Readying){

    }else if(this.status === Status.Playing){

    }
  }

  keyUp(event){
    if(event.code === "KeyH"){
      this.render.get("help")
        .setDisplay(false);
    }
  }
}