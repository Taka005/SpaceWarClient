export default class Effect{
  constructor(render){
    this.render = render;

    this.effect = {
      attack: 0.34,
      defence: 0.33,
      speed: 0.33
    }

    this.bars = [
      this.render.bar("bar1")
        .setPos(150,300)
        .setValue(this.effect.attack),
      this.render.bar("bar2")
        .setPos(150,400)
        .setValue(this.effect.defence),
      this.render.bar("bar3")
        .setPos(150,500)
        .setValue(this.effect.speed)
    ]

    this.active = 0;

    this.changeActive();
  }

  changeActive(){
    this.bars.forEach((bar,i)=>{
      if(this.active === i){
        bar.setActive(true);
      }else{
        bar.setActive(false);
      }
    });
  }

  addIndex(){
    if(this.active === 2){
      this.active = 0;
    }else{
      this.active++
    }

    this.changeActive();
  }

  removeIndex(){
    if(this.active === 0){
      this.active = 2;
    }else{
      this.active--
    }

    this.changeActive();
  }

  add(){
    Object.values(this.effect).forEach((_,i,array)=>{
      if(this.active === i){
        if(Object.values(this.effect).reduce(total,eff=>total+eff,0) >= 1) return;

        array[i] += 0.01;

        this.bars[i].setValue(array[i]);
      }
    });
  }

  remove(){
    Object.values(this.effect).forEach((_,i,array)=>{
      if(this.active === i){
        array[i] -= 0.01;

        this.bars[i].setValue(array[i]);
      }
    });
  }

  export(){
    return this.effect;
  }
}