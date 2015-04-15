import _ from 'lodash';

import Base from './base';
import SpaceSet from '../space_set';

export default class Allea extends Base {
	static label() { return 'Allea'; }

	move(spaces) {
		var calculateNextMove = function (resolve, reject) {
			var index = Allea.strategyFor(this.mark).reduce(function (found, choose) {
				return (typeof found === 'number') ? found : choose(spaces);
			}, undefined);

			resolve(index);
		}.bind(this);

		return new Promise(calculateNextMove);
	}

	static strategyFor(mark) {
		return [
			Allea.announce('winning move'),
			Allea.findCompletionFor(mark),

			Allea.announce('blocking move'),
			Allea.findCompletionFor(Allea.invertMark(mark)),

			Allea.announce('diagonal corner'),
			Allea.diagonalCorner(mark),

			Allea.announce('any corner'),
			Allea.anyCorner,

			Allea.announce('any space'),
			Allea.anySpace
		];
	}

	static invertMark(mark) {
		return {
			X: 'O',
			O: 'X'
		}[mark];
	}

	static announce(message) {
		return function (spaces) {
			console.log('STEP:', message);
		};
	}

	static findCompletionFor(mark) {
		return function (spaces) {
			return _.find(spaces.remaining().indexes(), function (index) {
				return _.find(SpaceSet.completions(), function (_completion) {
					var twoOfThree = _completion.reduce(function (memo, _index) {
						return (spaces.at(_index).value === mark) ? memo.concat(_index) : memo;
					}, []);

					return (_completion.indexOf(index) >= 0) &&
						(twoOfThree.length === 2);
				});
			});
		};
	}

	static diagonalCorner(mark) {
		return function (spaces) {
			var diagonals = [
				[ 0, 8 ],
				[ 2, 6 ]
			];

			var diagonal = _.find(diagonals, function (_diagonal) {
				return (spaces.at(_diagonal[0]).value === mark) &&
					(spaces.at(_diagonal[1]).value === null);
			});

			if (diagonal) {
				return diagonal[1];
			}
		};
	}

	static anyCorner(spaces) {
		return [
			0, 2,
			6, 8
		].reduce(function (found, index) {
			if (typeof found === 'number') {
				return found;
			} else {
				var space = spaces.at(index);
				return space.value ? undefined : space.index;
			}
		}, undefined);
	}

	static anySpace(spaces) {
		return spaces.remaining().indexes()[0];
	}
}
