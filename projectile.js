function Projectile(x,y, velx, vely){
	this.pos = createVector(x, y);
	this.r = 6;
	this.vel = createVector(velx, vely);

	this.update = function() {
		this.pos.add(this.vel);
	}

	this.show = function() {
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
	}
}