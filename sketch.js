const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygoning

function preload(){
    polygonimg=loadImage("polygon.png")
}


function setup(){
     var canvas=createCanvas(1500,700)
     engine=Engine.create()
     world=engine.world

     ground=new Ground(710,690,1580,20)
     stand1=new Ground(1115,450,310,20)
     stand2=new Ground(426,560,290,20)
     //level1stand1
     block=new Box(1120,440,30,40)
     block1=new Box(1110,440,30,40)
     block2=new Box(1100,440,30,40)
     block3=new Box(1080,440,30,40)
     block6=new Box(1090,440,30,40)
     block4=new Box(1160,440,30,40)
     block5=new Box(1180,440,30,40)

     //level2stand1
     block7=new Box(1120,430,30,40)
     block8=new Box(1110,430,30,40)
     block9=new Box(1100,430,30,40)
     block10=new Box(1160,430,30,40)
     block11=new Box(1090,430,30,40)

     //level3stand1
     block12=new Box(1120,420,30,40)
     block13=new Box(1110,420,30,40)
     block14=new Box(1100,420,30,40)

     //level4stand1
     block15=new Box(1110,410,30,40)

     //level1stand2
     block16=new Box(430,550,30,40)
     block17=new Box(420,550,30,40)
     block18=new Box(440,550,30,40)
     block19=new Box(410,550,30,40)
     block20=new Box(450,550,30,40)

     //level2stand2
     block21=new Box(430,540,30,40)
     block22=new Box(420,540,30,40)
     block23=new Box(440,540,30,40)

     //level3stand2
     block24=new Box(430,530,30,40)

     polygon=Bodies.circle(50,200,20)
     World.add(world,polygon)

     slingshot = new SlingShot(this.polygon,{x:100,y:200})
}

function draw(){
    background("pink")
    Engine.update(engine)

    ground.display()
    stand1.display()
    stand2.display()
    block.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block24.display()
    block5.display()
    block6.display()
    block23.display()
    block22.display()
    block21.display()
    block7.display()
    block20.display()
    block19.display()
    block8.display()
    block18.display()
    block9.display()
    block17.display()
    block15.display()
    block16.display()
    block12.display()
    block13.display()
    block14.display()
    block10.display()
    block11.display()
    slingshot.display()

    imageMode(CENTER)
    image(polygonimg,polygon.position.x,polygon.position.y,40,40)



}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon)
    }
}
