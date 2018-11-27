var Phaser = Phaser || {}

Phaser.bombUp_prefab = function(game,x,y){
    Phaser.Sprite.call(this,game,x,y,'Items');
    this.anchor.setTo(.5);
    this.frame=0;
    this.animations.add('changeBomb',[0,24],5,true);
    this.animations.play('changeBomb');
};

Phaser.bombUp_prefab.prototype = Object.create(Phaser.Sprite.prototype);
Phaser.bombUp_prefab.prototype.constructor = Phaser.bombUp_prefab;

