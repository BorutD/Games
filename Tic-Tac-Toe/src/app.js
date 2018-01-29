"use strict";
var TicTacToeGame = (function () {
    function TicTacToeGame() {
        this.game = {
            width: 0,
            height: 0
        };
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.game.width = document.getElementById('canvas').width;
        this.game.height = document.getElementById('canvas').height;
        this.ctx.fillStyle = "#D6E5FF";
        this.ctx.fillRect(0, 0, this.game.width, this.game.height);
        // this.drawGame(this.game.width / 2, this.game.height / 2, 200, 200, { x: 0.5, y: 0.5 });
        // this.drawGameLayout();
        this.drawGameLayout2(300, 100, 400);
    }
    TicTacToeGame.prototype.drawGameLayout2 = function (x, y, width, anchor) {
        var square = this.canvas.getContext("2d");
        square.fillStyle = "#FF0000";
        square.fillRect(x, y, width, width);
        this.drawLine(width * (2 / 3) + x, y, width * (2 / 3) + x, width + y);
        this.drawLine(width * (1 / 3) + x, y, width * (1 / 3) + x, width + y);
        this.drawLine(x, width * (1 / 3) + y, width + x, width * (1 / 3) + y);
        this.drawLine(x, width * (2 / 3) + y, width + x, width * (2 / 3) + y);
    };
    TicTacToeGame.prototype.drawGame = function (x, y, width, height, anchor) {
        var square = this.canvas.getContext("2d");
        square.fillStyle = "#FF0000";
        var x = x - (width * anchor.x);
        var y = y - (height * anchor.y);
        square.fillRect(x, y, width, height);
    };
    TicTacToeGame.prototype.drawGameLayout = function () {
        this.drawLine(150, 20, 150, 420);
        this.drawLine(280, 20, 280, 420);
        this.drawLine(20, 150, 420, 150);
        this.drawLine(20, 280, 420, 280);
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var x = 24 + (j * 130);
                var y = 24 + (i * 130);
                var square = this.canvas.getContext("2d");
                square.fillStyle = "#FF0000";
                square.fillRect(x, y, 122, 122);
            }
        }
    };
    TicTacToeGame.prototype.drawLine = function (x1, x2, y1, y2) {
        var line = this.canvas.getContext('2d');
        line.beginPath();
        line.moveTo(x1, x2);
        line.lineTo(y1, y2);
        line.lineWidth = 5;
        // line.lineCap = 'round';
        line.stroke();
    };
    return TicTacToeGame;
}());
window.onload = function () {
    var game = new TicTacToeGame();
};
