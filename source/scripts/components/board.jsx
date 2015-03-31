import React from 'react';

var Board = React.createClass({
	broadcast: function (space) {
		this.props.game.select(space);
	},

	render: function () {
		var spaces = this.props.game.spaces.map(function (space) {
			return <li className="space" key={space.index} onClick={this.broadcast.bind(this, space)}>{space.value}</li>;
		}.bind(this));

		return <ol className="board">{spaces}</ol>;
	}
});

export default Board;
