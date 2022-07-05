class Game {
  constructor() {
    
  }



  start() {
    // form = new Form();
    // form.display();
    // player = new Player();
    // playerCount = player.getCount()
    blocos = new Group()


    var blocosPositions = [
      { x:350, y:700,w:700,h:50,image: blocoImage1},
      { x:1400, y:700,w:400,h:50,image: blocoImage1},
      { x:750, y:600,w:100,h:50,image: blocoImage1},
      { x:920, y:480,w:200,h:50,image: blocoImage1},
      { x:680, y:330,w:100,h:50,image: blocoImage1},
      { x:420, y:280,w:100,h:50,image: blocoImage1},
      { x:120, y:240,w:300,h:50,image: blocoImage1},
      { x:0, y:120,w:200,h:50,image: blocoImage1},
      { x:290, y:77,w:200,h:50,image: blocoImage1},
    ];

    this.addSprite(blocos,blocosPositions.length,blocoImage1,1,blocosPositions)

    romeu = createSprite(400,650)
    romeu.shapeColor = "blue"
    romeu.addImage(romeuImg)
    romeu.scale = 2

    racao = createSprite(120,185)
    racao.addImage(racaoImg)
    racao.scale = 0.8

  }
  addSprite(spriteGroup,numberOfSprites,spriteImage,spriteScale,positions = []){
    for (let i = 0; i < numberOfSprites; i++) {
      var x,y,w,h
      if (positions.length > 0) {
        x = positions [i].x
        y = positions [i].y
        w = positions [i].w
        h = positions [i].h

        spriteImage =  positions[i].image

      }
      
      var sprite = createSprite(x,y,w,h)
     // sprite.addImage(spriteImage)
      //sprite.scale = spriteScale
      spriteGroup.add(sprite)
      sprite.shapeColor = "blue"
      
    }
    
  }

  romeuMove(){
    romeu.collide(blocos)
    if (keyDown("right")) {
      romeu.position.x += 5
    }
    if (keyDown("left")) {
      romeu.position.x -= 5

    }
    if (keyDown("up")) {
      romeu.velocityY = -10
    }
    romeu.velocityY +=0.8
    
  }
  play(){
    this.romeuMove()
    
    fill("black")
    text("X: "+mouseX+" / Y: "+mouseY,mouseX,mouseY)
    
    drawSprites()
  }
  
  
  
}
