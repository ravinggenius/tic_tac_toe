import React from 'react';

var Board = React.createClass({
	render: function () {
		var spaces = this.props.marks.map(function (mark, index) {
			return <li className="space" key={index}>{mark}</li>;
		});

		return <ol className="board">{spaces}</ol>;
	}
});

export default Board;
