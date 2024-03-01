import test from 'ava';

import {MemoryEfficientPairs, EfficientlyInvertiblePairs} from '#module';

const macro = (t, Pairs, input, deleted) => {
	const result = Pairs.from(input);
	t.is(false, result.delete(deleted));
	t.is(input.length, result.size);
};

macro.title = (title, Pairs, input, deleted) =>
	title ||
	`${Pairs.name}.from(${JSON.stringify(input)}).delete(${JSON.stringify(
		deleted,
	)})`;

for (const Pairs of [MemoryEfficientPairs, EfficientlyInvertiblePairs]) {
	test(macro, Pairs, [], 'ab');
	test(
		macro,
		Pairs,
		[
			[1, 1],
			[1, 2],
		],
		'ab',
	);

	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb'], 'ax');
}
