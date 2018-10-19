import { getFilteredResults } from '@writetome51/array-get-filtered-results';
import { removeAllOfEach } from '@writetome51/array-remove-all-of-first-of';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';


export function getAndRemoveFilteredResults(testFunction, array): any[] {
	let filteredResults = getFilteredResults(testFunction, array);
	if (notEmpty(filteredResults)) removeAllOfEach(filteredResults, array);
	return filteredResults;
}
