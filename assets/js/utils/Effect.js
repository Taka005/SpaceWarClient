import Bar from "../components/Bar"

export default class Effect{
  constructor(render){[]
    this.render = render;

    this.effect = {
      attack: 0.33,
      defence: 0.33,
      speed: 0.33
    }

    this.bars = [
      this.render.add("bar1",new Bar()),
      this.render.add("bar2",new Bar()),
      this.render.add("bar3",new Bar())
    ]

    this.active = 0;
  }

  set(){

  }

  add(){
    Object.values(this.effect).forEach((_,i,array)=>{
      if(this.active === i){
        array[i] += 0.01;
      }else{
        array[i] -= 0.01;
      }
    });
  }

  remove(){
    Object.values(this.effect).forEach((_,i,array)=>{
      if(this.active === i){
        array[i] -= 0.01;
      }else{
        array[i] += 0.01;
      }
    });
  }
}