import Base from './base';

export default class Naive extends Base {
	static label() { return 'Naive'; }

	move(spaces) {
		return spaces.remaining().at(0).index;
	}
}
