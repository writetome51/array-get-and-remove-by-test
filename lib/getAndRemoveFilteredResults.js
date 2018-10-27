"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_filtered_results_1 = require("@writetome51/array-get-filtered-results");
var array_remove_all_of_first_of_1 = require("@writetome51/array-remove-all-of-first-of");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
function getAndRemoveFilteredResults(testFunction, array) {
    // filteredResults is array of objects that match interface {value: any,  index: integer}
    var filteredResults = array_get_filtered_results_1.getFilteredResults(testFunction, array);
    var removalMarker = '***marked-for-removal***';
    if (isEmpty_notEmpty_1.notEmpty(filteredResults)) {
        replaceFilteredItemsWithRemovalMarker(array);
        array_remove_all_of_first_of_1.removeAllOf(removalMarker, array);
    }
    return filteredResults;
    function replaceFilteredItemsWithRemovalMarker(array) {
        var i = -1, indexToReplace;
        while (++i < filteredResults.length) {
            indexToReplace = filteredResults[i]['index'];
            array[indexToReplace] = removalMarker;
        }
    }
}
exports.getAndRemoveFilteredResults = getAndRemoveFilteredResults;
