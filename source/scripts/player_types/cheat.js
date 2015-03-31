import _ from 'lodash';

import Base from './base';

export default class Cheat extends Base {
	static label() { return 'Cheat'; }

	move(spaces) {
		var nextIndex = _.difference(this.strategies()[this.mark], this.takenIndexes(spaces))[0];

		var freeIndexes = spaces.remaining().indexes();
		spaces.at(_.sample(freeIndexes)).value = spaces.at(nextIndex).value;

		spaces.at(nextIndex).value = null;

		return Promise.resolve(nextIndex);
	}

	strategies() {
		return {
			X: [ 0, 4, 8 ],
			O: [ 2, 5, 8 ]
		};
	}

	takenIndexes(spaces) {
		return spaces.filter(function (space) {
			return space.value === this.mark;
		}.bind(this)).map(function (space) {
			return space.index;
		});
	}
}
