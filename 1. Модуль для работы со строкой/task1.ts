// ================================================================================================================
// ================================================================================================================

// 1.1 Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”.

export const capitalizeFirstLetter = (value: string) => `${value[0].toUpperCase()}${value.substring(1).toLowerCase()}`;
// console.log('1.1 - capitalizeFirstLetter: ', capitalizeFirstLetter('hELLO'));

// ================================================================================================================
// ================================================================================================================

// 1.2 Преобразование строки с целью правильно расстановки пробелов.

export const normalizeText = (text: string) => {
    // 1. "   :  "
    const regExp_1 = /\s*:\s*/gi;
    const replace_1 = ': ';
    // 2. "   ,   "
    const regExp_2 = /\s*,\s*/gi;
    const replace_2 = ', ';
    // 3. "  -   "
    const regExp_3 = /\s*-\s*/gi;
    const replace_3 = ' - ';
    // 4. "  —    "
    const regExp_4 = /\s*—\s*/gi;
    const replace_4 = ' — ';
    // 5. "  .    "
    const regExp_5 = /\s*\.\s*/gi;
    const replace_5 = '. ';
    // 6. "  ;  "
    const regExp_6 = /\s*;\s*/gi;
    const replace_6 = '; ';
    // 7. " ?   "
    const regExp_7 = /\s*?\s*/gi;
    const replace_7 = '? ';
    // 8. " !   "
    const regExp_8 = /\s*!\s*/gi;
    const replace_8 = '! ';
    // 7. "       "
    const regExp_9 = /\s{2,}/gi;
    const replace_9 = ' ';
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
  }

//   Для теста.
//   const TEMP_TEXT = 'Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.';
//   console.log('1.2 - normalizeText: ', normalizeText(TEMP_TEXT));

// ================================================================================================================
// ================================================================================================================

// 1.3 Посдчитывающий кол-во слов в строке.

 const getTextWords = (text: string) => {
    const regExp_1 = /\s*:\s*/gi;
    const regExp_2 = /\s*,\s*/gi;
    const regExp_3 = /\s*-\s*/gi;
    const regExp_4 = /\s*—\s*/gi;
    const regExp_5 = /\s*\.\s*/gi;
    const regExp_6 = /\s*;\s*/gi;
    const regExp_7 = /\s*\?\s*/gi;
    const regExp_8 = /\s*\!\s*/gi;
    const regExp_9 = /\s{2,}/gi;
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
  }

export const getTextWordsAmount = (text: string) => getTextWords(text).length;

//   Для теста.
//   const TEMP_TEXT = 'Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.';
//   console.log('1.3 - getTextWordsAmount: ', getTextWordsAmount(TEMP_TEXT));

// ================================================================================================================
// ================================================================================================================

// 1.4 Подсчитывающий, уникальные слова.

const logToColumn = (data: Record<string, any>) => {
  Object.entries(data).forEach(([word, amount]) => {
    console.log(`${word}: ${amount}`);
  });
}



export const getTextUniqWordsAmount = (text: string) => {
    const textWords = getTextWords(text);
    const wordsMap = textWords.reduce((sum, current) => {
      if (!sum[current]) {
        sum[current] = 1;
      } else {
        sum[current] += 1;
      }
      return sum;
    }, {} as Record<string, number>);
    return   wordsMap
  }



// logToColumn(getTextUniqWordsAmount("Привет, как дела?"))

//  Для теста.
//   const TEMP_TEXT_2 = 'Текст, в котором слово текст несколько раз встречается и слово тоже';
//   console.log('1.4 - getTextUniqWordsAmount: ', getTextUniqWordsAmount(TEMP_TEXT_2));
  