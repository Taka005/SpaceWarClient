import Client from "./Client.js";

const canvas = document.getElementById("game");

const client = new Client(canvas);

document.addEventListener("keydown",(event)=>{
  event.preventDefault();

  client.keyDown(event);
});

document.addEventListener("keyUp",(event)=>{
  event.preventDefault();

  client.keyUp(event);
});