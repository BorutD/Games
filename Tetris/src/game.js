var tileGroup;
var Game = {
	create: function () {
		game.stage.backgroundColor = "#A1AD04";

		var titleStyle = { font: "64px Courier New", fontWeight: "bold", fill: "#FFF", align: "center" };
		title = game.add.text(game.world.centerX, 100, "Game started", titleStyle);
		title.anchor.set(0.5);

		// Tiles
		tileGroup = game.add.group();


		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				var tilesGraphics = game.add.graphics(300 + 100 * i, 200 + 100 * j);
				tilesGraphics.beginFill(0xFF3300);
				tilesGraphics.lineStyle(2, 0x0000FF, 2);

				tileGroup.add(tilesGraphics);

				tilesGraphics.drawRect(0, 0, 95, 95);
				tilesGraphics.inputEnabled = true;
				tilesGraphics.input.useHandCursor = true;
				
				var spotIndex = (i == 0 ? String(j) : String(i * 1000 + j))
				tilesGraphics.data["spotIndex"] = spotIndex;
				tilesGraphics.events.onInputDown.add(this.tileClicked, [spotIndex]);
			}
		}
	},

	tileClicked: function () {
		console.log("Tile clicked ", this[0]);
		// console.log(tileGroup.children);
	},

	spotIndexToSpot: function () {
		// From 3 to 12.
		// From 2001 to 6.
		// From 2000 to 3
	}
};