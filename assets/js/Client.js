import WebSocketManager from "./WebsocketManager";
import Render from "./Render";

export default class Client{
  constructor(canvas){
    this.canvas = canvas;
    this.ws = new WebSocketManager();
    this.render = new Render(this.canvas);

    this.render.getPage("Title").setDisplay(true);
  }
}