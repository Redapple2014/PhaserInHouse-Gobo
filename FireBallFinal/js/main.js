var Main = function () { };
var text;
Main.prototype = {
    init: function () {
        // Utils.ScaleManager();
    },
    preload: function () {

        game.load.image('splash_bg', 'assets/splash/splash_bg.png');
        game.load.image('logo', 'assets/splash/logo.png');
        game.load.image('progress_base', 'assets/splash/progress_base.png');
        game.load.image('progress_bar', 'assets/splash/progress_bar.png');
        Debug.log(" Main preload...", 'main ');




    },

    create: function () {
        this.LoadAssets();

        splashBg = Utils.SpriteSettingsControl(splashBg, 360, 640, 'splash_bg', "true", "true", 0.5, 0.5, 0.8, 0.8, this);

        // splashLogo = Utils.SpriteSettingsControl(splashLogo, 360, 640, 'logo', "true", "true", 0.5, 0.5, 1, 1, this);

        progressBase = Utils.SpriteSettingsControl(progressBase, 360, 1040, 'progress_base', "true", "true", 0.5, 0.5, 1, 1, this);

        progressBar = Utils.SpriteSettingsControl(progressBar, 360, 1040, 'progress_bar', "true", "true", 0.5, 0.5, 1, 1, this);
        loadingText = game.add.text(250, 935, 'Loading : ', { font: "42px Arial", fill: "#FFFFFF" });
        // progressBar.setCrop(0, 0, 0, progressBar.height);
        progressBar.crop(new Phaser.Rectangle(0, 0, progressBar.width / 2, progressBar.height));
    },
    LoadAssets: function () {
        game.load.onLoadComplete.add(this.OnComplete, this);

        // Set up a progress event listener
        game.load.onFileComplete.add(this.LoadProgress, this);
        Debug.log(" Main preload...", 'main_preload');
        //Game Play...........................................
        game.load.image('cannon_base', 'assets/cannon_base.png');
        game.load.image('cannon_body', 'assets/cannon_body.png');
        game.load.image('cannon_wheel', 'assets/cannon_wheel.png');
        game.load.image('cloud', 'assets/cloud.png');
        game.load.image('cloud_01', 'assets/cloud_01.png');
        game.load.image('cloud_02', 'assets/cloud_02.png');
        game.load.image('cloud_03', 'assets/cloud_03.png');
        game.load.image('obstacle', 'assets/obstacle.png');
        game.load.image('platform_base', 'assets/platform_base.png');
        game.load.image('score_line', 'assets/score_line.png');
        game.load.image('ball', 'assets/ball.png');
        game.load.image('block_01', 'assets/block_01.png');
        game.load.image('block_02', 'assets/block_02.png');
        game.load.image('block_03', 'assets/block_03.png');
        game.load.image('block_04', 'assets/block_04.png');
        game.load.image('block_05', 'assets/block_05.png');
        game.load.image('white', 'assets/one_pixel_white.png');
        game.load.image('Layer1', 'assets/Layer1.png');
        game.load.image('Layer2', 'assets/Layer2.png');
        game.load.image('overlay', 'assets/overlay.png');
        game.load.image('fireball', 'assets/fireball.png');

        //...load game over assets..........
        game.load.image('GameOverBackground', 'assets/game_over/GameOverBackground.png');
        game.load.image('GameOverText', 'assets/game_over/GameOverText.png');
        //......................................................
        for (var i = 0; i <= 16; i++) {
            game.load.image('background_' + i, 'assets/Background/background_' + i + '.jpg');
        }
        //.............................................

        game.load.image('pause_buttom', 'assets/pause_buttom.png');
        game.load.image('back_buttom', 'assets/back_buttom.png');
        game.load.image('play_buttom', 'assets/play_buttom.png');
        //................Load Bitmap font...
        game.load.bitmapFont('riffic_free_bold', 'assets/font/riffic_free_bold.png', 'assets/font/riffic_free_bold.fnt');
        //..............hand sprite sheet..............................
        game.load.spritesheet('hand', 'assets/hand.png', 396 / 2, 256, 2);
        game.load.start();
    },
    LoadProgress(percentage) {
        // console.log(percentage);
        progressBar.crop(new Phaser.Rectangle(0, 0, progressBar.width * percentage, progressBar.height));
        // progressBar.setCrop(0, 0, progressBar.width * percentage, progressBar.height);
        percentage = percentage;
        loadingText.setText("Loading: " + parseInt(percentage) + " %");
        // console.log(loadingText._text);
    },

    OnComplete() {
        setTimeout(() => {
            Debug.log(" Create Fucntion...", 'Main ');
            game.state.add('TitleScene', TitleScene);
            game.state.start('TitleScene');
            game.state.add('GamePlay', GamePlay);

        }, 200);
    }

}
