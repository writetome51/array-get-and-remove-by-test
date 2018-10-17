import { getFilteredResults }
	from '@writetome51/array-get-filtered-results';
import { removeAllOfEach }
	from '@writetome51/array-remove-all-of-first-of/removeAllOf_removeAllOfEach';


export function getAndRemoveFilteredResults(testFunction, array): any[] {
	let filteredResults = getFilteredResults(testFunction, array);
	removeAllOfEach(filteredResults, array);
	return filteredResults;
}
