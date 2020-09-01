import {map} from '@aureooms/js-itertools';
import swap from './swap';

export default function invertIterable(iterable) {
	return map(swap, iterable);
}
