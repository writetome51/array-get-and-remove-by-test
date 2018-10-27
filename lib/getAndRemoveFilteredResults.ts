import { getFilteredResults } from '@writetome51/array-get-filtered-results';
import { removeAllOf } from '@writetome51/array-remove-all-of-first-of';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';


export function getAndRemoveFilteredResults(
	testFunction: (currentValue, currentIndex?, array?) => boolean,
	array
): object[] {

	// filteredResults is array of objects that match interface {value: any,  index: integer}
	let filteredResults = getFilteredResults(testFunction, array);
	let removalMarker = '***marked-for-removal***';

	if (notEmpty(filteredResults)) {
		replaceFilteredItemsWithRemovalMarker(array);

		removeAllOf(removalMarker, array);
	}
	return filteredResults;


	function replaceFilteredItemsWithRemovalMarker(array) {
		let i = -1, indexToReplace: number;
		while (++i < filteredResults.length) {
			indexToReplace = filteredResults[i]['index'];
			array[indexToReplace] = removalMarker;
		}
	}
}
