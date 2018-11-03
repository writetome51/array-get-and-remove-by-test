import { IValueIndexPair } from 'value-index-pair-interface/IValueIndexPair';
import { getFilteredResults } from '@writetome51/array-get-filtered-results';
import { removeByIndexes } from '@writetome51/array-remove-by-indexes';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
// @ts-ignore
let arrayPluck = require('array-pluck'); // extracts array from one property of array of objects.


export function getAndRemoveFilteredResults(
	testFunction: (currentValue, currentIndex?, array?) => boolean,
	array
): IValueIndexPair[] {

	let filteredResults: IValueIndexPair[] = getFilteredResults(testFunction, array);

	if (notEmpty(filteredResults)) {
		// get array of indexes from filteredResults objects:
		let indexes = arrayPluck(filteredResults, 'index');
		removeByIndexes(indexes, array);
	}
	return filteredResults;
}
