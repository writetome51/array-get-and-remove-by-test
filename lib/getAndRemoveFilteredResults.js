"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_filtered_results_1 = require("@writetome51/array-get-filtered-results");
var array_remove_by_indexes_1 = require("@writetome51/array-remove-by-indexes");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
// @ts-ignore
var arrayPluck = require('array-pluck'); // extracts array from one property of array of objects.
function getAndRemoveFilteredResults(testFunction, array) {
    var filteredResults = array_get_filtered_results_1.getFilteredResults(testFunction, array);
    if (isEmpty_notEmpty_1.notEmpty(filteredResults)) {
        // get array of indexes from filteredResults objects:
        var indexes = arrayPluck(filteredResults, 'index');
        array_remove_by_indexes_1.removeByIndexes(indexes, array);
    }
    return filteredResults;
}
exports.getAndRemoveFilteredResults = getAndRemoveFilteredResults;
