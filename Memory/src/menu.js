var Menu = {
	create: function () {
		game.stage.backgroundColor = "#01AF04";

		// Title
		var titleStyle = { font: "64px Courier New", fontWeight: "bold", fill: "#FFF", align: "center" };
		title = game.add.text(game.world.centerX, 100, strings.title, titleStyle);
		title.anchor.set(0.5);

		// Play button
		// var playButton = Utils.createGraphicsButton(340, 275, 120, 50, "#01AF04", 1);
		var playBtn = game.add.graphics();
		playBtn.beginFill(0x01AF04, 1);
		playBtn.drawRect(game.world.centerX, 300, 120, 50);
		playBtn.endFill();
		playBtn.inputEnabled = true;
		playBtn.input.useHandCursor = true;
		game.add.text(game.world.centerX, 300, strings.btnPlay, { font: "45px Courier", fontWeight: "bold", fill: "#FFF" });
		playBtn.events.onInputDown.add(this.startGame, this);
	},

	startGame: function () {
		this.state.start('Game');
	}
};