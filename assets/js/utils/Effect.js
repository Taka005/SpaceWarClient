import Bar from "../components/Bar"

export default class Effect{
  constructor(){
    this.effect = {
      attack: 0.33,
      defence: 0.33,
      speed: 0.33
    }

    this.bars = [
      new Bar(),
      new Bar(),
      new Bar()
    ]

    this.active = 0;
  }

  set(){

  }

  add(){

  }

  remove(){
    
  }
}