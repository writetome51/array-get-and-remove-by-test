import { removeByIndex } from '@writetome51/array-remove-by-index';
import reverse from '@arr/reverse';


export function getAndRemoveByTest(
	test: (value, index?, array?) => boolean,
	array,
	getValue: (value, index?, array?) => any = (value) => value,

): any[] {

	let found = [];
	const action = (value, index) => {
		found.push(getValue(value, index, array));
		removeByIndex(index, array);
	};
	forEach_ifPasses_doAction_fromRight(test, action, array);

	// Returns items in ascending index order
	return reverse(found);


	function forEach_ifPasses_doAction_fromRight(
		test: (value, index?, array?) => boolean,
		action: (value?, index?, array?) => void,
		array
	) {
		for (let i = array.length - 1;  i > -1;  --i) {
			if (test(array[i], i, array))  action(array[i], i, array);
		}
	}

}
