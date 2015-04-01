import _ from 'lodash';

export default class SpaceSet {
	constructor(spaces = [
			{ index: 0, value: null }, { index: 1, value: null }, { index: 2, value: null },
			{ index: 3, value: null }, { index: 4, value: null }, { index: 5, value: null },
			{ index: 6, value: null }, { index: 7, value: null }, { index: 8, value: null }
		]) {
		this._spaces = spaces;
	}


	at(index) {
		return this._spaces[index];
	}

	count() {
		return this._spaces.length;
	}

	filter(callback) {
		return this._spaces.filter(callback);
	}

	map(callback) {
		return this._spaces.map(callback);
	}


	indexes() {
		return this.map(function (space) {
			return space.index;
		});
	}

	lineAt(combination) {
		return this.filter(function (space) {
			return combination.indexOf(space.index) >= 0;
		});
	}

	remaining() {
		return new SpaceSet(this.filter(function (space) {
			return space.value === null;
		}));
	}

	winner() {
		var completion = _.find(SpaceSet.completions(), function (completion) {
			var spaces = completion.map(function (index) {
				return this.at(index);
			}.bind(this));

			return spaces[0].value &&
				(spaces[0].value === spaces[1].value) &&
				(spaces[1].value === spaces[2].value);
		}.bind(this));

		if (completion) {
			return this.at(completion[0]).value;
		}
	}

	static completions() {
		return [
			[ 0, 1, 2 ],
			[ 3, 4, 5 ],
			[ 6, 7, 8 ],

			[ 0, 3, 6 ],
			[ 1, 4, 7 ],
			[ 2, 5, 8 ],

			[ 0, 4, 8 ],
			[ 2, 4, 6 ]
		];
	}
}
