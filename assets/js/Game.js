import Event from "./utils/Event";

export default class Game{
  constructor(render){
    this.render = render;

    this.reset();
  }

  event(data){
    if(data.type === Event.UnitPosition){

    }else if(data.type === Event.TeamUnitPosition){

    }else if(data.type === Event.EnemyUnitPosition){

    }else if(data.type === Event.BulletPosition){

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