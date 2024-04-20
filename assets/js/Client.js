import WebSocketManager from "./WebsocketManager.js";
import Render from "./Render.js";
import Game from "./Game.js";
import config from "./config.js";
import Event from "./utils/Event.js";
import Status from "./utils/Status.js";
import Key from "./utils/Key.js";

export default class Client{
  constructor(canvas){
    this.render = new Render(canvas);
    this.game = new Game(this,this.render);
    this.ws = new WebSocketManager(this.game,this);

    this.setStatus(Status.Waiting);

    this.render.title();

    setInterval(()=>{
      this.render.update();
    },1000/config.fps);
  }

  /**
   * ステータスを設定
   * @param {Number} type ステータスコード
   */
  setStatus(type){
    if(!Object.values(Status).find(st=>st === type)) throw new Error("無効なステータスです");

    this.status = type;
  }

  /**
   * キーダウンイベント
   * @param {Event} event イベント
   */
  keyDown(event){
    if(event.code === Key.Help){
      this.render.get("help")
        .setDisplay(true);
    }else if(this.status === Status.Waiting){
      if(this.ws.ready){
        this.ws.send({
          type: Event.SessionReady
        });

        this.render.get("titleText")
          .setText("マッチング中")

        this.setStatus(Status.Matching);
      }else{
        this.render.message("error")
          .setPos(400,500)
          .setColor("red")
          .setFont("25pt Arial")
          .setText("サーバーが応答していません");
      }
    }else if(this.status === Status.Readying){
      if(event.code === Key.Right){

      }else if(event.code === Key.Left){

      }
    }else if(this.status === Status.Playing){

    }
  }

  /**
   * キーアップイベント
   * @param {Event} event イベント
   */
  keyUp(event){
    if(event.code === Key.Help){
      this.render.get("help")
        .setDisplay(false);
    }
  }
}