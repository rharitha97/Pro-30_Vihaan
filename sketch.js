const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;



function preload() {
    polygonImage = loadImage("polygon_2.0.png");
}

function setup(){
    createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(500, 550, 250, 20);
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    slingshotObject = new Slingshot(this.polygon, {x:250, y:300});

    //fourth row
    box1 = new Box(410, 520, 30, 40);
    box2 = new Box(440, 520, 30, 40);
    box3 = new Box(470, 520, 30, 40);
    box4 = new Box(500, 520, 30, 40);
    box5 = new Box(530, 520, 30, 40);
    box6 = new Box(560, 520, 30, 40);
    box7 = new Box(590, 520, 30, 40);

    //third row

    box8 = new Box(440, 480, 30, 40);
    box9 = new Box(470, 480, 30, 40);
    box10 = new Box(500, 480, 30, 40);
    box11 = new Box(530, 480, 30, 40);
    box12 = new Box(560, 480, 30, 40);

    //second row
    box13 = new Box(470, 440, 30, 40);
    box14 = new Box(500, 440, 30, 40);
    box15 = new Box(530, 440, 30, 40);

    //first row
    box16 = new Box(500, 400, 30, 40);

    Engine.run(engine);
}


function draw(){
    background(0);
    stand1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
   
    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y)
 
    slingshotObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshotObject.fly();
}

function keyPressed(){
    //removed the condition 2 as it isn't getting satisfied
    if(keyCode === 32){
        polygon.trajectory = [];
        Matter.Body.setPosition(this.polygon, {x:200, y:50});
        slingshotObject.attach(this.polygon);
    }
}