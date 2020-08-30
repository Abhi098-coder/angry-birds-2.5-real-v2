class constraint1{
    constructor(objectA, objectB){
        var options = { 
                        bodyA:objectA,
                        bodyB:objectB,
                        stiffness:0.04,
                        length:5
                        };
        this.qwerty = Matter.Constraint.create(options);
        World.add(world,this.qwerty);
    }


    display(){
        line(this.qwerty.bodyA.position.x,this.qwerty.bodyA.position.y,this.qwerty.bodyB.position.x,this.qwerty.bodyB.position.y);
    }
}