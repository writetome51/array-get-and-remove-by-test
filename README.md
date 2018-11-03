This function removes array items if they pass a test-function, and   
returns an array of IValueIndexPairs.  
A IValueIndexPair is this object: {value: any,  index: integer}

getAndRemoveFilteredResults(testFunction, array):  IValueIndexPair[]

testFunction = function(item, index?, array?): boolean

Example:

let arr = [1,2,3,4,5,6,7,8,9,10];

let removed = getAndRemoveFilteredResults((item) => item < 3,  arr);

removed is now [ {value:1, index:0}, {value:2, index:1} ]
