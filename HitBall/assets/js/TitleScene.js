var TitleScene = function () { };
TitleScene.prototype = {
    init: function () {

    },
    create: function () {
        background = Utils.SpriteSettingsControl(background, 360, 640, 'bg', "true", "true", 0.5, 0.5, 1, 1, this);
        background1 = Utils.SpriteSettingsControl(background1, 360, -640, 'bg', "true", "true", 0.5, 0.5, 1, 1, this);
        gamelogo = Utils.SpriteSettingsControl(gamelogo, 360, 785, 'hitball', "true", "true", 0.5, 0.5, 0.72, 0.72, "true");
        backButton = Utils.ButtonSettingsControl(backButton, 350, 935, 'playButton', this.BackButtonClicked, null, null, null, "true", "true", 0.5, 0.5, 0.5, 0.5, "true");
        backButton.inputEnabled = true;
        backButton.angle += 0;
        // game.add.text(310, 935, 'Play', { font: "42px Arial", fill: "#FFFFFF" });
    },
    BackButtonClicked: function () {
        // var tween = game.add.tween(backButton.scale).to({ x: 0.4, y: 0.4 }, 100, Phaser.Easing.Linear.in, this);
        // tween.onComplete.add(function () {
        //     game.add.tween(backButton.scale).to({ x: 0.5, y: 0.5 }, 100, Phaser.Easing.Linear.in, this);
        // });
        game.add.tween(backButton).to({ alpha: 0 }, 450, Phaser.Easing.Linear.in, this);
        setTimeout(() => {
            // handAnimation.destroy();
            StateTransition.TransitToGamePlay();
            // game.state.add('GamePlay', GamePlay);
            // game.state.start('GamePlay');
        }, 200);
    },
}