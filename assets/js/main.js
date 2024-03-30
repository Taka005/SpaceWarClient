import Client from "./Client";

const ws = new WebSocket("ws://localhost:6000");

ws.addEventListener("open",()=>{
  console.log("接続しました");
});

ws.addEventListener("close",()=>{
  console.log("切断されました");
});