# getAndRemoveByTest(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test: (value, index?, array?) => boolean,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getValue?: (value, index?, array?) => any<br>): any[]

Removes and returns any item in `array` that passes `test`.  
Includes optional callback `getValue()`, which lets you customize what value to get  
from the element that passes `test`. By default `getValue()` simply returns the element.  


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
    (value, index) => { return {value, index}; }
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
