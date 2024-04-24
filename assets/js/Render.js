import RenderManager from "./RenderManager.js";
import Title from "./pages/Title.js";
import Readying from "./pages/Readying.js";
import Ready from "./pages/Ready.js";
import Play from "./pages/play.js";
import Help from "./components/Help.js";
import Message from "./components/Message.js";
import Bar from "./components/Bar.js";
import Unit from "./parts/Unit.js";
import Range from "./parts/Range.js";
import Bullet from "./parts/Bullet.js";

export default class Render extends RenderManager{
  constructor(canvas){
    super(canvas);

    this.add("help",new Help())
      .setPos(400,400)
      .setChange(false);

    this.add("error",new Message())
      .setPos(400,200)
      .setColor("red")
      .setChange(false);

    this.add("message",new Message())
      .setPos(400,300)
      .setChange(false);
  }

  /**
   * メッセージを表示
   * @param {String} name 追加するメッセージ名
   * @returns {Message} 追加したメッセージ
   */
  setMessage(name){
    return this.add(name,new Message())
      .setDisplay(true);
  }

  /**
   * タイトル画面を表示
   */
  setTitle(){
    this.clear();

    this.add("title",new Title())
      .setDisplay(true);

    this.add("titleText",new Message())
      .setPos(400,750)
      .setText("キーを押してスタート")
      .setFont("40pt Arial")
      .setDisplay(true);
  }

  /**
   * 準備画面を表示
   */
  setReadying(){
    this.clear();

    this.add("readying",new Readying())
      .setDisplay(true);
  }

  /**
   * 準備完了画面を表示
   */
  setReady(){
    this.clear();

    this.add("ready",new Ready())
      .setDisplay(true);
  }

  /**
   * ゲーム画面を表示
   */
  setPlay(){
    this.clear();

    this.add("play",new Play())
      .setDisplay(true);
  }

  /**
   * バーを表示
   * @param {String} name 設定する名前
   * @returns {Bar} 追加したばー
   */
  setBar(name){
    return this.add(name,new Bar())
      .setSize(500,50)
      .setMax(100)
      .setDisplay(true);
  }

  /**
   * ユニットを表示
   * @param {String} id ID
   * @param {Object} units ユニット
   * @param {String} color 色
   * @param {Number} range 索敵範囲
   */
  setUnits(id,units,color,range){
    this.removePart(id);
    this.removePart(`${id}Range`);

    units.forEach(unit=>{
      this.addPart(new Unit())
        .setName(id)
        .setPos(unit.posX,unit.posY)
        .setHp(unit.hp)
        .setSize(unit.size)
        .setColor(color)
        .setFocus(unit.isFocus);

      this.addPart(new Range())
        .setName(`${id}Range`)
        .setPos(unit.posX,unit.posY)
        .setSize(range);
    });
  }

  /**
   * 弾を表示
   * @param {Object} bullets 球
   */
  setBullets(bullets){
    this.removePart("bullet");

    bullets.forEach(bullet=>{
      this.addPart(new Bullet())
        .setName("bullet")
        .setPos(bullet.posX,bullet.posY)
        .setSize(bullet.size);
    });
  }
}