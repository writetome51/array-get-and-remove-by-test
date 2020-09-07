import {arraysMatch} from '@writetome51/arrays-match';
import {getAndRemoveByTest} from './index.js';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 1, 2, 3];
let otherArr = arr;

console.time('check');

// Test 1: Make sure it gets items gotten by number-matching:
let filtered = getAndRemoveByTest((item) => (item === 1 || item === 10), arr);
console.timeEnd('check');
if (arraysMatch(filtered, [1, 10, 1, 1])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: make sure those items were removed:
if (arraysMatch(arr, [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 2, 3])) console.log('test 2 passed');
else console.log('test 2 FAILED');


//Test 2A: Make sure the memory reference connection with otherArr hasn't been broken:
if (arr === otherArr) console.log('test 2A passed');
else console.log('test 2A FAILED');


// Test 3: Make sure it gets items by string-matching:
arr = ['hello', '??', 2, 'h', 1, 5, 'h', 'mertyujkl;', 20];
filtered = getAndRemoveByTest((item) => (item[0] === 'h'), arr);
if (arraysMatch(filtered, ['hello', 'h', 'h'])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: make sure those items were removed from array:
if (arraysMatch(arr, ['??', 2, 1, 5, 'mertyujkl;', 20])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: Make sure it gets boolean items:
arr = [[1, 2, 3], true, 10, false, 2, 'h', 1, 5, true];
filtered = getAndRemoveByTest(
	(item) => typeof item === 'boolean',
	arr,
	(value, index) => {
		return {value, index};
	}
);
console.log(filtered);
if (filtered.length === 3 && filtered[0]['value'] === true && filtered[1]['value'] === false &&
	filtered[2]['value'] === true &&
	filtered[0]['index'] === 1 && filtered[1]['index'] === 3 && filtered[2]['index'] === 8)
	console.log('test 5 passed');
else console.log('test 5 FAILED');




// Test 6: make sure those items were removed from array:
if (arraysMatch(arr, [[1, 2, 3], 10, 2, 'h', 1, 5])) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: Make sure it can spot arrays and search their items:
arr = [[10, 2, 3], [2, 3, 4], 1, 5, 6, false, [10, 20]];
filtered = getAndRemoveByTest(
	(item) => (Array.isArray(item) && item[0] === 10),
	arr,
	(value) => value[1]
);
if (arraysMatch(filtered, [2, 20])) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8: make sure those items were removed from array:
if (arraysMatch(arr, [[2, 3, 4], 1, 5, 6, false])) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9: make sure error is triggered is first arg is not function:
let errorTriggered = false;
try {
	getAndRemoveByTest(true, arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 FAILED');


// Test 11: if testFunction doesn't match any item, an empty array should still get
// returned:
arr = [1, 2, 3, 4, 5, 6, 7];
filtered = getAndRemoveByTest((item) => (typeof item === 'boolean'), arr);
if (Array.isArray(filtered) && filtered.length === 0) console.log('test 11 passed');
else console.log('test 11 FAILED');


// Test 12: if testFunction doesn't match any item, an empty array should still get
// returned:
arr = [1,2,3,4];
filtered = getAndRemoveByTest((item) => (typeof item === 'number'), arr);
if (arraysMatch(filtered, [1,2,3,4])) console.log('test 12 passed');
else console.log('test 12 FAILED');


if (arraysMatch(arr, [])) console.log('test 13 passed');
else console.log('test 13 FAILED');



