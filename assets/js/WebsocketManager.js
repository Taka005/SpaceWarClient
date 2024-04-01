import config from "./config.js";
import parse from "./utils/parse.js";
import Event from "./utils/Event.js";

export default class WebSocketManager{
  constructor(client){
    this.connect();

    this.client = client;
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
        this.connect();
      },1000);
    });

    this.ws.addEventListener("error",()=>{
      console.log("WebSocket Error");
    });

    this.ws.addEventListener("message",async(event)=>{
      const data = parse(event.data.toString());
      if(!data) return;

      console.log(`WebSocket Data: ${JSON.stringify(data)}`);

      if(data.event === Event.ConnectionReady){
        this.ready = true;

        this.client.playerId = data.playerId;
      }
    });
  }

  send(data){
    if(!this.ready) return;

    this.ws.send(JSON.stringify(data));
  }
}