export default function* iterableFromMap(map) {
	for (const [A, others] of map.entries()) {
		for (const B of others.values()) yield [A, B];
	}
}
