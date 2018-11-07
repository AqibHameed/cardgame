import background from '../images/cards/background_felt.jpg'
import background_768_1024 from '../images/cards/background_felt_768_1024.jpg'
import background_felt_960_640 from '../images/cards/background_felt_960_640.jpg'
import background_felt_640_960 from '../images/cards/background_felt_640_960.jpg'
import background_felt_1280_800 from '../images/cards/background_felt_1280_800.jpg'
import background_felt_800_1280 from '../images/cards/background_felt_800_1280.jpg'
import background_felt_600_1024 from '../images/cards/background_felt_600_1024.jpg'
import background_felt_1920_1080 from '../images/cards/background_felt_1920_1080.jpg'
import background_felt_1080_1920 from '../images/cards/background_felt_1080_1920.jpg'
import backofcard from '../images/cards/backofcard.jpg'
import adiamond from '../images/cards/adiamond.jpg'
import adiamond_stripe from '../images/cards/adiamond_stripe.jpg'
import diamond2 from '../images/cards/diamond2.jpg'
import diamond3 from '../images/cards/diamond3.jpg'
import diamond4 from '../images/cards/diamond4.jpg'
import diamond5 from '../images/cards/diamond5.jpg'
import diamond6 from '../images/cards/diamond6.jpg'
import diamond7 from '../images/cards/diamond7.jpg'
import diamond8 from '../images/cards/diamond8.jpg'
import diamond9 from '../images/cards/diamond9.jpg'
import diamond10 from '../images/cards/diamond10.jpg'
import jdiamond from '../images/cards/jdiamond.jpg'
import qdiamond from '../images/cards/qdiamond.jpg'
import kdiamond from '../images/cards/kdiamond.jpg'
import aspades from '../images/cards/aspades.jpg'
import spades2 from '../images/cards/spades2.jpg'
import spades3 from '../images/cards/spades3.jpg'
import spades4 from '../images/cards/spades4.jpg'
import spades5 from '../images/cards/spades5.jpg'
import spades6 from '../images/cards/spades6.jpg'
import spades7 from '../images/cards/spades7.jpg'
import spades8 from '../images/cards/spades8.jpg'
import spades9 from '../images/cards/spades9.jpg'
import spades10 from '../images/cards/spades10.jpg'
import jspades from '../images/cards/jspades.jpg'
import qspades from '../images/cards/qspades.jpg'
import kspades from '../images/cards/kspades.jpg'
import aclubs from '../images/cards/clubsa.jpg'
import clubs2 from '../images/cards/clubs2.jpg'
import clubs3 from '../images/cards/clubs3.jpg'
import clubs4 from '../images/cards/clubs4.jpg'
import clubs5 from '../images/cards/clubs5.jpg'
import clubs6 from '../images/cards/clubs6.jpg'
import clubs7 from '../images/cards/clubs7.jpg'
import clubs8 from '../images/cards/clubs8.jpg'
import clubs9 from '../images/cards/clubs9.jpg'
import clubs10 from '../images/cards/clubs10.jpg'
import jclubs from '../images/cards/clubsj.jpg'
import qclubs from '../images/cards/clubsq.jpg'
import kclubs from '../images/cards/clubsk.jpg'
import ahearts from '../images/cards/heartsa.jpg'
import hearts2 from '../images/cards/hearts2.jpg'
import hearts3 from '../images/cards/hearts3.jpg'
import hearts4 from '../images/cards/hearts4.jpg'
import hearts5 from '../images/cards/hearts5.jpg'
import hearts6 from '../images/cards/hearts6.jpg'
import hearts7 from '../images/cards/hearts7.jpg'
import hearts8 from '../images/cards/hearts8.jpg'
import hearts9 from '../images/cards/hearts9.jpg'
import hearts10 from '../images/cards/hearts10.jpg'
import jhearts from '../images/cards/heartsj.jpg'
import qhearts from '../images/cards/heartsq.jpg'
import khearts from '../images/cards/heartsk.jpg'

import Player from './Player'

class Example1 extends Phaser.Scene {

    constructor() {
        super({key: "Example1"});
    }


    preload() {

        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        var $divPlayButton = $('<div/>').attr({
            class: 'wrapper--plain-buuton',
            style: 'text-align:center'
        });

        var $playButton = $('<input/>').attr({
            type: 'button',
            name: 'btn1',
            value: 'PlayAgain',
            id: 'playButton',
            class: 'btn btn-primary',
            style: 'position:absolute; top:50%; width:100px; height:35px; cursor:pointer;'
        });
        $('body').append($divPlayButton);
        $('div').append($playButton);
        $("#playButton").hide();


        var progress = this.add.graphics();

        this.load.on('progress', function (value) {

            progress.clear();
            progress.fillStyle(0x045a29, 1);
            progress.fillRect(0, 270, 1600 * value, 60);

        });

        this.load.on('complete', function () {

            progress.destroy();

        });

        this.loadCardImages();

        this.playerTwoCards = [];
        this.playerOneCards = [];
        this.cards_stack = [];
        this.cursors = [];
        this.single_turn_card_count = 0;
        this.required_card_count = 1;
        this.last_player_with_picture = -1;
        this.current_player = 0;
        this.current_card = 0;
        this.first_run = true;
        this.haveHandWinner = false;
        this.clash_of_messages = false;
        this.isPaused = false;
        this.cardWidth = 0;
        this.cardheight = 0;


    }

    loadCardImages() {
        this.load.image('background', background);
        this.load.image('background_768_1024', background_768_1024);
        this.load.image('background_felt_960_640', background_felt_960_640);
        this.load.image('background_felt_640_960', background_felt_640_960);
        this.load.image('background_felt_1280_800', background_felt_1280_800);
        this.load.image('background_felt_800_1280', background_felt_800_1280);
        this.load.image('background_felt_600_1024', background_felt_600_1024);
        this.load.image('background_felt_1920_1080', background_felt_1920_1080);
        this.load.image('background_felt_1080_1920', background_felt_1080_1920);
        this.load.image('adiamond', adiamond);
        this.load.image('ahearts', ahearts);
        this.load.image('hearts2', hearts2);
        this.load.image('hearts3', hearts3);
        this.load.image('hearts4', hearts4);
        this.load.image('hearts5', hearts5);
        this.load.image('hearts6', hearts6);
        this.load.image('hearts7', hearts7);
        this.load.image('hearts8', hearts8);
        this.load.image('hearts9', hearts9);
        this.load.image('hearts10', hearts10);
        this.load.image('jhearts', jhearts);
        this.load.image('qhearts', qhearts);
        this.load.image('khearts', khearts);
        this.load.image('adiamond', adiamond);
        this.load.image('diamond2', diamond2);
        this.load.image('diamond3', diamond3);
        this.load.image('diamond4', diamond4);
        this.load.image('diamond5', diamond5);
        this.load.image('diamond6', diamond6);
        this.load.image('diamond7', diamond7);
        this.load.image('diamond8', diamond8);
        this.load.image('diamond9', diamond9);
        this.load.image('diamond10', diamond10);
        this.load.image('jdiamond', jdiamond);
        this.load.image('qdiamond', qdiamond);
        this.load.image('kdiamond', kdiamond);
        this.load.image('aspades', aspades);
        this.load.image('spades2', spades2);
        this.load.image('spades3', spades3);
        this.load.image('spades4', spades4);
        this.load.image('spades5', spades5);
        this.load.image('spades6', spades6);
        this.load.image('spades7', spades7);
        this.load.image('spades8', spades8);
        this.load.image('spades9', spades9);
        this.load.image('spades10', spades10);
        this.load.image('jspades', jspades);
        this.load.image('qspades', qspades);
        this.load.image('kspades', kspades);
        this.load.image('aclubs', aclubs);
        this.load.image('clubs2', clubs2);
        this.load.image('clubs3', clubs3);
        this.load.image('clubs4', clubs4);
        this.load.image('clubs5', clubs5);
        this.load.image('clubs6', clubs6);
        this.load.image('clubs7', clubs7);
        this.load.image('clubs8', clubs8);
        this.load.image('clubs9', clubs9);
        this.load.image('clubs10', clubs10);
        this.load.image('jclubs', jclubs);
        this.load.image('qclubs', qclubs);
        this.load.image('kclubs', kclubs);
        this.load.image('backofcard', backofcard);

    }

    create() {

        this.initializeObjects();


    }

    initializeObjects() {

        var playerA = prompt("Please enter your name", "RandomPerson");

        if (playerA == null || playerA == "") {
            playerA = "RandomPerson";
        }

        var playerB = prompt("Please enter your name", "AnotherPerson");

        if (playerB == null || playerB == "") {
            playerB = "AnotherPerson";
        }


        var namesConfig = {
            x: 0,
            y: 0,
            text: 'ABC DEF',
            style: {
                font: '15px Arial',
                fill: '#ffffff',
                align: 'center',
                backgroundColor: '#323232'
            }
        };


        //this.cursor = this.add.image(this.width/2, this.height*0.2, 'backofcard');

        // this.cursor.displayHeight = Math.round(this.cursor.height * 0.4);
        // this.cursor.displayWidth = Math.round(this.cursor.width * 0.4);
        // this.card.displayHeight = Math.round(this.card.height * 0.4);
        // this.card.displayWidth = Math.round(this.card.width * 0.4);
        // this.cardTwo.displayHeight = Math.round(this.cardTwo.height * 0.4);
        // this.cardTwo.displayWidth = Math.round(this.cardTwo.width * 0.4);
        // this.cardThree.displayHeight = Math.round(this.cardThree.height * 0.4);
        // this.cardThree.displayWidth = Math.round(this.cardThree.width * 0.4);
        // this.cardFour.displayHeight = Math.round(this.cardFour.height * 0.4);
        // this.cardFour.displayWidth = Math.round(this.cardFour.width * 0.4);

        this.orientation = 'normal';

        this.statusFontSize = 20;
        this.statusBottomFontSize = 16;


        this.cardWidth = Math.round(this.width * 0.2);
        this.cardheight = Math.round(this.cardWidth * 1.4);

        if (navigator.userAgent.match(/iPad/i)) {
            this.cardWidth = Math.round(this.width * 0.4);
            this.cardheight = Math.round(this.cardWidth * 1.4);
        }


        var ratio = this.width / this.height;
        console.log("ratio: " + ratio);
        if (ratio > 1 && ratio < 1.5) { // 1024x768
            this.background = this.add.image(0, 0, 'background');
            Phaser.Display.Align.In.Center(this.background, this.add.zone(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight));

            this.cardWidth = Math.round(this.width * 0.08);
            this.cardheight = Math.round(this.cardWidth * 1.4);
            this.status_spacing = this.getStatusPadding(playerA);
            this.name_spacing = this.getNameSpacing(playerA);

            if (this.width > this.height)
                this.orientation = 'horizontal';

            this.statusFontSize = 26;
            this.statusBottomFontSize = 26;
        } else if (ratio > 0.7 && ratio <= 0.75) { // 768x1024
            this.background = this.add.image(0, 0, 'background_768_1024');
            Phaser.Display.Align.In.Center(this.background, this.add.zone(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight));

            this.cardWidth = Math.round(this.width * 0.1);
            this.cardheight = Math.round(this.cardWidth * 1.4);
            this.status_spacing = this.getStatusPadding(playerA);
            this.name_spacing = this.getNameSpacing(playerA);

            if (this.width > this.height)
                this.orientation = 'horizontal';

            this.statusFontSize = 26;
            this.statusBottomFontSize = 26;
        } else if (ratio >= 1.5 && ratio < 1.6) { //  960x640

            this.background = this.add.image(0, 0, 'background_felt_960_640');
            Phaser.Display.Align.In.Center(this.background, this.add.zone(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight));

            this.cardWidth = Math.round(this.width * 0.08);
            this.cardheight = Math.round(this.cardWidth * 1.4);
            this.status_spacing = this.getStatusPadding(playerA);
            this.name_spacing = this.getNameSpacing(playerA);

            if (this.width > this.height)
                this.orientation = 'horizontal';

            this.statusFontSize = 26;
            this.statusBottomFontSize = 26;
        } else if (ratio > 0.63 && ratio <= 0.7) { // 640 x 960
            this.background = this.add.image(0, 0, 'background_felt_640_960');
            Phaser.Display.Align.In.Center(this.background, this.add.zone(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight));

            this.cardWidth = Math.round(this.width * 0.15);
            this.cardheight = Math.round(this.cardWidth * 1.4);
            this.status_spacing = this.getStatusPadding(playerA);
            this.name_spacing = this.getNameSpacing(playerA);

            if (this.width > this.height)
                this.orientation = 'horizontal';

            this.statusFontSize = 26;
            this.statusBottomFontSize = 26;
        }

        else if (ratio >= 1.6 && ratio < 1.7) { // 1280x800
            this.background = this.add.image(0, 0, 'background_felt_1280_800');
            Phaser.Display.Align.In.Center(this.background, this.add.zone(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight));

            this.cardWidth = Math.round(this.width * 0.07);
            this.cardheight = Math.round(this.cardWidth * 1.4);
            this.status_spacing = this.getStatusPadding(playerA);
            this.name_spacing = this.getNameSpacing(playerA);

            if (this.width > this.height)
                this.orientation = 'horizontal';

            this.statusFontSize = 26;
            this.statusBottomFontSize = 26;

        } else if (ratio <= 0.63 && ratio > 0.6) { // 800x1280

            this.background = this.add.image(0, 0, 'background_felt_800_1280');
            Phaser.Display.Align.In.Center(this.background, this.add.zone(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight));

            this.cardWidth = Math.round(this.width * 0.15);
            this.cardheight = Math.round(this.cardWidth * 1.4);
            this.status_spacing = this.getStatusPadding(playerA);
            this.name_spacing = this.getNameSpacing(playerA);

            if (this.width > this.height)
                this.orientation = 'horizontal';

            this.statusFontSize = 26;
            this.statusBottomFontSize = 26;
        }

        else if (ratio >= 1.7 && ratio < 1.75) { // 1024x600
            this.background = this.add.image(0, 0, 'background');
            Phaser.Display.Align.In.Center(this.background, this.add.zone(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight));

            this.cardWidth = Math.round(this.width * 0.08);
            this.cardheight = Math.round(this.cardWidth * 1.4);
            this.status_spacing = this.getStatusPadding(playerA);
            this.name_spacing = this.getNameSpacing(playerA);

            if (this.width > this.height)
                this.orientation = 'horizontal';

            this.statusFontSize = 26;
            this.statusBottomFontSize = 26;
        } else if (ratio > 0.58 && ratio <= 0.6) { // 600 x 1024
            this.background = this.add.image(0, 0, 'background_felt_600_1024');
            Phaser.Display.Align.In.Center(this.background, this.add.zone(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight));

            this.cardWidth = Math.round(this.width * 0.15);
            this.cardheight = Math.round(this.cardWidth * 1.4);
            this.status_spacing = this.getStatusPadding(playerA);
            this.name_spacing = this.getNameSpacing(playerA);

            if (this.width > this.height)
                this.orientation = 'horizontal';

            this.statusFontSize = 26;
            this.statusBottomFontSize = 26;
        }

        else if (ratio >= 1.75 && ratio < 1.8) { // 1920x1080
            this.background = this.add.image(0, 0, 'background_felt_1920_1080');
            Phaser.Display.Align.In.Center(this.background, this.add.zone(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight));

            this.cardWidth = Math.round(this.width * 0.08);
            this.cardheight = Math.round(this.cardWidth * 1.4);
            this.status_spacing = this.getStatusPadding(playerA);
            this.name_spacing = this.getNameSpacing(playerA);

            if (this.width > this.height)
                this.orientation = 'horizontal';

            this.statusFontSize = 26;
            this.statusBottomFontSize = 26;

        } else if (ratio > 0.5 & ratio <= 0.58) { // 1080 x 1920
            this.background = this.add.image(0, 0, 'background_felt_1080_1920');
            Phaser.Display.Align.In.Center(this.background, this.add.zone(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight));

            this.cardWidth = Math.round(this.width * 0.15);
            this.cardheight = Math.round(this.cardWidth * 1.4);
            this.status_spacing = this.getStatusPadding(playerA);
            this.name_spacing = this.getNameSpacing(playerA);

            if (this.width > this.height)
                this.orientation = 'horizontal';

            this.statusFontSize = 26;
            this.statusBottomFontSize = 26;
        }
        else {

            console.log("Big Screen - Default Background");
            this.background = this.add.image(0, 0, 'background');
            Phaser.Display.Align.In.Center(this.background, this.add.zone(window.innerWidth / 2, window.innerHeight / 2, window.innerWidth, window.innerHeight));

            this.cardWidth = Math.round(this.width * 0.05);
            this.cardheight = Math.round(this.cardWidth * 1.4);
            this.status_spacing = this.getStatusPadding(playerA);
            this.name_spacing = this.getNameSpacing(playerA);
        }

        this.cursorXPosA = this.width / 2;
        this.cursorYPosA = this.height * 0.2;

        this.cursorXPosB = this.width / 2;
        this.cursorYPosB = this.height * 0.8;

        if (this.orientation == 'horizontal') {
            this.cursorXPosA = this.width * 0.2;
            this.cursorYPosA = this.height / 2;
            this.cursorXPosB = this.width * 0.8;
            this.cursorYPosB = this.height / 2;
        }

        this.cursor = this.add.sprite(this.cursorXPosA, this.cursorYPosA, 'adiamond_stripe', 0);
        this.card = this.add.image(this.cursorXPosA, this.cursorYPosA, 'backofcard');
        this.cardTwo = this.add.image(this.card.x + 5, this.cursorYPosA, 'backofcard');
        this.cardThree = this.add.image(this.cardTwo.x + 5, this.cursorYPosA, 'backofcard');
        this.cardFour = this.add.image(this.cardThree.x + 5, this.cursorYPosA, 'backofcard');


        this.cursor.displayHeight = this.cardheight;
        this.cursor.displayWidth = this.cardWidth;
        this.card.displayHeight = this.cardheight;
        this.card.displayWidth = this.cardWidth;
        this.cardTwo.displayHeight = this.cardheight;
        this.cardTwo.displayWidth = this.cardWidth;
        this.cardThree.displayHeight = this.cardheight;
        this.cardThree.displayWidth = this.cardWidth;
        this.cardFour.displayHeight = this.cardheight;
        this.cardFour.displayWidth = this.cardWidth;

        //this.cursorB = this.add.image(this.width/2, this.height*0.9, 'backofcard');
        this.cursorB = this.add.sprite(this.cursorXPosB, this.cursorYPosB, 'adiamond_stripe', 0);
        this.cardB = this.add.image(this.cursorXPosB, this.cursorYPosB, 'backofcard');
        this.cardBTwo = this.add.image(this.cardB.x + 5, this.cursorYPosB, 'backofcard');
        this.cardBThree = this.add.image(this.cardBTwo.x + 5, this.cursorYPosB, 'backofcard');
        this.cardBFour = this.add.image(this.cardBThree.x + 5, this.cursorYPosB, 'backofcard');

        this.cursorB.displayHeight = this.cardheight;
        this.cursorB.displayWidth = this.cardWidth;
        this.cardB.displayHeight = this.cardheight;
        this.cardB.displayWidth = this.cardWidth;
        this.cardBTwo.displayHeight = this.cardheight;
        this.cardBTwo.displayWidth = this.cardWidth;
        this.cardBThree.displayHeight = this.cardheight;
        this.cardBThree.displayWidth = this.cardWidth;
        this.cardBFour.displayHeight = this.cardheight;
        this.cardBFour.displayWidth = this.cardWidth;


        this.status = this.add.text(0, 0, 'Strip Pals')
            .setFontFamily('Arial')
            .setFontSize(this.statusFontSize)
            .setAlign('center')
            .setBackgroundColor('#323232');
        this.status_bottom = this.add.text(0, Math.round(this.height / 2), '')
            .setFontFamily('Arial')
            .setFontSize(this.statusBottomFontSize)
            .setAlign('center')
            .setBackgroundColor('#323232');


        this.status.setPadding(this.status_spacing, 10, this.width, 10);
        this.status_bottom.setPadding(this.status_spacing, 5, this.width, 5);
        this.children.bringToTop(this.status_bottom);

        // this.cursors.push(this.cursor);
        // this.cursors.push(this.cursorB);


        this.displayNames(playerA, playerB);

        // this.pic = this.add.image(0, 0, 'logo');
        // this.pic.displayWidth = Math.round(this.pic.width * 0.4);
        // this.pic.displayHeight = Math.round(this.pic.height * 0.4);
        //
        // Phaser.Display.Align.In.Center(this.pic, this.add.zone(this.width/2, this.height/2, 800, 600));
        // Phaser.Display.Align.In.TopCenter(status, background);
        //
        let playerOne = new Player();
        let playerTwo = new Player();
        playerOne.name = playerA;
        playerTwo.name = playerB;
        playerOne.cursor = this.cursor;
        playerTwo.cursor = this.cursorB;
        playerOne.cards = this.playerOneCards;
        playerTwo.cards = this.playerTwoCards;
        playerOne.card_count_text = this.playerCount;
        playerTwo.card_count_text = this.playerCountTwo;
        this.cardFour.setInteractive();
        this.cardBFour.setInteractive();
        playerOne.click_card = this.cardFour;
        playerTwo.click_card = this.cardBFour;
        playerOne.player_turn = false;
        playerOne.player_remains = true;
        playerTwo.player_turn = false;
        playerTwo.player_remains = true;

        this.players = [playerOne, playerTwo];
        this.distributeCards();
        this.setOnClickListeners();
        this.number_of_players = this.players.length;
        this.updateCardCount();
        // // this.setFlipView(); // TODO: Baad mein dekhty hain
        this.applePhoneFixes(playerA, playerB);
        this.playerTurn(0);


        this.status.setPadding(window.innerWidth, 10, window.innerWidth, 10);
        Phaser.Display.Align.In.TopCenter(this.status, this.background);
        this.status.y = 0;

        this.status_bottom.setPadding(window.innerWidth, 10, window.innerWidth, 10);
        Phaser.Display.Align.In.Center(this.status_bottom, this.background);

        for (var i = 0; i < this.players.length; i++) {
            var mY = this.players[i].card_count_text.y;

            if (this.orientation != 'horizontal') {
                this.players[i].card_count_text.setPadding(window.innerWidth, 10, window.innerWidth, 10);
                Phaser.Display.Align.In.TopCenter(this.players[i].card_count_text, this.background);
                this.players[i].card_count_text.y = mY;
            } else {
                this.players[i].card_count_text.setPadding(window.innerWidth, 10, window.innerWidth, 10);
                Phaser.Display.Align.In.TopCenter(this.players[i].card_count_text, this.players[i].cursor);
                this.players[i].card_count_text.y = mY;

            }
        }

    }

    applePhoneSpacingFixes() {
        if ((navigator.userAgent.match(/iPad/i))
            || (navigator.userAgent.match(/iPhone/i))
            || (navigator.userAgent.match(/iPod/i))) {

        }
    }

    applePhoneFixes(playerA, playerB) {
        if ((navigator.userAgent.match(/Android/i))
            || (navigator.userAgent.match(/iPad/i))
            || (navigator.userAgent.match(/iPhone/i))
            || (navigator.userAgent.match(/iPod/i))) {
            //alert("Apple user detected");
            this.statusFontSize = 35;
            this.statusBottomFontSize = 35;

            this.status.setFontSize(this.statusFontSize);
            this.status_bottom.setFontSize(this.statusBottomFontSize);

            this.players[0].card_count_text.setFontSize(35);
            this.players[1].card_count_text.setFontSize(35);


            this.players[0].card_count_text.setPadding(this.getAppleNameSpacing(playerA), 5, this.width, 5);
            this.players[1].card_count_text.setPadding(this.getAppleNameSpacing(playerB), 5, this.width, 5);

        }
    }

    getStatusPadding(name) {
        return this.width * 0.5 - name.length * 10;
    }

    getNameSpacing(name) {
        return this.width * 0.5 - name.length * 7;
    }

    getAppleNameSpacing(name) {
        return this.width * 0.5 - name.length * 12;
    }

    setOnClickListeners() {
        console.log('setOnClickListeners');

        this.players[0].click_card.inputEnabled = true;
        this.players[0].click_card.on('pointerdown', function (event) {
            if (!this.isPaused) {
                this.playerMechanics(0);
                this.players[0].click_card.setTint(0x7878ff);
            }

        }, this);

        this.players[0].click_card.on('pointerup', function () {
            this.clearTint();

        });

        this.players[1].click_card.inputEnabled = true;
        this.players[1].click_card.on('pointerdown', function (event) {
            if (!this.isPaused) {
                this.playerMechanics(1);
                this.players[1].click_card.setTint(0x7878ff);
            }
        }, this);

        this.players[1].click_card.on('pointerup', function () {
            this.clearTint();

        });
    }

    clickHandler(i) {
        console.log('clickHandler');
        this.playerMechanics(i);
        //
        // box.off('clicked', clickHandler);
        // box.input.enabled = false;
        // box.setVisible(false);
    }

    playerMechanics(i) {
        //console.log(this.players[0].cards);
        //console.log(this.players[1].cards);
        //console.log('playerMechanics: '+this.players[i].name);
        if (this.players[i].player_turn && this.players[i].player_remains) {
            //console.log("Last Card: "+this.players[i].cards[this.players[i].cards.length-1]);

            this.current_player = i;
            this.current_card = this.players[i].cards.shift();

            //console.log('Current Card:'+this.current_card);

            //if(this.cards_stack.length == 0)
            //  console.log('Empty Card Stack');


            this.players[i].click_card.enabled = false;


            // this.players[this.current_player].cursor.setTexture();


            if (i == 0) {
                this.cursors.push(this.add.image(this.cursorXPosA, this.cursorYPosA, this.getCardKey(this.current_card)));
            } else if (i == 1) {
                this.cursors.push(this.add.image(this.cursorXPosB, this.cursorYPosB, this.getCardKey(this.current_card)));
            }
            this.cursors[this.cursors.length - 1].displayHeight = this.cardheight;
            this.cursors[this.cursors.length - 1].displayWidth = this.cardWidth;


            this.tweens.add({
                targets: this.cursors[this.cursors.length - 1],
                x: Math.round(this.width / 2),
                y: Math.round(this.height / 2),
                duration: 1500,
                ease: 'Power2',
                rotation: (Math.random() * 6) + 1,
                onComplete: this.afterCursorAnimation(this.current_player),
            });

        }
    }

    afterCursorAnimation(i) {

        // this.flipCard(this.current_card,i);
        this.afterFlipCardAnimation(this.current_card, i)


    }

    // flipCard(card,player){
    //
    //     // this.players[this.current_player].cursor.setTexture(this.getCardKey(card));
    //
    //     var tween = this.tweens.add({
    //         targets: this.cursors[this.cursors.length-1],
    //         ease: 'Power1',
    //         duration: 500,
    //         rotation: 3,
    //         delay: 1500,
    //         onComplete: this.afterFlipCardAnimation(card, player),
    //
    //     });
    //
    //
    // }

    afterFlipCardAnimation(card, player) {

        console.log("afterFlipCardAnimation");

        this.updateCardCount();
        this.cards_stack.push(this.current_card);
        this.current_player = player;
        this.single_turn_card_count++;

        if (this.current_card == 1 || this.current_card == 14 || this.current_card == 27 || this.current_card == 40) {
            //Ace 1,14,27,40
            this.required_card_count = 4;
            this.last_player_with_picture = player;
            this.nextPlayer(player);
        } else if (this.current_card == 11 || this.current_card == 24 || this.current_card == 37 || this.current_card == 50) {
            this.required_card_count = 1;
            this.last_player_with_picture = player;
            this.nextPlayer(player);
        } else if (this.current_card == 12 || this.current_card == 25 || this.current_card == 38 || this.current_card == 51) {
            this.required_card_count = 2;
            this.last_player_with_picture = player;
            this.nextPlayer(player);
        } else if (this.current_card == 13 || this.current_card == 26 || this.current_card == 39 || this.current_card == 52) {
            this.required_card_count = 3;
            this.last_player_with_picture = player;
            this.nextPlayer(player);
        } else {

            if (this.players[player].cards.length < 1) {

                if (this.last_player_with_picture > -1) this.clash_of_messages = true;

                this.removePlayer(player);
                this.handWinner();
                this.nextPlayer(player);
            } else if (this.single_turn_card_count == this.required_card_count) {

                if (this.last_player_with_picture >= 0) {

                    this.handWinner();

                }
                this.nextPlayer(player);
            } else {
                this.playerTurn(player);
            }
        }

        if (this.haveHandWinner) {
            this.isPaused = true;

            // this.handWinnerWork();

            //if(!this.clash_of_messages)
            // this.updateStatusWithDelay(this.players[this.last_player_with_picture].name.toUpperCase()+" Wins The Deck");
            // else{
            // this.updateStatusWithDelay("LOSE YOUR SHIRT "+this.players[this.current_player].name.toUpperCase()
            //     +"\n"+this.players[this.last_player_with_picture].name.toUpperCase()+" WINS THE DECK");

            // this.clash_of_messages = false;
            // }

            var timedEventA = this.time.addEvent({
                delay: 1500,
                callback: this.displayMessage,
                callbackScope: this,
                repeat: 0
            });

        }

    }

    displayMessage() {

        this.updateStatusWithDelay(this.players[this.last_player_with_picture].name.toUpperCase() + " Wins The Deck");
        var timedEventA = this.time.addEvent({
            delay: 5000,
            callback: this.handWinnerWork,
            callbackScope: this,
            repeat: 0
        });
        var timedEventB = this.time.addEvent({
            delay: 2000,
            callback: this.rollWinnerCards,
            callbackScope: this,
            repeat: 0
        });

    }

    rollWinnerCards() {
        if (this.last_player_with_picture == 0) {
            //player 1
            for (let i = 0; i < this.cursors.length; i++) {
                this.tweens.add({
                    targets: this.cursors[i],
                    x: this.cursorXPosA,
                    y: this.cursorYPosA,
                    duration: 3000,
                    delay: 1500,
                    ease: 'Power2',
                    rotation: 0,
                });
            }


        } else {
            // player 2
            for (let i = 0; i < this.cursors.length; i++) {
                this.tweens.add({
                    targets: this.cursors[i],
                    x: this.cursorXPosB,
                    y: this.cursorYPosB,
                    duration: 3000,
                    delay: 1500,
                    ease: 'Power2',
                    rotation: 0,
                });
            }

        }
    }

    handWinnerWork() {
        this.haveHandWinner = false;
        console.log("handWinnerWork");
        this.disappearMiddleCards();


        for (var i = 0; i < this.cards_stack.length; i++) {
            this.players[this.last_player_with_picture].cards.push(this.cards_stack[i]);
        }

        ///// Random Selection of cardsvoid add(int index,Object element) for players
        // this.players[this.last_player_with_picture].cards = this.shuffle(this.players[this.last_player_with_picture].cards);
        // this.players[this.last_player_with_picture].cards = this.shuffle(this.players[this.last_player_with_picture].cards);
        // this.players[this.last_player_with_picture].cards = this.shuffle(this.players[this.last_player_with_picture].cards);
        /////

        this.cards_stack.splice(0, this.cards_stack.length);
        this.required_card_count = 1;
        this.last_player_with_picture = -1;
        this.updateCardCount();
        this.isPaused = false;
        console.log(this.players[0].cards);
        console.log(this.players[1].cards);
        this.nextPlayer(this.current_player);
    }

    nextPlayer(pos) {

        if (this.numOfRemainingPlayers() == 1) {
            this.announceWinner();
            return;
        }

        this.single_turn_card_count = 0;

        if (this.number_of_players == 2)
            this.nextPlayerTwoPlay(pos);
        // else if(number_of_players == 3)
        //     nextPlayerThreePlay(pos);
        // else if(number_of_players == 4)
        //     nextPlayerFourPlay(pos);


    }

    announceWinner() {
        if (this.numOfRemainingPlayers() == 1) {
            let i = this.remainingPlayer();
            this.players[i].cursor.enabled = false;
            console.log("announceWinner");


            var timedEvent;
            // this.handWinnerWork();

            var timedEventA = this.time.addEvent({
                delay: 5000,
                callback: this.disappearMiddleCards,
                callbackScope: this,
                repeat: 0
            });
            var timedEventB = this.time.addEvent({
                delay: 2000,
                callback: this.rollWinnerCards,
                callbackScope: this,
                repeat: 0
            });


            //this.disappearMiddleCards();
            this.updateStatus(this.players[i].name.toUpperCase() + " WINS");
            console.log("winner******");
            $("#playButton").show();
            $("#playButton").css("display", "inline-grid");
            $(document).on("click", "#playButton", function () {
                $.ajax({
                    type: 'GET',
                    url: "http://www.strip-pals.com/games/check_game_count",
                    data: {plan_id: 1}
                }).done(function () {
                    $("#playButton").hide();
                    location.reload();
                    console.log("success");
                }).fail(function () {
                    window.location = "http://www.strip-pals.com/entries";
                    console.log("error");
                });
            });

            $.ajax({
                type: 'GET',
                url: "http://www.strip-pals.com/games/reduce_game",
                data: {plan_id: 1}
            }).done(function () {
                console.log("success");
            }).fail(function () {
                console.log("error");
            });

            if (i == 0) {
                this.children.bringToTop(this.status_bottom);

                this.status_bottom.setText(this.players[1].name.toUpperCase() + " Strips");

                this.status_bottom.setPadding(window.innerWidth, 10, window.innerWidth, 10);
                Phaser.Display.Align.In.Center(this.status_bottom, this.background);
            }
            else {
                this.children.bringToTop(this.status_bottom);

                this.status_bottom.setText(this.players[0].name.toUpperCase() + " Strips");

                this.status_bottom.setPadding(window.innerWidth, 10, window.innerWidth, 10);
                Phaser.Display.Align.In.Center(this.status_bottom, this.background);
            }
            //btn_replay.setVisibility(View.VISIBLE); todo
        }
    }

    remainingPlayer() {
        var temp = 0;
        var player = -1;
        for (var i = 0; i < this.players.length; i++)
            if (this.players[i].player_remains) {
                temp++;
                player = i;
            }
        if (temp == 1)
            return player;
        else return -1;
    }

    nextPlayerTwoPlay(pos) {
        if (pos == 0) {
            if (this.players[1].player_remains)
                this.playerTurn(1);
            else
            // Player 1 wins
                this.announceWinner();

        } else if (pos == 1) {
            if (this.players[0].player_remains) {
                this.playerTurn(0);
            }
            else {
                // Player 2 wins
                this.announceWinner();
            }
        }
    }

    disappearMiddleCards() {

        for (let i = 0; i < this.cursors.length; i++) {
            this.cursors[i].setVisible(false);
            this.cursors[i].enabled = false;
            this.cursors[i].destroy();
        }
        this.cursors.splice(0, this.cursors.length);
        this.first_run = true;

    }

    numOfRemainingPlayers() {
        let temp = 0;
        for (let i = 0; i < this.players.length; i++)
            if (this.players[i].player_remains)
                temp++;
        return temp;

    }

    handWinner() {

        if (this.last_player_with_picture == -1)
            return;

        this.haveHandWinner = true;

    }

    playerTurn(pos) {

        console.log("playerTurn: " + pos);

        if (this.players[pos].cards.length == 0) {
            console.log("this.players[pos].cards.length == 0");
            this.removePlayer(pos);
            this.nextPlayer(pos);
            return;
        }

        for (var i = 0; i < this.players.length; i++)
            if (pos == i) {
                this.players[i].player_turn = true;
                // players.get(i).getRl_player().setEnabled(true);


                if (this.required_card_count > 1) {
                    if ((this.required_card_count - this.single_turn_card_count) == 1)
                        this.updateStatus(this.players[i].name
                            + " Draw "
                            + (this.required_card_count - this.single_turn_card_count)
                            + " Card");
                    else
                        this.updateStatus(this.players[i].name
                            + " Draw "
                            + (this.required_card_count - this.single_turn_card_count)
                            + " Cards");
                }
                else
                    this.updateStatus(this.players[i].name + " Draw " + this.required_card_count + " Card");


            } else {
                this.players[i].player_turn = false;
                //players.get(i).getRl_player().setEnabled(false);
            }

        if (this.haveHandWinner) {
            this.status.setText("");
            this.status.setPadding(window.innerWidth, 10, window.innerWidth, 10);
            Phaser.Display.Align.In.TopCenter(this.status, this.background);
            this.status.y = 0;

        }

    }

    removePlayer(pos) {

        this.players[pos].player_remains = false;
        this.players[pos].player_turn = false;
        this.players[pos].cursor.enabled = false;
        this.players[pos].click_card.enabled = false;
        this.players[pos].card_count_text.setVisible(false);
        this.players[pos].cursor.setVisible(false);


        if (pos == 0) {
            this.card.setVisible(false);
            this.cardTwo.setVisible(false);
            this.cardThree.setVisible(false);
            this.cardFour.setVisible(false);
            //this.playerName.setVisible(false);
        } else {
            this.cardB.setVisible(false);
            this.cardBTwo.setVisible(false);
            this.cardBThree.setVisible(false);
            this.cardBFour.setVisible(false);
            //this.playerNameTwo.setVisible(false);
        }

        //if(!this.clash_of_messages)
        //updateStatusWithDelay("LOSE YOUR SHIRT "+players.get(pos).getPlayer_name().toUpperCase()); todo
    }

    displayNames(playerA, playerB) {
        // this.playerName = this.add.text(this.cardTwo.x-(this.cardTwo.displayWidth/2),this.cardTwo.y-(this.cardTwo.displayHeight/2), playerA);
        // this.playerName.setBackgroundColor('#323232');
        // this.playerNameTwo = this.add.text(this.cardBTwo.x-(this.cardBTwo.displayWidth/2),this.cardBTwo.y-(this.cardBTwo.displayHeight/2), playerB);
        // this.playerNameTwo.setBackgroundColor('#323232');

        var countConfig = {
            x: 0,
            y: this.card.y + (this.card.displayHeight / 2),
            text: playerA + " Deck: XX",
            style: {
                font: '16px Arial',
                fill: '#ffffff',
                align: 'center'
            }
        };

        var countTwoConfig = {
            x: 0,
            y: this.cardB.y + (this.cardB.displayHeight / 2),
            text: playerB + " Deck: XX",
            style: {
                font: '16px Arial',
                fill: '#ffffff',
                align: 'center'
            }
        };


        //this.playerCount = this.add.text(this.card.x-(this.card.displayWidth/2)-40,this.card.y+(this.card.displayHeight/2), playerA+" CARDS: XX");
        //this.playerCountTwo = this.add.text(this.cardB.x-(this.cardB.displayWidth/2)-40,this.cardB.y+(this.cardB.displayHeight/2), playerB+" CARDS: XX");
        this.playerCount = this.make.text(countConfig);
        this.playerCountTwo = this.make.text(countTwoConfig);
        //this.playerCount.setPadding(this.width*0.425,5,this.width,5);
        //this.playerCountTwo.setPadding(this.width*0.425,5,this.width,5);

        var nameLetter = playerA.length;
        var nameTwoLetter = playerB.length;
        this.playerCount.setPadding(this.getNameSpacing(playerA), 5, this.width, 5);
        this.playerCountTwo.setPadding(this.getNameSpacing(playerB), 5, this.width, 5);

        if (this.orientation == 'horizontal') {
            this.playerCount.x = 0;
            this.playerCount.y = this.card.y + (this.card.displayHeight / 2);
            this.playerCountTwo.x = this.cardB.x - playerB.length * 7;
            this.playerCountTwo.y = this.cardB.y + (this.cardB.displayHeight / 2);
            this.playerCount.setPadding(5, 5, 5, 5);
            this.playerCountTwo.setPadding(5, 5, 5, 5);
            this.playerCount.style.font = "10px Arial";
            this.playerCountTwo.style.font = "10px Arial";

        }

    }

    // shuffle(array) {
    //     var tmp, current, top = array.length;
    //     if(top) while(--top) {
    //         current = Math.floor(Math.random() * (top + 1));
    //         tmp = array[current];
    //         array[current] = array[top];
    //         array[top] = tmp;
    //     }
    //     return array;
    // }
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    distributeCards() {

        for (var a = [], i = 0; i < 52; i++) a[i] = 1 + i;
        a = this.shuffle(a);
        a = this.shuffle(a);
        a = this.shuffle(a);


        if (this.players.length == 2) {
            this.playerOneCards = a.slice(0, 26);
            this.playerTwoCards = a.slice(26);
            this.players[0].cards = this.playerOneCards;
            this.players[1].cards = this.playerTwoCards;

        }

        console.log(this.players[0].cards);
        console.log(this.players[1].cards);

    }

    updateCardCount() {


        for (var i = 0; i < this.players.length; i++) {
            var mY = this.players[i].card_count_text.y;
            this.players[i].card_count_text.setText(this.players[i].name + " Deck: " + this.players[i].cards.length);

            if (this.orientation != 'horizontal') {
                this.players[i].card_count_text.setPadding(window.innerWidth, 10, window.innerWidth, 10);
                Phaser.Display.Align.In.TopCenter(this.players[i].card_count_text, this.background);
                this.players[i].card_count_text.y = mY;
            } else {
                this.players[i].card_count_text.setPadding(window.innerWidth, 10, window.innerWidth, 10);
                Phaser.Display.Align.In.TopCenter(this.players[i].card_count_text, this.players[i].cursor);
                this.players[i].card_count_text.y = mY;

            }
        }

        // this.playerCount.setText("COUNT: "+ this.playerOneCards.length);
        // this.playerCountTwo.setText("COUNT: "+ this.playerTwoCards.length);
    }

    updateStatus(stat) {

        this.current_instruction = stat;
        this.status.setText(stat);
        this.status.setPadding(window.innerWidth, 10, window.innerWidth, 10);
        Phaser.Display.Align.In.TopCenter(this.status, this.background);
        this.status.y = 0;

    }

    updateStatusWithDelay(stat) {
        // this.updateStatus(stat);
        var timedEvent;
        // this.handWinnerWork();

        timedEvent = this.time.addEvent({delay: 3000, callback: this.hideBottonStatus, callbackScope: this, repeat: 0});
        this.children.bringToTop(this.status_bottom);
        this.status_bottom.setText(stat);

        this.status_bottom.setPadding(window.innerWidth, 10, window.innerWidth, 10);
        Phaser.Display.Align.In.Center(this.status_bottom, this.background);

    }

    hideBottonStatus() {
        this.status_bottom.setText("");

        this.status_bottom.setPadding(window.innerWidth, 10, window.innerWidth, 10);
        Phaser.Display.Align.In.Center(this.status_bottom, this.background);
    }

    getCardKey(card) {
        if (card == 1)
            return 'aspades';
        else if (card == 2)
            return 'spades2';
        else if (card == 3)
            return 'spades3';
        else if (card == 4)
            return 'spades4';
        else if (card == 5)
            return 'spades5';
        else if (card == 6)
            return 'spades6';
        else if (card == 7)
            return 'spades7';
        else if (card == 8)
            return 'spades8';
        else if (card == 9)
            return 'spades9';
        else if (card == 10)
            return 'spades10';
        else if (card == 11)
            return 'jspades';
        else if (card == 12)
            return 'qspades';
        else if (card == 13)
            return 'kspades';

        else if (card == 14)
            return 'ahearts';
        else if (card == 15)
            return 'hearts2';
        else if (card == 16)
            return 'hearts3';
        else if (card == 17)
            return 'hearts4';
        else if (card == 18)
            return 'hearts5';
        else if (card == 19)
            return 'hearts6';
        else if (card == 20)
            return 'hearts7';
        else if (card == 21)
            return 'hearts8';
        else if (card == 22)
            return 'hearts9';
        else if (card == 23)
            return 'hearts10';
        else if (card == 24)
            return 'jhearts';
        else if (card == 25)
            return 'qhearts';
        else if (card == 26)
            return 'khearts';

        else if (card == 27)
            return 'aclubs';
        else if (card == 28)
            return 'clubs2';
        else if (card == 29)
            return 'clubs3';
        else if (card == 30)
            return 'clubs4';
        else if (card == 31)
            return 'clubs5';
        else if (card == 32)
            return 'clubs6';
        else if (card == 33)
            return 'clubs7';
        else if (card == 34)
            return 'clubs8';
        else if (card == 35)
            return 'clubs9';
        else if (card == 36)
            return 'clubs10';
        else if (card == 37)
            return 'jclubs';
        else if (card == 38)
            return 'qclubs';
        else if (card == 39)
            return 'kclubs';

        else if (card == 40)
            return 'adiamond';
        else if (card == 41)
            return 'diamond2';
        else if (card == 42)
            return 'diamond3';
        else if (card == 43)
            return 'diamond4';
        else if (card == 44)
            return 'diamond5';
        else if (card == 45)
            return 'diamond6';
        else if (card == 46)
            return 'diamond7';
        else if (card == 47)
            return 'diamond8';
        else if (card == 48)
            return 'diamond9';
        else if (card == 49)
            return 'diamond10';
        else if (card == 50)
            return 'jdiamond';
        else if (card == 51)
            return 'qdiamond';
        else if (card == 52)
            return 'kdiamond';
    }


}

export default Example1