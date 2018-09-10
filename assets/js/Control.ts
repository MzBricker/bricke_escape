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

@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:
    @property(cc.Node)
    role:cc.Node    

    // onLoad () {}
    left:cc.Node; 
    middle:cc.Node; 
    right:cc.Node; 

    start () {
        this.left = this.node.getChildByName("left");
        this.middle = this.node.getChildByName("middle");
        this.right = this.node.getChildByName("right");
    }

    onLeftClick(){
        console.log("onLeftClick");
    }
    // update (dt) {}
}
