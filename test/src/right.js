import test from 'ava';

import {permutations} from '@combinatorics/n-permutations';
import {filter} from '@iterable-iterator/filter';
import {map} from '@iterable-iterator/map';
import {sorted} from '@iterable-iterator/sorted';
import {enumerate} from '@iterable-iterator/zip';
import {increasing} from '@total-order/primitive';

import {MemoryEfficientPairs, EfficientlyInvertiblePairs} from '#module';

const set = (x) => sorted(increasing, new Set(x));
const right = (x) => map(([_A, B]) => B, x);

const macro = (t, Pairs, input) => {
	const pairs = Pairs.from(input);
	const r = set(right(input));
	t.deepEqual(r, sorted(increasing, pairs.right()));

	for (const deletionOrder of permutations(enumerate(input), input.length)) {
		const deletedIndexes = new Set();
		const _pairs = Pairs.from(input);
		for (const [i, toDelete] of deletionOrder) {
			_pairs.delete(toDelete);
			deletedIndexes.add(i);
			const _input = map(
				([_i, x]) => x,
				filter(([i, _x]) => !deletedIndexes.has(i), enumerate(input)),
			);
			const _expected = set(right(_input));
			t.deepEqual(_expected, sorted(increasing, _pairs.right()));
		}
	}
};

macro.title = (title, Pairs, input) =>
	title || `${Pairs.name}.from(${JSON.stringify(input)}).right()`;

for (const Pairs of [MemoryEfficientPairs, EfficientlyInvertiblePairs]) {
	test(macro, Pairs, []);
	test(macro, Pairs, [
		[1, 1],
		[1, 2],
	]);
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb']);
}
