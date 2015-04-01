import React from 'react';

import PlayerSelect from './player_select.jsx!';
import NewGameButton from './new_game_button.jsx!';

var GameManager = React.createClass({
	getInitialState: function () {
		return {
			player1: null,
			player2: null
		};
	},

	setPlayer: function (playerKey, player) {
		this.setState({
			[playerKey]: player
		});
	},

	loadPlayers: function () {
		return [
			this.state.player1,
			this.state.player2
		];
	},

	render: function () {
		return <fieldset className="setup">
			<legend>Choose Players</legend>

			<PlayerSelect id="player1" label="Player One" mark="X" onChange={this.setPlayer.bind(this, 'player1')} />
			<PlayerSelect id="player2" label="Player Two" mark="O" onChange={this.setPlayer.bind(this, 'player2')} />

			<NewGameButton loadPlayers={this.loadPlayers} />
		</fieldset>;
	}
});

export default GameManager;
