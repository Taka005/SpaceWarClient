import Client from "./Client.js";

const canvas = document.getElementById("game");

const client = new Client(canvas);

canvas.addEventListener("keydown",(event)=>{
  event.preventDefault();

  client.keyDown(event);
});

canvas.addEventListener("keyup",(event)=>{
  event.preventDefault();

  client.keyUp(event);
});