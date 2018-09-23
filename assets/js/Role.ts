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
    moveTime :Number= 0;

    start () {
    }

    moveLeft(){
        console.log("moveLeft");
        let actionleft = cc.moveBy(this.moveTime, cc.v2(- GAME_GLOBAL_PARM.cellWidth, 0));
        this.node.runAction(actionleft);
    }
    stealth(){
        console.log("stealth");
    }
    moveRight(){
        console.log("moveRight");
        let actionRight = cc.moveBy(this.moveTime, cc.v2(+GAME_GLOBAL_PARM.cellWidth, 0));
        this.node.runAction(actionRight);
    }


    // update (dt) {}
}
