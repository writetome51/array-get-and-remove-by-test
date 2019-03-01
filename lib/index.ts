import { IValueIndexPair } from 'value-index-pair-interface/IValueIndexPair';
import { getByTest } from '@writetome51/array-get-by-test';
import { removeByIndexes } from '@writetome51/array-remove-by-indexes';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { getArrayFromProperty } from '@writetome51/get-array-from-property';


export function getAndRemoveByTest(
	testFunction: (currentValue, currentIndex?, theArray?) => boolean,
	array
): IValueIndexPair[] {

	let filteredResults: IValueIndexPair[] = getByTest(testFunction, array);

	if (notEmpty(filteredResults)) {
		let indexes = getArrayFromProperty('index', filteredResults);
		removeByIndexes(indexes, array);
	}
	return filteredResults;
}
