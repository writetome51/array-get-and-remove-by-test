import { removeByTest } from '@writetome51/array-remove-by-test';
import reverse from '@arr/reverse';


export function getAndRemoveByTest(
	test: (value, index?, array?) => boolean,
	array,
	getValue: (value, index?, array?) => any = (value) => value,

): any[] {
	let found = [];

	// Removes items in descending index order:
	removeByTest(test, array, (value, index, array) => {
		found.push(getValue(value, index, array));
	});

	// Return items in ascending index order:
	return reverse(found);
}
