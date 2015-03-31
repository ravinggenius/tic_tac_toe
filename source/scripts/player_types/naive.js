import Base from './base';

export default class Naive extends Base {
	static label() { return 'Naive'; }

	move(spaces) {
		return Promise.resolve(spaces.remaining().at(0).index);
	}
}
