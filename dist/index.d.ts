import { IValueIndexPair } from 'value-index-pair-interface/IValueIndexPair';


export declare function getAndRemoveByTest(
	testFunction: (currentValue: any, currentIndex?: number, theArray?: any[]) => boolean,
	array: any[]
): IValueIndexPair[];
