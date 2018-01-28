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
        this.drawGame();
    }
    TicTacToeGame.prototype.drawGame = function () {
        var gameLayout = [[400, 400], [20, 400]];
    };
    TicTacToeGame.prototype.drawLine = function () {
        var line = this.canvas.getContext('2d');
        line.beginPath();
        line.moveTo(400, 20);
        line.lineTo(400, 400);
        line.lineWidth = 10;
        line.lineCap = 'round';
        line.stroke();
    };
    return TicTacToeGame;
}());
window.onload = function () {
    var game = new TicTacToeGame();
};
