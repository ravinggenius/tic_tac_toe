import React from 'react';

var Board = React.createClass({
	render: function () {
		var spaces = this.props.game.spaces.map(function (space) {
			return <li className="space" key={space.index}>{space.value}</li>;
		});

		return <ol className="board">{spaces}</ol>;
	}
});

export default Board;
