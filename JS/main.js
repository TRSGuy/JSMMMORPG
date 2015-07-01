var canvas, ctx, FPS = 60, width, height, mousePos, guy;

window.onload = function() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;
	guy = player.create(100, 100, 10);

	// TODO - Setup code here:



	canvas.addEventListener('mousemove', function (evt) {
		mousePos = getMousePos(canvas, evt);
	}, false);
	setInterval(update, 1000 / FPS);
}

function update() {
	guy.update();
}
function getMousePos(canv, evt) {
	var rect = canv.getBoundingClientRect();
    return {
    	x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };

}
