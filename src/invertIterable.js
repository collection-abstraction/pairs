import {map} from '@iterable-iterator/map';

import swap from './swap.js';

export default function invertIterable(iterable) {
	return map(swap, iterable);
}
