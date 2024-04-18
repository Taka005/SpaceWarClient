import Event from "./utils/Event.js";
import Status from "./utils/Status.js";

export default class Game{
  constructor(client,render){
    this.client = client;
    this.render = render;

    this.reset();
  }

  join(sessionId){
    this.sessionId = sessionId;
    this.client.setStatus(Status.Readying);
  }

  event(data){
    if(data.type === Event.UnitPosition){
      this.units = data.units;
    }else if(data.type === Event.TeamUnitPosition){
      this.teamUnits = data.units;
    }else if(data.type === Event.EnemyUnitPosition){
      this.enemyUnits = data.units;
    }else if(data.type === Event.BulletPosition){
      this.bullets = data.bullets;
    }
  }

  reset(){
    this.playerId = null;
    this.sessionId = null;
    this.units = [];
    this.teamUnits = [];
    this.enemyUnits = [];
    this.bullets = [];
  }
}