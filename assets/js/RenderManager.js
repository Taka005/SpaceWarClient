export default class RenderManager{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.elements = {};
    this.parts = [];

    this.rotate = 0;
  }

  update(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

    Object.values(this.elements)
      .filter(element=>element.type === "page")
      .sort((p1,p2)=>p1.rank - p2.rank)
      .forEach(page=>{
        page.draw(this.ctx);
      });

    Object.values(this.elements)
      .filter(element=>element.type === "component")
      .sort((p1,p2)=>p1.rank - p2.rank)
      .forEach(component=>{
        component.draw(this.ctx);
      });

    this.ctx.save();
    this.ctx.translate(this.canvas.width/2,this.canvas.height/2);
    this.ctx.rotate(this.rotate*(Math.PI/180));

    this.parts
      .sort((p1,p2)=>p1.rank - p2.rank)
      .forEach(part=>{
        part.draw(this.ctx);
      });

    this.ctx.restore();
  }

  /**
   * 要素を取得
   * @param {String} name 対象の要素名
   * @returns {Object} 取得した要素
   */
  get(name){
    return this.elements[name];
  }

  /**
   * 要素を追加
   * @param {String} name 追加する要素名
   * @param {Object} element 追加する要素
   * @returns {Object} 追加した要素
   */
  add(name,element){
    this.elements[name] = element;

    return element;
  }

  /**
   * 要素を削除
   * @param {String} name 対象の要素名
   */
  remove(name){
    if(!this.get(name)) throw new Error("存在しない要素です");

    delete this.elements[name];
  }

  /**
   * パーツを追加
   * @param {Object} part 追加するパーツ
   * @returns {Object} 追加したパーツ
   */
  addPart(part){
    this.parts.push(part);

    return part;
  }

  /**
   * パーツを削除
   * @param {String} name 対象のパーツ名
   */
  removePart(name){
    this.parts = this.parts.filter(part=>part.name !== name);
  }

  /**
   * 初期化
   */
  clear(){
    Object.keys(this.elements).forEach(name=>{
      if(!this.get(name).isChange) return;

      this.remove(name);
    });
  }
}