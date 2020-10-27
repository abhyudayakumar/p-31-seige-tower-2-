class Divisions {
    constructor(x,y,w,h){

        var options = {
            isstatic:True
        }

        this.body = bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    display() {
        varposition = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);
    }
};