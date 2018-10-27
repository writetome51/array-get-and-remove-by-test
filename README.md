This function removes array items if they pass a callback test-function, 
and returns an array of objects, each containing the removed value and its index:

getAndRemoveFilteredResults(testFunction, array); // returns array of objects

testFunction = function(item, index?, array?): boolean

Example:

let arr = [1,2,3,4,5,6,7,8,9,10];

let removed = getAndRemoveFilteredResults((item) => {
    return (item < 3);
}, arr);

removed is now [ {value:1, index:0}, {value:2, index:1} ]
