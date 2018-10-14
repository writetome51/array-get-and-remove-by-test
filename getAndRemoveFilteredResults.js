"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFilteredResults_1 = require("@writetome51/array-non-modifying-getters-basic/getFilteredResults");
var removeAllOf_removeAllOfEach_1 = require("@writetome51/array-remove-all-of-first-of/removeAllOf_removeAllOfEach");
function getAndRemoveFilteredResults(testFunction, array) {
    var filteredResults = getFilteredResults_1.getFilteredResults(testFunction, array);
    removeAllOf_removeAllOfEach_1.removeAllOfEach(filteredResults, array);
    return filteredResults;
}
exports.getAndRemoveFilteredResults = getAndRemoveFilteredResults;
