import test from 'ava';

import {sorted} from '@iterable-iterator/sorted';
import {map} from '@iterable-iterator/map';
import {list} from '@iterable-iterator/list';
import {group} from '@iterable-iterator/group';

import {increasing} from '@total-order/primitive';
import {lexicographical} from '@total-order/lex';

import {MemoryEfficientPairs, EfficientlyInvertiblePairs} from '#module';

const order = lexicographical(increasing);
const set = (x) =>
	list(map(([k]) => JSON.parse(k), group(JSON.stringify, sorted(order, x))));

const macro = (t, Pairs, input) => {
	const result = sorted(order, Pairs.from(input).entries());
	const expected = set(map((x) => [list(x), list(x)], input));
	t.deepEqual(expected, result);
};

macro.title = (title, Pairs, input) =>
	title || `${Pairs.name}.from(${JSON.stringify(input)}).entries()`;

for (const Pairs of [MemoryEfficientPairs, EfficientlyInvertiblePairs]) {
	test(macro, Pairs, []);
	test(macro, Pairs, [
		[1, 1],
		[1, 2],
	]);
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb']);
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb', 'cd', 'xf']);
}
