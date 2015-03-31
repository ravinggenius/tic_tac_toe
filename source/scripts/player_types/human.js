import Base from './base';

export default class Human extends Base {
	static label() { return 'Human'; }

	move(spaces) {
		var checkResolve = function (resolve, reject) {
			var choices = spaces.remaining().indexes();

			if ((typeof this._selectedIndex === 'number') && (choices.indexOf(this._selectedIndex) !== -1)) {
				var selectedIndex = this._selectedIndex;
				delete this._selectedIndex;
				resolve(selectedIndex);
			} else {
				checkResolveLater(resolve, reject);
			}
		};

		var checkResolveLater = function (resolve, reject) {
			setTimeout(checkResolve.bind(this, resolve, reject), 20);
		}.bind(this);

		return new Promise(checkResolveLater);
	}

	select(space) {
		this._selectedIndex = space.index;
	}
}
