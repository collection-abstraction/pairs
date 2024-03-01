import test from 'ava';

import {MemoryEfficientPairs, EfficientlyInvertiblePairs} from '#module';

const macro = (t, Pairs, input) => {
	const result = Pairs.from(input);
	const out = result.clear();
	t.is(undefined, out);
	t.is(result.size, 0);
	t.deepEqual([], [...result.values()]);
};

macro.title = (title, Pairs, input) =>
	title || `${Pairs.name}.from(${JSON.stringify(input)}).clear()`;

for (const Pairs of [MemoryEfficientPairs, EfficientlyInvertiblePairs]) {
	test(macro, Pairs, []);
	test(macro, Pairs, [
		[1, 1],
		[1, 2],
	]);
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb']);
}
