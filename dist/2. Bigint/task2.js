"use strict";
exports.__esModule = true;
exports.divBigInt = exports.multiBigInt = exports.subBigInt = exports.sumBigInt = void 0;
// Приводим к BigInt.
var getBigInt = function (value) {
    return typeof value === "string" || typeof value === "number" ? BigInt(value) : value;
};
// 2.1 Сложение.
var sumBigInt = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = getBigInt(args[0]);
    for (var i = 1; i < args.length; i++) {
        var currentNormalized = getBigInt(args[i]);
        result += currentNormalized;
    }
    return result;
};
exports.sumBigInt = sumBigInt;
// 2.2 Вычитание.
var subBigInt = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = getBigInt(args[0]);
    for (var i = 1; i < args.length; i++) {
        var currentNormalized = getBigInt(args[i]);
        result -= currentNormalized;
    }
    return result;
};
exports.subBigInt = subBigInt;
// 2.3 Умножение.
var multiBigInt = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = getBigInt(args[0]);
    for (var i = 1; i < args.length; i++) {
        var currentNormalized = getBigInt(args[i]);
        result *= currentNormalized;
    }
    return result;
};
exports.multiBigInt = multiBigInt;
// 2.4 Деление.
var divBigInt = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = getBigInt(args[0]);
    for (var i = 1; i < args.length; i++) {
        var currentNormalized = getBigInt(args[i]);
        result /= currentNormalized;
    }
    return result;
};
exports.divBigInt = divBigInt;
//# sourceMappingURL=task2.js.map