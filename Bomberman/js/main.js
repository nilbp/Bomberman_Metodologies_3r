/*global Phaser*/
var Phaser = Phaser || {}
var GameState = 
{
    init: function()
    {

       this.scale.scaleMode= Phaser.ScaleManager.SHOW_ALL;
        this.scale.setGameSize(270,208);
        
       this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        
    },
    
    preload: function()
    {
         this.load.spritesheet('Items', 'assets/img/Items.png',16,16); 
        this.load.tilemap('level1','assets/tilemaps/level1.json',null,Phaser.Tilemap.TILED_JSON);
        this.load.image('walls','assets/img/props22.png');
        this.load.spritesheet('Bomberman', 'assets/img/MovBasico.png',16 ,25);
      
       // this.load.spritesheet('Bomberman', 'assets/img/MovVertical.png',16,25);
       
        
    },
    create:function()
    {
        this.speed=new Phaser.speedUp_prefab(this.game,140,150);
        this.game.add.existing(this.speed);
  
        this.fire=new Phaser.fireUp_prefab(this.game,170,150);
        this.game.add.existing(this.fire);
 
        this.bombs=new Phaser.bombUp_prefab(this.game,200,150);
        this.game.add.existing(this.bombs);
        
        this.bg = this.game.add.tileSprite(0,0,270,208,'bg');
        this.map=this.game.add.tilemap('level1');
        this.map.addTilesetImage('walls');
        this.map.addTilesetImage('moss');
        this.walls=this.map.createLayer('walls_layer');
        this.map.createLayer('level_layer');
        this.map.setCollisionBetween(1,70,true,'walls_layer');
    
        this.Bomberman = this.game.add.sprite(100,150, 'Bomberman');
        this.Bomberman.anchor.setTo(0.5,0.5);
        this.Bomberman.animations.add('Up', [0,1,2], 6, true);
        this.Bomberman.animations.add('Right', [3,4,5], 6, true);
        this.Bomberman.animations.add('Down', [7,8,6], 6, true);
        this.Bomberman.animations.add('Left', [9,10,11], 6, true);
        this.Bomberman.animations.add('Static', [6],6,true);
        
        
        this.game.physics.arcade.enable(this.Bomberman);
        
        this.cursors= this.game.input.keyboard.createCursorKeys();
        
    
        //this.Bomberman.animations.play('Left');
        
        //this.Bomberman.animations.play('Down');
    
    },
    update:function()
    {   
   //this.game.physics.arcade.collide(this.Bomberman,this.moss_bottom);
        
       if(this.cursors.left.isDown){
            this.Bomberman.body.velocity.y =0;
            this.Bomberman.body.velocity.x=-90;
            this.Bomberman.animations.play('Left');  // Cuando pulsemos el boton que reproduzca la animación
    } 
    else
        if(this.cursors.right.isDown) 
        {
            this.Bomberman.body.velocity.y =0;
            this.Bomberman.body.velocity.x=90;
            this.Bomberman.animations.play('Right');
            
        }
    else
        if(this.cursors.up.isDown)
        {
            this.Bomberman.body.velocity.x =0;
            this.Bomberman.body.velocity.y = -90;
            this.Bomberman.animations.play('Up');
                
        }
    else
        if(this.cursors.down.isDown)
        {
            this.Bomberman.body.velocity.x =0;
            this.Bomberman.body.velocity.y =90;
            this.Bomberman.animations.play('Down');                
        }
    else{
        
        this.Bomberman.body.velocity.y =0;
        this.Bomberman.body.velocity.x =0;
        this.Bomberman.animations.play('Static');
    }
        this.game.physics.arcade.collide(this.Bomberman,this.walls);
       
        /*if(this.Bomberman.body.x<this.bombs.x+16 &&
          this.Bomberman.body>this.bombs.x &&
          this.Bomberman.body.y<this.bombs.y+16 &&
          this.Bomberman.body.y>this.bombs)
          {
            this.bombs.destroy();
        }*/
    },
};

var game = new Phaser.Game(640, 360, Phaser.Auto);
game.state.add('GameState', GameState);
game.state.start('GameState');