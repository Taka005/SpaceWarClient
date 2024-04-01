import WebSocketManager from "./WebsocketManager.js";
import Render from "./Render.js";
import Event from "./utils/Event.js";
import Status from "./utils/Status.js";

export default class Client{
  constructor(canvas){
    this.canvas = canvas;
    this.ws = new WebSocketManager(this);
    this.render = new Render(this.canvas);

    this.render.getPage("Title").setDisplay(true);

    this.setStatus("TitlePage");
  }

  setStatus(type){
    if(!Status[type]) throw new Error("無効なステータスです");

    this.status = Status[type];
  }

  key(event){
    if(this.status === Status.TitlePage){
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
    }
  }
}