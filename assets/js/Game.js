import Map from "./Map.js";
import Effect from "./utils/Effect.js";
import Event from "./utils/Event.js";
import Status from "./utils/Status.js";

export default class Game{
  constructor(client,render){
    this.client = client;
    this.render = render;

    this.reset();
  }

  connect(playerId,config){
    this.playerId = playerId;
    this.config = config;

    this.map = new Map(config.width,config.height);
  }

  join(sessionId){
    this.sessionId = sessionId;
    this.client.setStatus(Status.Readying);
    this.render.readying();
    this.effect = new Effect(this.render);
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
    this.effect = null;
    this.map = null;
    this.config = null;
    this.playerId = null;
    this.sessionId = null;
    this.units = [];
    this.teamUnits = [];
    this.enemyUnits = [];
    this.bullets = [];
  }
}