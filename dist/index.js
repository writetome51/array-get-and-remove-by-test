import {getArrayFromProperty} from '@writetome51/get-array-from-property';
import {getByTest} from '@writetome51/array-get-by-test';
import {notEmpty} from '@writetome51/is-empty-not-empty';
import {removeByIndexes} from '@writetome51/array-remove-by-indexes';


export function getAndRemoveByTest(testFunction, array) {

	let found = getByTest(testFunction, array);

	if (notEmpty(found)) {
		let indexes = getArrayFromProperty('index', found);
		removeByIndexes(indexes, array);
	}
	return found;
}
