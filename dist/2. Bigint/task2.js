"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divBigInt = exports.multiBigInt = exports.subBigInt = exports.sumBigInt = void 0;
// Приводим к BigInt.
const getBigInt = (value) => {
    return typeof value === "string" || typeof value === "number" ? BigInt(value) : value;
};
// 2.1 Сложение.
const sumBigInt = (...args) => {
    let result = getBigInt(args[0]);
    for (let i = 1; i < args.length; i++) {
        const currentNormalized = getBigInt(args[i]);
        result += currentNormalized;
    }
    return result;
};
exports.sumBigInt = sumBigInt;
// 2.2 Вычитание.
const subBigInt = (...args) => {
    let result = getBigInt(args[0]);
    for (let i = 1; i < args.length; i++) {
        const currentNormalized = getBigInt(args[i]);
        result -= currentNormalized;
    }
    return result;
};
exports.subBigInt = subBigInt;
// 2.3 Умножение.
const multiBigInt = (...args) => {
    let result = getBigInt(args[0]);
    for (let i = 1; i < args.length; i++) {
        const currentNormalized = getBigInt(args[i]);
        result *= currentNormalized;
    }
    return result;
};
exports.multiBigInt = multiBigInt;
// 2.4 Деление.
const divBigInt = (...args) => {
    let result = getBigInt(args[0]);
    for (let i = 1; i < args.length; i++) {
        const currentNormalized = getBigInt(args[i]);
        result /= currentNormalized;
    }
    return result;
};
exports.divBigInt = divBigInt;
