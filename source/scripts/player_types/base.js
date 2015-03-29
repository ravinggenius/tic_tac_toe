export default class Base {
	constructor(mark) {
		this.mark = mark;
	}

	static code() {
		return this.label().toLowerCase();
	}
}
