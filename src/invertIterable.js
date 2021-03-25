import {map} from '@aureooms/js-itertools';
import swap from "./swap.js";

export default function invertIterable(iterable) {
	return map(swap, iterable);
}
