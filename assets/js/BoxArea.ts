// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
const {ccclass, property} = cc._decorator;
import {GAME_GLOBAL_PARM} from "./ConstValue";
@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:
    @property(cc.Prefab)
    platePrefab:cc.Prefab;

    @property(cc.Node)
    rubbishStation:cc.Node;

    @property(cc.Label)
    timeLabel:cc.Label;
    // onLoad () {}

    @property
    brickTimeSpace :number = 0;

    enemyPool:cc.NodePool;


    onLoad(){
        this.initParam();
        //开启物理系统
                cc.director.getPhysicsManager().enabled = true;
                //打开物理系统调试信息
                // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
                // cc.PhysicsManager.DrawBits.e_pairBit |
                // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
                // cc.PhysicsManager.DrawBits.e_jointBit |
                // cc.PhysicsManager.DrawBits.e_shapeBit
        //获取碰撞系统管理器
                var manager = cc.director.getCollisionManager();
                manager.enabled = true;
                manager.enabledDebugDraw = false;
                manager.enabledDrawBoundingBox = false;
        this.enemyPool = new cc.NodePool();
        let initCount = 10;
        for (let i = 0; i < initCount; ++i) {
            let enemy = cc.instantiate(this.platePrefab); // 创建节点
            this.enemyPool.put(enemy); // 通过 putInPool 接口放入对象池
        }
        console.log('Box Area onLoad');
        this.rubbishStation.getComponent("RubbishStation").init(this.enemyPool);
    }

    initParam () {
        GAME_GLOBAL_PARM.cellWidth = this.node.width / 3 ;
        GAME_GLOBAL_PARM.cellHeight = this.node.height; 
        GAME_GLOBAL_PARM.left = GAME_GLOBAL_PARM.cellWidth / 2  ;
        GAME_GLOBAL_PARM.middle = 3 * GAME_GLOBAL_PARM.cellWidth / 2;
        GAME_GLOBAL_PARM.right = 5 * GAME_GLOBAL_PARM.cellWidth / 2; 
    }

    start () {
        this.createBox();
        var time = 0.0;
        this.schedule(function() {
            time = time + 0.01;
            this.timeLabel.string = time.toFixed(2) +"s"; 
        },0.01)
    }

    createBox(){
        var actions = [];
        this.schedule(function() {
            let enemy = null;
            if (this.enemyPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
                enemy = this.enemyPool.get();
            } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
                enemy = cc.instantiate(this.platePrefab);
            }
                enemy.parent = this.node; // 将生成的敌人加入节点树
                enemy.setPosition(this.getRandomPosition(),this.node.height);  

                // let finished  = cc.callFunc(function(target, enemy) {
                //     this.enemyPool.put(enemy);
                // }, this, enemy);

                // var action = cc.moveTo(1, cc.v2(enemy.x,0));
                // var newAction = cc.speed(action, 1);
                // var myAction = cc.sequence(action, finished);
                // enemy.runAction(myAction);
            },this.brickTimeSpace);
    
    }

    getRandomPosition() {
        let position = [GAME_GLOBAL_PARM.left, GAME_GLOBAL_PARM.middle, GAME_GLOBAL_PARM.right];
        let randomPosition = Math.floor(Math.random() * 3); 
        return position[randomPosition];
    }
    // update (dt) {}
}

