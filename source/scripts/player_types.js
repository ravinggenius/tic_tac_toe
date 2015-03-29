import Allea from './player_types/allea';
import Cheat from './player_types/cheat';
import Human from './player_types/human';
import Naive from './player_types/naive';
import Random from './player_types/random';

let ALL = [
	Allea,
	Cheat,
	Human,
	Naive,
	Random
];

class PlayerTypes {
	static all() {
		return ALL
	}
};

ALL.forEach(function (PlayerType) {
	PlayerTypes[PlayerType.code()] = function (mark) {
		return new PlayerType(mark);
	};
});

export default PlayerTypes;
