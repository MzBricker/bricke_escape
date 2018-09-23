// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import {GAME_GLOBAL_PARM} from "./ConstValue";

@ccclass
export default class NewClass extends cc.Component {
    
    @property
    moveTime :number= 0;
    @property
    currentPostion:number = 1

    start () {
    }

    moveLeft(){
        console.log("moveLeft");
        if(this.currentPostion <= 0){
            return;
        }
            
        this.currentPostion-=1;
        let actionleft = cc.moveBy(this.moveTime, cc.v2(- GAME_GLOBAL_PARM.cellWidth, 0));
        this.node.runAction(actionleft);
    }
    stealth(){
        console.log("stealth");
    }
    moveRight(){
        console.log("moveRight");
        if(this.currentPostion >=2){
            return;
        }
            
        this.currentPostion+=1;
        let actionRight = cc.moveBy(this.moveTime, cc.v2(+GAME_GLOBAL_PARM.cellWidth, 0));
        this.node.runAction(actionRight);
    }

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact (contact, selfCollider, otherCollider) {
        console.log('发生了碰撞');
        alert('这么快就挂了，技术有点水');
        cc.director.loadScene("Game");
    }

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact(contact, selfCollider, otherCollider) {
    }

    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve(contact, selfCollider, otherCollider) {
    }

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve(contact, selfCollider, otherCollider) {
    }

    /**
 * 当碰撞产生的时候调用
 * @param  {Collider} other 产生碰撞的另一个碰撞组件
 * @param  {Collider} self  产生碰撞的自身的碰撞组件
 */
onCollisionEnter(other, self) {
    console.log('on collision enter');

    // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
    var world = self.world;

    // 碰撞组件的 aabb 碰撞框
    var aabb = world.aabb;

    // 节点碰撞前上一帧 aabb 碰撞框的位置
    var preAabb = world.preAabb;

    // 碰撞框的世界矩阵
    var t = world.transform;

    // 以下属性为圆形碰撞组件特有属性
    var r = world.radius;
    var p = world.position;

    // 以下属性为 矩形 和 多边形 碰撞组件特有属性
    var ps = world.points;
}
    // update (dt) {}
}
