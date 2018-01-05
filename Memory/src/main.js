var game;

game = new Phaser.Game(1000, 700, Phaser.AUTO, '');
game.state.add('Menu', Menu);
game.state.add('Game', Game);

$.getJSON('lang/lang.json', function (result) {
	if (result.Status && result.Status.ErrCode) {
		console.log("Error getting lang.json");
	} else {
		strings = result.strings;
	}
});

game.state.start('Menu');