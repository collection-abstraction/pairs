export default function insert(map, A, B) {
	if (map.has(A)) {
		map.get(A).add(B);
	} else {
		map.set(A, new Set([B]));
	}
}
