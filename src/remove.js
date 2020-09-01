export default function remove(map, A, B) {
	if (map.has(A)) {
		return map.get(A).delete(B);
	}

	return false;
}
