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

		// this.drawGame(this.game.width / 2, this.game.height / 2, 200, 200, { x: 0.5, y: 0.5 });
		// this.drawGameLayout();
		this.drawGameLayout2(300, 100, 400);
	}

	private drawGameLayout2(x: number, y: number, width: number, anchor?: Anchor) {
		var square = this.canvas.getContext("2d");
		square.fillStyle = "#FF0000";
		square.fillRect(x, y, width, width);

		this.drawLine(width * (2 / 3) + x, y, width * (2 / 3) + x, width + y);
		this.drawLine(width * (1 / 3) + x, y, width * (1 / 3) + x, width + y);

		this.drawLine(x, width * (1 / 3) + y, width + x, width * (1 / 3) + y);
		this.drawLine(x, width * (2 / 3) + y, width + x, width * (2 / 3) + y);
	}

	private drawGame(x: number, y: number, width: number, height: number, anchor: Anchor) {
		var square = this.canvas.getContext("2d");
		square.fillStyle = "#FF0000";
		var x = x - (width * anchor.x);
		var y = y - (height * anchor.y);
		square.fillRect(x, y, width, height);
	}

	private drawGameLayout() {
		this.drawLine(150, 20, 150, 420);
		this.drawLine(280, 20, 280, 420);

		this.drawLine(20, 150, 420, 150);
		this.drawLine(20, 280, 420, 280);


		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				let x = 24 + (j * 130);
				let y = 24 + (i * 130);
				let square = this.canvas.getContext("2d");
				square.fillStyle = "#FF0000";
				square.fillRect(x, y, 122, 122);
			}
		}
	}

	private drawLine(x1: number, x2: number, y1: number, y2: number): void {
		var line = this.canvas.getContext('2d');
		line.beginPath();
		line.moveTo(x1, x2);
		line.lineTo(y1, y2);
		line.lineWidth = 5;
		// line.lineCap = 'round';
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

interface Anchor {
	x: number,
	y: number
}