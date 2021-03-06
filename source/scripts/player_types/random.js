import _ from 'lodash';

import Base from './base';

export default class Random extends Base {
	static label() { return 'Random'; }

	move(spaces) {
		return Promise.resolve(_.sample(spaces.remaining().indexes()));
	}
}
