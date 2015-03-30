import Base from './base';

export default class Human extends Base {
	static label() { return 'Human'; }

	move(spaces) {
		var choices = spaces.remaining().indexes();
		return parseInt(prompt('Pick a number: ' + choices), 10);
	}
}
