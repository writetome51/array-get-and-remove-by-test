import {removeByTest} from '@writetome51/array-remove-by-test';
import {prepend} from '@writetome51/array-append-prepend';


export function getAndRemoveByTest(
	test,
	array,
	getValue = (value) => value
) {
	let found = [];

	// Removes items in descending index order:
	removeByTest(test, array, (value, index, array) => {
		prepend(getValue(value, index, array), found);
	});

	return found;
}
