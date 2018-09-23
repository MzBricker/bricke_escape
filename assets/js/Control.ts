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


    // LIFE-CYCLE CALLBACKS:
    @property(cc.Node)
    role:cc.Node    

    // onLoad () {}
    left:cc.Node; 
    middle:cc.Node; 
    right:cc.Node; 
    roleScript:cc.Component;
    start () {
        this.roleScript = this.role.getComponent("Role");
        this.left = this.node.getChildByName("left");
        this.middle = this.node.getChildByName("middle");
        this.right = this.node.getChildByName("right");
        this.left.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            console.log('Left Mouse down');
            this.onLeftClick();
          }, this);
        this.middle.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            console.log('Middle Mouse down');
            this.onMiddleClick();
          }, this);
        this.right.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            console.log('right Mouse down');
            this.onRightClick();
        }, this);
    }

    onLeftClick(){
        console.log("onLeftClick");
        this.roleScript.moveLeft();
    }
    onMiddleClick(){
        console.log("onMiddleClick");
    }
    onRightClick(){
        console.log("onRightClick");
        this.roleScript.moveRight();
    }


    // update (dt) {}
}
