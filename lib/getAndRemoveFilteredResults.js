"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_filtered_results_1 = require("@writetome51/array-get-filtered-results");
var array_remove_all_of_first_of_1 = require("@writetome51/array-remove-all-of-first-of");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
function getAndRemoveFilteredResults(testFunction, array) {
    var filteredResults = array_get_filtered_results_1.getFilteredResults(testFunction, array);
    if (isEmpty_notEmpty_1.notEmpty(filteredResults))
        array_remove_all_of_first_of_1.removeAllOfEach(filteredResults, array);
    return filteredResults;
}
exports.getAndRemoveFilteredResults = getAndRemoveFilteredResults;
