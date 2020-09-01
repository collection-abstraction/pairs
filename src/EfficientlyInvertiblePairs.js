import BasePairs from './BasePairs';
import insert from './insert';
import remove from './remove';

export default class EfficientlyInvertiblePairs extends BasePairs {
	static from(pairs) {
		const set = new EfficientlyInvertiblePairs(new Map(), new Map(), 0);
		return set.update(pairs);
	}

	// Set-like

	constructor(map, imap, size) {
		super();
		this._map = map;
		this._imap = imap;
		this.size = size;
	}

	add([A, B]) {
		if (!this.has([A, B])) {
			insert(this._map, A, B);
			insert(this._imap, B, A);
			++this.size;
		}

		return this;
	}

	clear() {
		this.size = 0;
		this._map.clear();
		this._imap.clear();
		return undefined;
	}

	delete([A, B]) {
		if (remove(this._map, A, B)) {
			remove(this._imap, B, A);
			--this.size;
			return true;
		}

		return false;
	}

	// Custom

	right() {
		return this._imap.keys();
	}

	*leftOf(B) {
		if (this._imap.has(B)) yield* this._imap.get(B);
	}

	invert() {
		return new EfficientlyInvertiblePairs(this._imap, this._map, this.size);
	}
}
