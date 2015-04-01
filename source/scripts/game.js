import React from 'react';

import SpaceSet from './space_set';
import Board from './components/board.jsx!';

export default class Game {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;

		this.spaces = new SpaceSet();
	}

	start() {
		this.render();
		this.waitForPlayer(this.player1, this.player2);
	}

	isOver() {
		return this.spaces.winner() ||
			!this.spaces.remaining().count();
	}

	legalMove(selection) {
		return (parseInt(selection, 10) === selection) &&
			!this.spaces.at(selection).value;
	}

	select(space) {
		if (!this.isOver()) {
			this._currentPlayer.select(space);
		}
	}

	render() {
		React.render(React.createElement(Board, {
			game: this
		}), document.getElementsByClassName('board-wrap')[0]);
	}

	waitForPlayer(currentPlayer, otherPlayer) {
		if (this.isOver()) {
			console.log('game over', this.spaces.winner(), 'wins');
		} else {
			this._currentPlayer = currentPlayer;

			currentPlayer.move(this.spaces).then(function (selection) {
				console.log('PICK:', selection);

				if (this.legalMove(selection)) {
					this.spaces.at(selection).value = currentPlayer.mark;
				} else {
					throw new Error('Illegal move');
				}
			}.bind(this)).then(function () {
				this.render();
			}.bind(this)).then(function () {
				this.waitForPlayer(otherPlayer, currentPlayer);
			}.bind(this));
		}
	}
}
