import WebSocketManager from "./WebsocketManager.js";
import Render from "./Render.js";
import Game from "./Game.js";
import config from "./config.js";
import Event from "./utils/Event.js";
import Status from "./utils/Status.js";
import Key from "./utils/Key.js";
import Mouse from "./utils/Mouse.js";
import lib from "./utils/lib.js";

export default class Client{
  constructor(canvas){
    this.render = new Render(canvas);
    this.game = new Game(this,this.render);
    this.ws = new WebSocketManager(this.game,this);

    this.mouse = new Mouse();

    this.setStatus(Status.Waiting);

    this.render.setTitle();

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
        this.render.setMessage("error")
          .setPos(400,500)
          .setColor("red")
          .setFont("25pt Arial")
          .setText("サーバーが応答していません");
      }
    }else if(this.status === Status.Readying){
      if(event.code === Key.Right){
        this.game.effect.add();
      }else if(event.code === Key.Left){
        this.game.effect.remove();
      }else if(event.code === Key.Backward){
        this.game.effect.addIndex();
      }else if(event.code === Key.Forward){
        this.game.effect.removeIndex();
      }else if(event.code === Key.Attack){
        this.ws.send({
          type: Event.GameReady,
          effect: this.game.effect.export()
        });
      }
    }else if(this.status === Status.Playing){
      if(event.code === Key.Forward){
        this.game.map.forward();
      }else if(event.code === Key.Backward){
        this.game.map.backward();
      }else if(event.code === Key.Right){
        this.game.map.right();
      }else if(event.code === Key.Left){
        this.game.map.left();
      }else if(event.code === Key.RightRoll){
        this.game.map.addRotate(90);
        this.render.addRotate(90);
      }else if(event.code === Key.LeftRoll){
        this.game.map.addRotate(-90);
        this.render.addRotate(-90);
      }else if(event.code === Key.Attack){
        const { posX, posY } = this.game.map.toServer(lib.getMousePos(event));

        this.ws.send({
          type: Event.Attack,
          posX: posX,
          posY: posY
        });
      }else if(event.code === Key.Move){
        const { posX, posY } = this.game.map.toServer(lib.getMousePos(event));

        this.ws.send({
          type: Event.TargetPosition,
          posX: posX,
          posY: posY
        });
      }else if(event.code === Key.Control){
        this.mouse.down(event);
      }else if(event.code === Key.Separate){
        this.ws.send({
          type: Event.SeparateUnit
        });
      }else if(event.code === Key.Merge){
        this.ws.send({
          type: Event.MergeUnit
        });
      }
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
    }else if(this.status === Status.Playing){
      if(event.code === Key.Control){
        this.mouse.up(event);

        this.ws.send({
          type: Event.ControlUnit,
          start: this.game.map.toServer(this.mouse.start),
          end: this.game.map.toServer(this.mouse.end)
        });
      }
    }
  }
}