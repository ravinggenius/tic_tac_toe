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
		React.render(React.createElement(Board, null), document.getElementsByClassName('board-wrap')[0]);
	}
}
