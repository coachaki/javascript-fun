var gameBoard = '----------';
console.log(gameBoard)

var gameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 480
		this.canvas.height = 480
		this.context = this.canvas.getContext("2d")
		document.body.insertBefore(this.canvas, document.body.childNodes[0])
		this.frameNo = 0
	}
}