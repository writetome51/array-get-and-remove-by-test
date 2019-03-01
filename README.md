# getAndRemoveByTest(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;testFunction,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>):  IValueIndexPair[]

Removes and returns any item in `array` that passes a `testFunction`.  
`testFunction = function(value,  index?,  theArray?): boolean`

The removed items are returned as IValueIndexPairs.  
A IValueIndexPair is this object: `{value: any,  index: integer}` .

## Example
```
let arr = [1,2,3,4,5,6,7,8,9,10];

let removed = getAndRemoveByTest((item) => (item * 2) === 10,  arr);
// removed is [ {value: 5, index: 4} ]
// arr is now [1,2,3,4,6,7,8,9,10]
    
arr = [ [10, 2, 3], [2, 3, 4], 1, 6, false, [10, 20] ];

removed = getAndRemoveByTest(
    (item) => (Array.isArray(item) && item[0] === 10),
    arr
);
// removed is [ {value: [10, 2, 3], index: 0},  {value: [10, 20], index: 5} ]
// arr is now [ [2, 3, 4], 1, 6, false ]
```


## Installation
```bash
npm install @writetome51/array-get-and-remove-by-test
```

## Loading
```
// If using TypeScript:
import {getAndRemoveByTest} from '@writetome51/array-get-and-remove-by-test';
// If using ES5 JavaScript:
var getAndRemoveByTest = 
    require('@writetome51/array-get-and-remove-by-test').getAndRemoveByTest;
```
