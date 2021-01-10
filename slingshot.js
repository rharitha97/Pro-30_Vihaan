class Slingshot{
	constructor(bodyA,pointB){		
		var options={ 
			bodyA:bodyA,			 
			pointB:pointB, 
			//increased the stiffness just to view
			stiffness:0.04, 
			length:1
        }
        
        this.slingshot=Constraint.create(options);
        this.bodyA=bodyA;
		this.pointB=pointB;
		World.add(world,this.slingshot);
	}

	attach(body) {
		this.slingshot.bodyA=body;
	}

	fly() {
		this.slingshot.bodyA=null;
	}

	display() {
		if(this.slingshot.bodyA) {
			var pointA=this.slingshot.bodyA.position;
			var pointB=this.slingshot.pointB;
			strokeWeight(4);
			stroke("white");
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}