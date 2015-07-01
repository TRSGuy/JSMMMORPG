var player = {
	x: 0,
	y: 0,
	speed: 0,

	},

var keysDown = {};

	addEventListener("keydown", function (e) {
		keysDown[e.keyCode] = true;
	}, false);

	addEventListener("keyup", function (e) {
		delete keysDown[e.keyCode];
	}, false);
	
		update: function() {
	if (38 in keysDown) { // Player holding up
		player.y -= player.speed;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += player.speed;
	}
	if (37 in keysDown) { // Player holding left
		player.x -= player.speed;
	}
	if (39 in keysDown) { // Player holding right
		player.x += player.speed;
	}
};
