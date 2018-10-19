import { arraysMatch } from '@writetome51/arrays-match/arraysMatch';
import { getAndRemoveFilteredResults } from './getAndRemoveFilteredResults';


let arr: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 1, 2, 3];


// Test 1: Make sure it gets items gotten by number-matching:
let filtered = getAndRemoveFilteredResults((item) => (item === 1 || item === 10), arr);
if (arraysMatch(filtered, [1, 10, 1, 1])) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: make sure those items were removed from array:
if (arraysMatch(arr, [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 2, 3])) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3: Make sure it gets items by string-matching:
arr = ['hello', '??', 2, 'h', 1, 5, 'h', 'mertyujkl;', 20];
filtered = getAndRemoveFilteredResults((item) => (item[0] === 'h'), arr);
if (arraysMatch(filtered, ['hello', 'h', 'h'])) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4: make sure those items were removed from array:
if (arraysMatch(arr, ['??', 2, 1, 5, 'mertyujkl;', 20]))
	console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: Make sure it gets boolean items:
arr = [[1, 2, 3], true, 10, false, 2, 'h', 1, 5, true];
filtered = getAndRemoveFilteredResults((item) => item === true, arr);
if (arraysMatch(filtered, [true, true])) console.log('test 5 passed');
else console.log('test 5 failed');


// Test 6: make sure those items were removed from array:
if (arraysMatch(arr, [[1, 2, 3], 10, false, 2, 'h', 1, 5]))
	console.log('test 6 passed');
else console.log('test 6 failed');


// Test 7: Make sure it can spot arrays and search their items:
arr = [[10, 2, 3], [2, 3, 4], 1, 5, 6, false, [10, 20]];
filtered = getAndRemoveFilteredResults((item) => {
	return (Array.isArray(item) && item[0] === 10);
}, arr);
if (arraysMatch(filtered, [[10, 2, 3], [10, 20]])) console.log('test 7 passed');
else console.log('test 7 failed');


// Test 8: make sure those items were removed from array:
if (arraysMatch(arr, [[2, 3, 4], 1, 5, 6, false]))
	console.log('test 8 passed');
else console.log('test 8 failed');


// Test 9: make sure error is triggered is first arg is not function:
let errorTriggered = false;
try {
	getAndRemoveFilteredResults(true, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 9 passed');
else console.log('test 9 failed');


// Test 10: make sure error is triggered is second arg is not array:
errorTriggered = false;
try {
	getAndRemoveFilteredResults(function (item) {
		return item === 1;
	}, {});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 10 passed');
else console.log('test 10 failed');


// Test 11: if testFunction doesn't match any item, an empty array should still get
// returned:
arr = [1, 2, 3, 4, 5, 6, 7];
filtered = getAndRemoveFilteredResults((item) => (typeof item === 'boolean'), arr);
if (filtered.length === 0) console.log('test 11 passed');
else console.log('test 11 failed');