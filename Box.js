class Box {
  constructor(x,y) {
  var options = {
      isStatic:true
  }
  this.width=200;
  this.height=200;
  this.thickness=20;
  this.image = loadImage("dustbin.png");
  this.rect1=Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
  this.rect2 = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options);
  this.rect3 = Bodies.rectangle(x,y,this.width,this.thickness,options);
  
  World.add(world,this.rect3);
  World.add(world,this.rect2);
  World.add(world,this.rect1);
}
display(){
  var pos3=this.rect3.position;
  var pos2 = this.rect2.position;
  var pos1 = this.rect1.position;
  
  push();
  translate(pos1.x,pos1.y);
  rectMode(CENTER);
  fill(255);
  rotate(this.angle);
  pop()

  push()
  translate(pos2.x,pos2.y);
  rectMode(CENTER);
  fill(255);
  pop()

  push()
  translate(pos3.x,pos3.y+10)
  rectMode(CENTER)
  fill(255);
  imageMode(CENTER);
  image(this.image,0,-this.height/2,this.width,this.height);
  pop();
}
}