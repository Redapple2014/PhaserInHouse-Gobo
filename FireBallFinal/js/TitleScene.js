var TitleScene = function () { };
TitleScene.prototype = {
    init: function () {

    },
    create: function () {
        console.log('TitleScene');
        for (var i = 0; i <= 5; i++) {
            backGroundArray[i] = Utils.SpriteSettingsControl(gameBg, 360, 640, 'background_' + i, "true", "true", 0.5, 0.5, 1, 1, "true");
            if (i == 0)
                backGroundArray[i].alpha = 1;
            else
                backGroundArray[i].alpha = 0;
        }
        gamelogo = Utils.SpriteSettingsControl(gamelogo, 360, 785, 'fireball', "true", "true", 0.5, 0.5, 0.72, 0.72, "true");
        backButton = Utils.ButtonSettingsControl(backButton, 350, 885, 'play_buttom', this.BackButtonClicked, null, null, null, "true", "true", 0.5, 0.5, 0.5, 0.5, "true");
        backButton.inputEnabled = true;
        backButton.angle += 0;
        game.add.text(310, 925, 'Play', { font: "42px Arial", fill: "#FFFFFF" });
    },
    BackButtonClicked: function () {
        // var tween = game.add.tween(backButton.scale).to({ x: 0.4, y: 0.4 }, 100, Phaser.Easing.Linear.in, this);
        // tween.onComplete.add(function () {
        //     game.add.tween(backButton.scale).to({ x: 0.5, y: 0.5 }, 100, Phaser.Easing.Linear.in, this);
        // });
        game.add.tween(backButton).to({ alpha: 0 }, 450, Phaser.Easing.Linear.in, this);
        setTimeout(() => {
            // handAnimation.destroy();
            game.state.add('GamePlay', GamePlay);
            StateTransition.TransitToGamePlay();
            // game.state.add('GamePlay', GamePlay);
            // game.state.start('GamePlay');
        }, 200);
    },
}