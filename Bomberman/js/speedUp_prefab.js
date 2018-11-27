var Phaser = Phaser || {}

Phaser.speedUp_prefab = function(game,x,y){
    Phaser.Sprite.call(this,game,x,y,'Items');
    this.anchor.setTo(.5);
    this.frame=9;
    this.animations.add('changeSpeed',[9,33],5,true);
    this.animations.play('changeSpeed');
};

Phaser.speedUp_prefab.prototype = Object.create(Phaser.Sprite.prototype);
Phaser.speedUp_prefab.prototype.constructor = Phaser.speedUp_prefab;
