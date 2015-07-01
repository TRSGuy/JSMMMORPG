var player = {
	x: 0,
	y: 0,
	speed: 0,
	create: function(x , y, speed) {
		var obj = Object.create(this);
		obj.x = x;
		document.onkeydown = this.keyDown;
		obj.y = y;
		obj.speed = speed;
		return obj;
	},
	update: function() {
		
	},
	keyDown: function(event) {

		if (event.keyCode == 65) {
			console.log("herp!");
		}
	}
};
