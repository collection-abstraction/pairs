import BasePairs from './BasePairs.js';
import insert from './insert.js';
import invertIterable from './invertIterable.js';
import remove from './remove.js';

export default class MemoryEfficientPairs extends BasePairs {
	static from(pairs) {
		const set = new MemoryEfficientPairs(new Map(), 0);
		return set.update(pairs);
	}

	// Set-like

	constructor(map, size) {
		super();
		this._map = map;
		this.size = size;
	}

	add([A, B]) {
		if (!this.has([A, B])) {
			insert(this._map, A, B);
			++this.size;
		}

		return this;
	}

	clear() {
		this.size = 0;
		this._map.clear();
		return undefined;
	}

	delete([A, B]) {
		if (remove(this._map, A, B)) {
			--this.size;
			return true;
		}

		return false;
	}

	// Custom

	invert() {
		return MemoryEfficientPairs.from(invertIterable(this.values()));
	}
}
