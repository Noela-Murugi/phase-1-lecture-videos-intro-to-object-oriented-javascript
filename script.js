document.addEventListener("keydown", function (event) {
	if (event.keyCode === 37) {
		moveLeft();
	}
	if (event.keyCode === 39) {
		moveRight();
	}
});
