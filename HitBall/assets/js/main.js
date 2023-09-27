var Main = function () { };
var text;
Main.prototype = {
    init: function () {
        // Utils.ScaleManager();
    },
    preload: function () {
        game.load.image('splash_bg', 'assets/images/splash/splash_bg.png');
        game.load.image('logo', 'assets/images/splash/logo.png');
        game.load.image('progress_base', 'assets/images/splash/progress_base.png');
        game.load.image('progress_bar', 'assets/images/splash/progress_bar.png');
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
        // }

        //     game.state.start('GamePlay');
    },
    // LoadFonts() {
    //     let propNames = Object.getOwnPropertyNames(fonts);
    //     propNames.forEach((fontName, index) => {
    //         let isLast = index >= propNames.length - 1;
    //         fonts[fontName] = new FontFaceObserver(fontName);
    //         console.log(fonts[fontName]);
    //         fonts[fontName].load().then(
    //             () => this.FontLoadSuccess(fontName, isLast),
    //             () => this.FontLoadError(fontName)
    //         );
    //     });
    // },

    // FontLoadSuccess(fontName, isLast) {
    //     if (isLast) {
    //         // if (Server.IsUrlParamsMissing()) {
    //         //     this.scene.start("GameErrorScene");
    //         // } else {
    //         this.LoadAssests();
    //         // }
    //     }
    // },
    // FontLoadError(fontName) { },
    LoadAssets() {
        game.load.onLoadComplete.add(this.OnComplete, this);

        // Set up a progress event listener
        game.load.onFileComplete.add(this.LoadProgress, this);
        // game.load.on('progress', this.LoadProgress, this);
        // game.load.on('complete', this.OnComplete, { scene: this.scene });
        //......................Background.......................
        game.load.image('bg', 'assets/images/bg.png');
        game.load.image('planet1', 'assets/images/planet1.png');
        game.load.image('planet2', 'assets/images/planet2.png');
        game.load.image('planet3', 'assets/images/planet3.png');
        game.load.image('gameOverBackground', 'assets/images/gameOverBackground.png');
        game.load.image('star1', 'assets/images/star1.png');
        game.load.image('star2', 'assets/images/star2.png');
        //Game Play...........................................
        game.load.image('background', 'assets/images/bg.png');
        game.load.image('ROKET', 'assets/images/ROKET.png');
        game.load.spritesheet('rocketFire', 'assets/images/Rocket.png', 256 / 2, 512 / 4, 7);
        game.load.spritesheet('targetDestroy', 'assets/images/targetDestroy.png', 1280 / 5, 1536 / 6, 26);
        //.......button.............................................
        game.load.image('homeButton', 'assets/images/home_button.png');
        game.load.image('nextButton', 'assets/images/next_button.png');
        game.load.image('pauseButton', 'assets/images/pause_button.png');
        game.load.image('playButton', 'assets/images/play_button.png');
        game.load.image('replayButton', 'assets/images/replay_button.png');
        game.load.image('gamePausedText', 'assets/images/game_paused_text.png');

        //...............LEVEL 1.....................................

        game.load.image('level1_left', 'assets/images/level1/level1-left.png');
        game.load.image('level1_right', 'assets/images/level1/level1-right.png');

        //...........LEVEL 2................................

        game.load.image('level2_01', 'assets/images/level2/level2-01.png');
        game.load.image('level2_02', 'assets/images/level2/level2-02.png');
        game.load.image('level2_03', 'assets/images/level2/level2-03.png');
        game.load.image('level2_04', 'assets/images/level2/level2-04.png');

        //......LEVEL 3..................................

        game.load.image('level3_01', 'assets/images/level3/level3-01.png');
        game.load.image('level3_02', 'assets/images/level3/level3-02.png');

        //....LEVEL 4.....................................

        game.load.image('level4_01', 'assets/images/level4/level4-01.png');

        //.............LEVEL 5...................................

        game.load.image('level5_01', 'assets/images/level5/level5-01.png');
        game.load.image('level5_02', 'assets/images/level5/level5-02.png');

        //.......LEVEL 6.......................................................

        game.load.image('level6_01', 'assets/images/level6/level6-01.png');
        game.load.image('level6_02', 'assets/images/level6/level6-02.png');

        //........LEVEL 7...............................................

        game.load.image('level7_01', 'assets/images/level7/level7-01.png');
        game.load.image('level7_02', 'assets/images/level7/level7-02.png');

        //........LEVEL 8...............................................

        game.load.image('level8', 'assets/images/level8/level8.png');


        game.load.image('target', 'assets/images/target.png');
        game.load.image('bullet', 'assets/images/bullet.png');
        game.load.image('one', 'assets/images/one_pixel_white.png');
        game.load.image('timer', 'assets/images/timer.png');
        game.load.image('hitball', 'assets/images/hitball.png');

        //..............hand sprite sheet..............................
        game.load.spritesheet('hand', 'assets/images/hand.png', 396 / 2, 256, 2);
        //................Load Bitmap font...
        game.load.bitmapFont('riffic_free_bold', 'assets/images/font/riffic_free_bold.png', 'assets/images/font/riffic_free_bold.fnt');
        //..................Load Tutorial Target SpriteSheet.................
        game.load.spritesheet('tutorial_target_effect', 'assets/images/tutorial_target_effect.png', 2048 / 4, 2560 / 5, 20);
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
