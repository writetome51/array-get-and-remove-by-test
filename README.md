# getAndRemoveByTest\<T, X\>(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test: (<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: T, index?: number, array?: T[]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) => boolean,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array: T[],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getValue?: (<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: T, index?: number, array?: T[]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) => X<br>): X[]

Removes and returns items in `array` that pass `test`.  
Includes optional callback `getValue()`, which lets you customize what value to get from an element 
that passes `test`.


## Examples
```js
let arr = ['hello', '??', 2, 'h', 1, 5, 'h', 'mertyujkl;', 20];
getAndRemoveByTest((item) => (item[0] === 'h'), arr);
// --> ['hello', 'h', 'h']
// arr is now ['??', 2, 1, 5, 'mertyujkl;', 20];


arr = [true, 10, false, 2, 'h', 1, true];
getAndRemoveByTest(
    (item) => typeof item === 'boolean',
    arr,
    (value, index) => ( {value, index} )
);
/**********
Returns:
[
  { value: true, index: 0 },
  { value: false, index: 2 },
  { value: true, index: 6 }
]

arr is now  [10, 2, 'h', 1];
**********/
```


## Installation
```bash
npm i @writetome51/array-get-and-remove-by-test
```

## Loading
```js
import {getAndRemoveByTest} from '@writetome51/array-get-and-remove-by-test';
```
