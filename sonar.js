function Sonar(x,y){
	this.pos = createVector(x, y);
	this.r = 6;	

	this.update = function() {
		this.r = this.r + 10;
	}

	this.show = function() {
		noFill();	
		stroke('red');
		strokeWeight(1);
		ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
	}
}