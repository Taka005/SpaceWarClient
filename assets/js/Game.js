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

  start({ posX, posY, teamId }){
    if(!this.map) return;

    this.teamId = teamId;
    this.map.posX = posX;
    this.map.posY = posY;
  }

  connect(playerId,config){
    this.playerId = playerId;
    this.config = config;

    this.map = new Map(config.width,config.height);
  }

  join(sessionId){
    this.sessionId = sessionId;
    this.client.setStatus(Status.Readying);
    this.render.setReadying();
    this.effect = new Effect(this.render);
  }

  leave(){
    if(this.client.status === Status.Waiting) return;

    this.reset();
    this.client.setStatus(Status.Waiting);
    this.render.setTitle();
  }

  event(data){
    if(data.type === Event.UnitPosition){
      data.units.forEach(unit=>{
        const { posX, posY } = this.map.toClientPos(unit.posX,unit.posY);

        unit.posX = posX;
        unit.posY = posY;
      });

      this.render.setUnit("unit",data.units,"blue",config.unit.searchRange);
    }else if(data.type === Event.TeamUnitPosition){
      data.units.forEach(unit=>{
        const { posX, posY } = this.map.toClientPos(unit.posX,unit.posY);

        unit.posX = posX;
        unit.posY = posY;
      });

      this.render.setUnit("teamUnit",data.units,"green",config.unit.searchRange);
    }else if(data.type === Event.EnemyUnitPosition){
      data.units.forEach(unit=>{
        const { posX, posY } = this.map.toClientPos(unit.posX,unit.posY);

        unit.posX = posX;
        unit.posY = posY;
      });

      this.render.setUnit("enemyUnit",data.units,"red",config.unit.searchRange);
    }else if(data.type === Event.BulletPosition){
      data.bullets.forEach(bullet=>{
        const { posX, posY } = this.map.toClientPos(bullet.posX,bullet.posY);

        bullet.posX = posX;
        bullet.posY = posY;
      });

      this.render.setUnit(data.bullets);
    }
  }

  reset(){
    this.effect = null;
    this.map = null;
    this.config = null;
    this.playerId = null;
    this.sessionId = null;
    this.teamId = null;
  }
}