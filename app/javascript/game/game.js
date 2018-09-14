import Phaser from './phaser';
import Example1 from './Example1';

var div = document.getElementById('strip-game');

var config = {

	type: Phaser.AUTO,
	width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},

	scene: [Example1],
	parent	: 'strip-game',
	title: 'Strip Pals'

};

var game = new Phaser.Game(config);


