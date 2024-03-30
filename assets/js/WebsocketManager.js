import config from "./config";
import parse from "./utils/parse";
import Event from "./utils/Event";

export default class WebSocketManager{
  constructor(){
    this.connect();

    setInterval(()=>{
      this.send({
        type: Event.HeartBeat
      });
    },3000);
  }

  connect(){
    this.ws = new WebSocket(config.url);

    this.ws.addEventListener("open",()=>{
      console.log("WebSocket Open");
    });

    this.ws.addEventListener("close",()=>{
      console.log("WebSocket Close");

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

    });
  }

  send(data){
    if(this.ws.readyState !== 1) return;

    this.ws.send(JSON.stringify(data));
  }
}