"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_by_test_1 = require("@writetome51/array-get-by-test");
var array_remove_by_indexes_1 = require("@writetome51/array-remove-by-indexes");
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var get_array_from_property_1 = require("@writetome51/get-array-from-property");
function getAndRemoveByTest(testFunction, array) {
    var filteredResults = array_get_by_test_1.getByTest(testFunction, array);
    if (isEmpty_notEmpty_1.notEmpty(filteredResults)) {
        var indexes = get_array_from_property_1.getArrayFromProperty('index', filteredResults);
        array_remove_by_indexes_1.removeByIndexes(indexes, array);
    }
    return filteredResults;
}
exports.getAndRemoveByTest = getAndRemoveByTest;
