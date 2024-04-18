export default class RenderManager{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.elements = {};
  }

  update(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

    Object.values(this.elements)
      .filter(element=>element.type === "page")
      .forEach(page=>{
        page.draw(this.ctx);
      });

    Object.values(this.elements)
      .filter(element=>element.type === "component")
      .forEach(component=>{
        component.draw(this.ctx);
      });
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
   * 初期化
   */
  clear(){
    Object.keys(this.elements).forEach(name=>{
      if(this.get(name).hasOwnProperty("NoChange")) return;

      this.remove(name);
    });
  }
}