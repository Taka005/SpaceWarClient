export default class Effect{
  constructor(render){
    this.render = render;

    this.effect = {
      attack: 34,
      defence: 33,
      speed: 33
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

    this.message = this.render.message("barMessage")
      .setPos(400,600);

    this.active = 0;

    this.changeActive();
    this.renderMessage();
  }

  renderMessage(){
    this.message.setText(`攻撃:${this.effect.attack} 防御:${this.effect.defence} スピード:${this.effect.speed}`);
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
    Object.keys(this.effect).forEach((eff,i)=>{
      if(this.active === i){
        if(Object.values(this.effect).reduce((total,eff)=>total+eff,0) >= 100) return;

        this.effect[eff] += 1;

        this.bars[i].setValue(this.effect[eff]);
      }
    });

    this.renderMessage();
  }

  remove(){
    Object.keys(this.effect).forEach((eff,i)=>{
      if(this.active === i){
        if(this.effect[eff] <= 1) return;

        this.effect[eff] -= 1;

        this.bars[i].setValue(this.effect[eff]);
      }
    });

    this.renderMessage();
  }

  export(){
    return {
      attack: this.effect.attack/100,
      defence: this.effect.defence/100,
      speed: this.effect.speed/100
    }
  }
}