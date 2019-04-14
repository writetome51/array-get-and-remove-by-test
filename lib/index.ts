import { getArrayFromProperty } from '@writetome51/get-array-from-property';
import { getByTest } from '@writetome51/array-get-by-test';
import { IValueIndexPair } from 'value-index-pair-interface/IValueIndexPair';
import { notEmpty } from '@writetome51/is-empty-not-empty';
import { removeByIndexes } from '@writetome51/array-remove-by-indexes';


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
