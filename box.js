class Box {
  constructor(x, y, width, height){
    var options = {
      //isStatic: false
      restitution :0.4,
      friction :0.0,
  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  //added the visibility as a property which u haven't added
  this.Visiblity = 255;
  World.add(world, this.body);
}
display(){
  
  //we view the boxes only when the speed is less than 4 so conditional statement is to be given
  if (this.body.speed < 4){
    var pos =this.body.position;
    var angle = this.body.angle;
    rectMode(CENTER);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("white");
    rect(0,0, this.width, this.height);
    pop();
   }
  else if (this.body.speed > 4){
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      //removed the image as we are not adding any images
      //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
   }
   
  }
}