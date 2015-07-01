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
	if (38 || 87 in keysDown) { // Player holding up
		player.y -= player.speed;
	}
};
