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
    leftEvent = function (event) {
        console.log('Left down');
        this.onLeftClick();
      };
      middleEvent = function (event) {
        console.log('Middle down');
        this.onMiddleClick();
      };
      rightEvent = function (event) {
        console.log('right down');
        this.onRightClick();
      };
    start () {
        this.roleScript = this.role.getComponent("Role");
        this.left = this.node.getChildByName("left");
        this.middle = this.node.getChildByName("middle");
        this.right = this.node.getChildByName("right");
    


        this.setMouseEvent();
        this.setTouchScreenEvent();
        this.setKeyBoardEvent();

    }

    setMouseEvent(){
        this.left.on(cc.Node.EventType.MOUSE_DOWN, this.leftEvent, this);
        this.middle.on(cc.Node.EventType.MOUSE_DOWN, this.middleEvent, this);
        this.right.on(cc.Node.EventType.MOUSE_DOWN, this.rightEvent, this);
    }

    setTouchScreenEvent(){
        this.left.on(cc.Node.EventType.TOUCH_START, this.leftEvent, this);
        this.middle.on(cc.Node.EventType.TOUCH_START, this.middleEvent, this);
        this.right.on(cc.Node.EventType.TOUCH_START, this.rightEvent, this);
    }

    setKeyBoardEvent(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    
    }

    onKeyDown (event) {
        switch(event.keyCode) {
            case cc.KEY.left:
                console.log('left key down');
                this.onLeftClick();
                break;
            case cc.KEY.space:
                console.log('space key down');
                this.onMiddleClick();
                break;
            case cc.KEY.right:
                console.log('right key down')
                this.onRightClick();
                break;
        }
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
