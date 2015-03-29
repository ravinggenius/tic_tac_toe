import React from 'react';

var Board = React.createClass({
	render: function () {
		return <ol className="board">
			<li className="space">move0</li>
			<li className="space">move1</li>
			<li className="space">move2</li>
			<li className="space">move3</li>
			<li className="space">move4</li>
			<li className="space">move5</li>
			<li className="space">move6</li>
			<li className="space">move7</li>
			<li className="space">move8</li>
		</ol>;
	}
});

export default Board;
