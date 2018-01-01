var Menu = {
	preload: function () {
		game.load.script('Utils', 'Utils.js');
	},

	create: function () {
		game.stage.backgroundColor = "#01AF04";

		// Title
		var titleStyle = { font: "64px Courier New", fontWeight: "bold", fill: "#FFF", align: "center" };
		title = game.add.text(game.world.centerX, 100, strings.title, titleStyle);
		title.anchor.set(0.5);

		// Play button
		// var playButton = Utils.createGraphicsButton(340, 275, 120, 50, "#01AF04", 1);
		var btn = game.add.graphics();
		btn.beginFill(0x01AF04, 1);
		btn.drawRect(540, 275, 120, 50);
		btn.endFill();
		game.add.text(400, 300, strings.btnPlay, { font: "45px Courier", fontWeight: "bold", fill: "#FFF" }).anchor.set(0.5);
	}
};