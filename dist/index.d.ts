export declare function getAndRemoveByTest(
	testFunction: (value: any, index?: number, array?: any[]) => boolean,
	array: any[]
): Array<{ value: any; index: number; }>;
