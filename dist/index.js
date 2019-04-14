"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_array_from_property_1 = require("@writetome51/get-array-from-property");
var array_get_by_test_1 = require("@writetome51/array-get-by-test");
var is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
var array_remove_by_indexes_1 = require("@writetome51/array-remove-by-indexes");
function getAndRemoveByTest(testFunction, array) {
    var filteredResults = array_get_by_test_1.getByTest(testFunction, array);
    if (is_empty_not_empty_1.notEmpty(filteredResults)) {
        var indexes = get_array_from_property_1.getArrayFromProperty('index', filteredResults);
        array_remove_by_indexes_1.removeByIndexes(indexes, array);
    }
    return filteredResults;
}
exports.getAndRemoveByTest = getAndRemoveByTest;
