import React from 'react';

var Results = React.createClass({
	render: function () {
		var game = this.props.game;

		if (game.isOver()) {
			var winner = game.spaces.winner() || 'Cat';
			return <p class="results">{winner} wins</p>;
		} else {
			return <p class="results"></p>;
		}
	}
});

export default Results;
