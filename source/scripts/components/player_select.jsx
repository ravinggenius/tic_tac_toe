import React from 'react';

import PlayerTypes from '../player_types';

var PlayerSelect = React.createClass({
	changePlayerSelection: function (event) {
		var playerTypeCode = event.target.value;
		var player = playerTypeCode ? PlayerTypes[playerTypeCode](this.props.mark) : null;

		this.props.onChange(player);
	},

	render: function () {
		var options = PlayerTypes.all().map(function (PlayerType) {
			return <option key={PlayerType.code()} value={PlayerType.code()}>{PlayerType.label()}</option>;
		});

		return <div className="field field-select">
			<label htmlFor={this.props.id}>{this.props.label}</label>
			<select id={this.props.id} onChange={this.changePlayerSelection}>
				<option></option>
				{options}
			</select>
		</div>;
	}
});

export default PlayerSelect;
