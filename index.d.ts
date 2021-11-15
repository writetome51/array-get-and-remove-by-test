export declare const getAndRemoveByTest: <T, X>(
	test: (value: T, index?: number, array?: T[]) => boolean,
	array: T[],
	getValue?: (value: T, index?: number, array?: T[]) => X
) => X[];
