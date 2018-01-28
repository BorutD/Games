class TicTacToeGame {
	private canvas: any;
	private ctx: CanvasRenderingContext2D;

	private game: Game = {
		width: 0,
		height: 0
	};

	constructor() {
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');

		this.game.width = (document as any).getElementById('canvas').width;
		this.game.height = (document as any).getElementById('canvas').height;

		this.ctx.fillStyle = "#D6E5FF";
		this.ctx.fillRect(0, 0, this.game.width, this.game.height);

		this.drawGame();
	}

	private drawGame() {
		var gameLayout = [[400, 400], [20, 400]];
	}

	private drawLine() {
		var line = this.canvas.getContext('2d');
		line.beginPath();
		line.moveTo(400, 20);
		line.lineTo(400, 400);
		line.lineWidth = 10;
		line.lineCap = 'round';
		line.stroke();
	}
}

window.onload = () => {
	var game = new TicTacToeGame();
}

interface Game {
	width: number,
	height: number
}