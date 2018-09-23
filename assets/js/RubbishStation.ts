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
export default class RubbishStation extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    enemyPool:cc.NodePool;
    // onLoad () {}
    onBeginContact (contact, selfCollider, otherCollider) {
        console.log('星星将被销毁123');
       this.enemyPool.put(otherCollider.node);
    }
ß
    init(starPool:cc.NodePool){
        this.enemyPool = starPool;
    }
    start () {

    }

    // update (dt) {}
}
