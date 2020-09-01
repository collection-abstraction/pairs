export default function remove(map, A, B) {
	if (map.has(A)) {
		const right = map.get(A);
		if (right.delete(B)) {
			if (right.size === 0) map.delete(A);
			return true;
		}
	}

	return false;
}
