import { getFilteredResults } from '@writetome51/array-get-filtered-results';
import { removeItems } from '@writetome51/array-remove-items';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
// @ts-ignore
let arrayPluck = require('array-pluck'); // extracts array from one property of array of objects.



export function getAndRemoveFilteredResults(
	testFunction: (currentValue, currentIndex?, array?) => boolean,
	array
): object[] {

	// filteredResults is array of objects that match interface {value: any,  index: integer}
	let filteredResults = getFilteredResults(testFunction, array);

	if (notEmpty(filteredResults)) {
		// get array of indexes from filteredResults objects:
		let indexes = arrayPluck(filteredResults, 'index');
		removeItems(indexes, array);
	}
	return filteredResults;
}
