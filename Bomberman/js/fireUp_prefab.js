var Phaser = Phaser || {}

Phaser.fireUp_prefab = function(game,x,y){
    Phaser.Sprite.call(this,game,x,y,'Items');
    this.anchor.setTo(.5);
    this.frame=1;
    this.animations.add('changeFire',[1,25],5,true);
    this.animations.play('changeFire');
};

Phaser.fireUp_prefab.prototype = Object.create(Phaser.Sprite.prototype);
Phaser.fireUp_prefab.prototype.constructor = Phaser.fireUp_prefab;


