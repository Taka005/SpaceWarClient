import Event from "./utils/Event.js";

export default class Game{
  constructor(render){
    this.render = render;

    this.reset();
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