"use strict";
// ================================================================================================================
// ================================================================================================================
exports.__esModule = true;
exports.getTextUniqWordsAmount = exports.getTextWordsAmount = exports.normalizeText = exports.capitalizeFirstLetter = void 0;
// 1.1 Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”.
var capitalizeFirstLetter = function (value) { return "".concat(value[0].toUpperCase()).concat(value.substring(1).toLowerCase()); };
exports.capitalizeFirstLetter = capitalizeFirstLetter;
// console.log('1.1 - capitalizeFirstLetter: ', capitalizeFirstLetter('hELLO'));
// ================================================================================================================
// ================================================================================================================
// 1.2 Преобразование строки с целью правильно расстановки пробелов.
var normalizeText = function (text) {
    // 1. "   :  "
    var regExp_1 = /\s*:\s*/gi;
    var replace_1 = ': ';
    // 2. "   ,   "
    var regExp_2 = /\s*,\s*/gi;
    var replace_2 = ', ';
    // 3. "  -   "
    var regExp_3 = /\s*-\s*/gi;
    var replace_3 = ' - ';
    // 4. "  —    "
    var regExp_4 = /\s*—\s*/gi;
    var replace_4 = ' — ';
    // 5. "  .    "
    var regExp_5 = /\s*\.\s*/gi;
    var replace_5 = '. ';
    // 6. "  ;  "
    var regExp_6 = /\s*;\s*/gi;
    var replace_6 = '; ';
    // 7. " ?   "
    var regExp_7 = /\s*?\s*/gi;
    var replace_7 = '? ';
    // 8. " !   "
    var regExp_8 = /\s*!\s*/gi;
    var replace_8 = '! ';
    // 7. "       "
    var regExp_9 = /\s{2,}/gi;
    var replace_9 = ' ';
    return text
        .replace(regExp_1, replace_1)
        .replace(regExp_2, replace_2)
        .replace(regExp_3, replace_3)
        .replace(regExp_4, replace_4)
        .replace(regExp_5, replace_5)
        .replace(regExp_6, replace_6)
        .replace(regExp_7, replace_7)
        .replace(regExp_8, replace_8)
        .replace(regExp_9, replace_9)
        .trim();
};
exports.normalizeText = normalizeText;
//   Для теста.
//   const TEMP_TEXT = 'Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.';
//   console.log('1.2 - normalizeText: ', normalizeText(TEMP_TEXT));
// ================================================================================================================
// ================================================================================================================
// 1.3 Посдчитывающий кол-во слов в строке.
var getTextWords = function (text) {
    var regExp_1 = /\s*:\s*/gi;
    var regExp_2 = /\s*,\s*/gi;
    var regExp_3 = /\s*-\s*/gi;
    var regExp_4 = /\s*—\s*/gi;
    var regExp_5 = /\s*\.\s*/gi;
    var regExp_6 = /\s*;\s*/gi;
    var regExp_7 = /\s*\?\s*/gi;
    var regExp_8 = /\s*\!\s*/gi;
    var regExp_9 = /\s{2,}/gi;
    return text
        .toLowerCase()
        .replace(regExp_1, ' ')
        .replace(regExp_2, ' ')
        .replace(regExp_3, ' ')
        .replace(regExp_4, ' ')
        .replace(regExp_5, ' ')
        .replace(regExp_6, ' ')
        .replace(regExp_7, ' ')
        .replace(regExp_8, ' ')
        .replace(regExp_9, ' ')
        .trim()
        .split(' ');
};
var getTextWordsAmount = function (text) { return getTextWords(text).length; };
exports.getTextWordsAmount = getTextWordsAmount;
//   Для теста.
//   const TEMP_TEXT = 'Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.';
//   console.log('1.3 - getTextWordsAmount: ', getTextWordsAmount(TEMP_TEXT));
// ================================================================================================================
// ================================================================================================================
// 1.4 Подсчитывающий, уникальные слова.
var logToColumn = function (data) {
    Object.entries(data).forEach(function (_a) {
        var word = _a[0], amount = _a[1];
        console.log("".concat(word, ": ").concat(amount));
    });
};
var getTextUniqWordsAmount = function (text) {
    var textWords = getTextWords(text);
    var wordsMap = textWords.reduce(function (sum, current) {
        if (!sum[current]) {
            sum[current] = 1;
        }
        else {
            sum[current] += 1;
        }
        return sum;
    }, {});
    return wordsMap;
};
exports.getTextUniqWordsAmount = getTextUniqWordsAmount;
// logToColumn(getTextUniqWordsAmount("Привет, как дела?"))
//  Для теста.
//   const TEMP_TEXT_2 = 'Текст, в котором слово текст несколько раз встречается и слово тоже';
//   console.log('1.4 - getTextUniqWordsAmount: ', getTextUniqWordsAmount(TEMP_TEXT_2));
//# sourceMappingURL=task1.js.map