"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_filtered_results_1 = require("@writetome51/array-get-filtered-results");
var removeAllOf_removeAllOfEach_1 = require("@writetome51/array-remove-all-of-first-of/removeAllOf_removeAllOfEach");
function getAndRemoveFilteredResults(testFunction, array) {
    var filteredResults = array_get_filtered_results_1.getFilteredResults(testFunction, array);
    removeAllOf_removeAllOfEach_1.removeAllOfEach(filteredResults, array);
    return filteredResults;
}
exports.getAndRemoveFilteredResults = getAndRemoveFilteredResults;
