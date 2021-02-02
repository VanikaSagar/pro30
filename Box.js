class Box{
    constructor(x,y,width,height){
        var options ={
            'restitution':0.8,
            'friction':3
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.x=x
        this.y=y
        this.Visibility=255
        World.add(world,this.body)

    }
    display(){
        console.log(this.body.speed)
       

        if(this.body.speed<3){
            var pos=this.body.position
            push ()
            translate (pos.x,pos.y)
            rectMode(CENTER)
            fill ("yellow")
            rect(0,0,this.width,this.height)
            pop ()

        }
        else{
            World.remove(world,this.body)
            push ()
            this.Visibility=this.Visibility-5
            tint (255,this.Visibility)
            rect (0,0,this.width,this.height)
            pop ()
        }
    }
}