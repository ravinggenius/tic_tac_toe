import React from 'react';

import Game from '../game';

var NewGameButton = React.createClass({
	startGame: function () {
		var players = this.props.loadPlayers();

		if (players[0] && players[1]) {
			var game = new Game(players[0], players[1]);
			game.start();
		} else {
			console.log('You must select two players');
		}
	},

	render: function () {
		return <button onClick={this.startGame}>Play!</button>;
	}
});

export default NewGameButton;
