function Player(x,y){
	this.pos = createVector(x, y);
	this.r = 15;
	this.vel = createVector(0, 0);

	this.update = function() {
		var newvel = createVector(mouseX - width / 2, mouseY - height / 2);
		newvel.div(50);
		//newvel.setMag(3);
		newvel.limit(3);
		this.vel.lerp(newvel, 0.2);
		this.pos.add(this.vel);
	}

	this.show = function() {
		fill(200);
		ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
	}

	this.constrain = function() {
		player.pos.x = constrain(player.pos.x, 0, width);
		player.pos.y = constrain(player.pos.y, 0, height);
	}

	this.fire = function(){
		var newvel = createVector(mouseX - width / 2, mouseY - height / 2);
		newvel.div(10);

		var project = new Projectile(this.pos.x,this.pos.y,newvel.x,newvel.y);
		return project;
	}

	this.sonar = function(){
		var sonar = new Sonar(this.pos.x, this.pos.y);
		return sonar;
	}
}