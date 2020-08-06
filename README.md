# getAndRemoveByTest(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;testFn: (value, index?, array?) => boolean,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): Array<{ value: any, index: number }>

Removes and returns any item in `array` that passes a `testFn`.  
Each item returned is represented as: `{value: any,  index: number}` .

## Examples
```js
let arr = ['a', 'bb', 'c', 'dd', 'e', 'ff'];
getAndRemoveByTest((value) => value.length > 1, arr);
// -->  [{value:'bb', index:1}, {value:'dd', index:3}, {value:'ff', index:5}]
// 
// arr is now ['a', 'c', 'e']

arr = [50, -10, 100, -20, 1000, -100];
getAndRemoveByTest((item) => item < 0, arr);
// --> [{value: -10, index:1}, {value: -20, index:3}, {value: -100, index:5}]
// 
// arr is now [50, 100, 1000]
```


## Installation
```bash
npm i @writetome51/array-get-and-remove-by-test
```

## Loading
```js
import {getAndRemoveByTest} from '@writetome51/array-get-and-remove-by-test';
```
