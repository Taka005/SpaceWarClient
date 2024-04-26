import config from "./config.js";
import parse from "./utils/parse.js";
import Event from "./utils/Event.js";
import Status from "./utils/Status.js";

export default class WebSocketManager{
  constructor(game,client){
    this.connect();

    this.client = client;
    this.game = game;
    this.ready = false;

    setInterval(()=>{
      this.send({
        type: Event.HeartBeat
      });
    },3000);
  }

  connect(){
    this.ws = new WebSocket(config.ws);

    this.ws.addEventListener("open",()=>{
      console.log("WebSocket Open");
    });

    this.ws.addEventListener("close",()=>{
      console.log("WebSocket Close");

      this.ready = false;

      setTimeout(()=>{
        this.game.leave();

        this.connect();
      },3000);
    });

    this.ws.addEventListener("error",()=>{
      console.log("WebSocket Error");
    });

    this.ws.addEventListener("message",async(event)=>{
      const data = parse(event.data.toString());
      if(!data) return;

      if(data.type === Event.ConnectionReady){
        this.ready = true;

        this.game.connect(data.playerId,data.config);
      }else if(data.type === Event.SessionFind){
        this.game.join(data.sessionId);
      }else if(data.type === Event.GameReady){
        this.client.setStatus(Status.Ready);

        this.client.render.setReady();
      }else if(data.type === Event.GameStart){
        this.client.setStatus(Status.Playing);

        this.client.render.setPlay();
        this.client.game.start(data);
      }else if(data.type === Event.SessionEnd){
        this.game.leave();
      }else if(data.type === Event.Error){
        this.client.render.get("error")
          .setText(data.message)
          .setDisplay(true)
          .setTime(5000,false);
      }else if(data.type === Event.Message){
        this.client.render.get("message")
          .setText(data.message)
          .setDisplay(true)
          .setTime(5000,false);
      }else{
        if(this.game.sessionId){
          this.game.event(data);
        }
      }
    });
  }

  send(data){
    if(!this.ready) return;

    this.ws.send(JSON.stringify(data));
  }
}