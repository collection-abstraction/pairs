import {NotImplementedError} from '@failure-abstraction/error';
import {filter} from '@iterable-iterator/filter';
import {map} from '@iterable-iterator/map';

import iterableFromMap from './iterableFromMap.js';

export default class BasePairs {
	// Set-like
	add() {
		throw new NotImplementedError('BasePairs#add: Not implemented.');
	}

	clear() {
		throw new NotImplementedError('BasePairs#clear: Not implemented.');
	}

	delete() {
		throw new NotImplementedError('BasePairs#delete: Not implemented.');
	}

	has([A, B]) {
		return this._map.has(A) && this._map.get(A).has(B);
	}

	values() {
		return iterableFromMap(this._map);
	}

	*entries() {
		for (const value of this.values()) yield [value, value];
	}

	keys() {
		return this.values();
	}

	[Symbol.iterator]() {
		return this.values();
	}

	forEach(callbackFn, thisArg = this) {
		for (const value of this.values()) callbackFn.call(thisArg, value);
	}

	// Custom

	update(pairs) {
		for (const pair of pairs) this.add(pair);
		return this;
	}

	left() {
		return this._map.keys();
	}

	right() {
		return new Set(map((x) => x[1], this.values())).keys();
	}

	*rightOf(A) {
		if (this._map.has(A)) yield* this._map.get(A);
	}

	leftOf(B) {
		return map(
			(x) => x[0],
			filter((x) => B === x[1], this.values()),
		);
	}
}
