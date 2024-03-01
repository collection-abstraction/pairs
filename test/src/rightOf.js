import test from 'ava';

import {sorted} from '@iterable-iterator/sorted';
import {map} from '@iterable-iterator/map';
import {filter} from '@iterable-iterator/filter';
import {enumerate} from '@iterable-iterator/zip';
import {permutations} from '@combinatorics/n-permutations';

import {increasing} from '@total-order/primitive';

import {MemoryEfficientPairs, EfficientlyInvertiblePairs} from '#module';

const set = (x) => sorted(increasing, new Set(x));
const right = (x) => map(([_A, B]) => B, x);
const rightOf = (x, a) => right(filter(([A, _B]) => a === A, x));

const macro = (t, Pairs, input, ohs) => {
	const pairs = Pairs.from(input);
	const expected = set(rightOf(input, ohs));
	t.deepEqual(expected, sorted(increasing, pairs.rightOf(ohs)));

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
			const _expected = set(rightOf(_input, ohs));
			t.deepEqual(_expected, sorted(increasing, _pairs.rightOf(ohs)));
		}
	}
};

macro.title = (title, Pairs, input, ohs) =>
	title || `${Pairs.name}.from(${JSON.stringify(input)}).rightOf(${ohs})`;

for (const Pairs of [MemoryEfficientPairs, EfficientlyInvertiblePairs]) {
	test(macro, Pairs, [], 0);
	test(
		macro,
		Pairs,
		[
			[1, 1],
			[1, 2],
		],
		1,
	);
	test(
		macro,
		Pairs,
		[
			[1, 1],
			[1, 2],
		],
		2,
	);
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb'], 'a');
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb'], 'b');
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb'], 'c');
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb'], 'd');
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb'], 'e');
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb'], 'f');
}
