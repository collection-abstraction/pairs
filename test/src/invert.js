import test from 'ava';

import {group} from '@iterable-iterator/group';
import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {sorted} from '@iterable-iterator/sorted';
import {lexicographical} from '@total-order/lex';
import {increasing} from '@total-order/primitive';

import {MemoryEfficientPairs, EfficientlyInvertiblePairs} from '#module';

const order = lexicographical(increasing);
const set = (x) =>
	list(map(([k]) => JSON.parse(k), group(JSON.stringify, sorted(order, x))));
const invert = (x) => map(([A, B]) => [B, A], x);

const macro = (t, Pairs, input) => {
	const pairs1 = Pairs.from(input);
	const pairs2 = pairs1.invert();
	const result1 = sorted(order, pairs1.values());
	const result2 = sorted(order, pairs2.values());
	const expected1 = set(map(list, input));
	const expected2 = set(invert(input));
	t.deepEqual(expected1, result1);
	t.deepEqual(expected2, result2);
};

macro.title = (title, Pairs, input) =>
	title || `${Pairs.name}.from(${JSON.stringify(input)}).invert()`;

for (const Pairs of [MemoryEfficientPairs, EfficientlyInvertiblePairs]) {
	test(macro, Pairs, []);
	test(macro, Pairs, [
		[1, 1],
		[1, 2],
	]);
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb']);
	test(macro, Pairs, ['ab', 'cd', 'ef', 'ad', 'fb', 'cd', 'xf']);
}
