var player;
var projectiles = [];
var sonar = undefined;

function setup(){
	createCanvas(700, 700);
	background(0);

	player = new Player(width/2, height/2);
}

function draw(){
	background(0);

	fill(200);
	noStroke();
	textSize(16);
	text("Hit S to fire sonar", 10, 30);
	text("Hit Space to fire", 10, 40);

	for(var i = projectiles.length -1; i >= 0 ; i--){
		projectiles[i].show();
		projectiles[i].update();

		if(projectiles[i].pos.x > width || projectiles[i].pos.x < 0 ||
			projectiles[i].pos.y > height || projectiles[i].pos.y < 0){
			projectiles.splice(i,1);
		}
	}

	player.show();
	player.update();

	player.constrain();

	if(sonar){
		sonar.show();
		sonar.update();

		/**
			Remove sonar when bigger than area
		*/
	}
}

function keyPressed() {
	// Space for shoot
	if (keyCode === 32) {
		projectiles.push(player.fire());
		console.log("fire");
	}

	// S for fire sonar
	if(keyCode === 83){
		sonar = player.sonar();
		console.log("sonar fired");
	}
} 