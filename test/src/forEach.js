import test from 'ava';

import {sorted, map, list, group} from '@aureooms/js-itertools';
import {lexicographical, increasing} from '@aureooms/js-compare';

import {MemoryEfficientPairs, EfficientlyInvertiblePairs} from '../../src';

const order = lexicographical(increasing);
const set = (x) =>
	list(map(([k]) => JSON.parse(k), group(JSON.stringify, sorted(order, x))));

const macro = (t, Pairs, input) => {
	const pairs = Pairs.from(input);
	const _pairs = [];
	pairs.forEach((pair) => _pairs.push(pair));
	const result = sorted(order, _pairs);
	const expected = set(map(list, input));
	t.deepEqual(expected, result);
};

macro.title = (title, Pairs, input) =>
	title || `${Pairs.name}.from(${JSON.stringify(input)}).forEach(...)`;

for (const Pairs of [MemoryEfficientPairs, EfficientlyInvertiblePairs]) {
	test(macro, Pairs, []);
	test(macro, Pairs, [
		[1, 1],
		[1, 2],
	]);
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb']);
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb', 'cd', 'xf']);
}
