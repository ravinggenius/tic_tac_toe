export default class Base {
	constructor(mark) {
		this.mark = mark;
	}

	select(space) {
	}

	static code() {
		return this.label().toLowerCase();
	}
}
