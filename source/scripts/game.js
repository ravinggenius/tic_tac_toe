import React from 'react';

import Board from './components/board.jsx!';

export default class Game {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
	}

	start() {
		this.drawBoard();
		// ready player 1
	}

	drawBoard() {
		React.render(React.createElement(Board, {
			marks: this.marks()
		}), document.getElementsByClassName('board-wrap')[0]);
	}

	marks() {
		return [
			'move0',
			'move1',
			'move2',
			'move3',
			'move4',
			'move5',
			'move6',
			'move7',
			'move8'
		];
	}
}
