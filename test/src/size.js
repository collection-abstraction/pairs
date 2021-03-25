import test from 'ava';

import {enumerate} from '@aureooms/js-itertools';

import {
	MemoryEfficientPairs,
	EfficientlyInvertiblePairs,
} from '../../src/index.js';

const macro = (t, Pairs, input) => {
	const result = Pairs.from(input);
	const expected = input.length;
	t.is(expected, result.size);
	for (const [i, pair] of enumerate(input)) {
		t.is(expected - i, result.size);
		t.is(true, result.delete(pair));
		t.is(false, result.delete(pair));
	}

	t.is(0, result.size);
};

macro.title = (title, Pairs, input) =>
	title || `${Pairs.name}.from(${JSON.stringify(input)}).size`;

for (const Pairs of [MemoryEfficientPairs, EfficientlyInvertiblePairs]) {
	test(macro, Pairs, []);
	test(macro, Pairs, [
		[1, 1],
		[1, 2],
	]);

	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb']);
}
