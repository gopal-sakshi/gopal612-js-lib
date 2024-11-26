"use strict";
var mathObj = {};
mathObj.add = function (...arg) {
    return arg[0] + arg[1];
};
mathObj.multiply = function (...arg) {
    return arg[0] * arg[1];
};

module.exports = mathObj