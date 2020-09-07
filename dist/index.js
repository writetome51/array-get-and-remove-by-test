import { removeByIndex } from '@writetome51/array-remove-by-index';
import reverse from '@arr/reverse';
export function getAndRemoveByTest(test, array, getValue = (value) => value) {
    let found = [];
    const action = (value, index) => {
        found.push(getValue(value, index, array));
        removeByIndex(index, array);
    };
    forEach_ifPasses_doAction_fromRight(test, action, array);
    // Returns items in ascending index order
    return reverse(found);
    function forEach_ifPasses_doAction_fromRight(test, action, array) {
        for (let i = array.length - 1; i > -1; --i) {
            if (test(array[i], i, array))
                action(array[i], i, array);
        }
    }
}
