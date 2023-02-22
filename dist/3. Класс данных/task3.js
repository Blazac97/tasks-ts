"use strict";
// Создаём класс.
class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}
// Фильтры типа "строка".
const createStringsFilter = (fieldName) => (product, operator, value) => {
    const productFieldValue = String(product[fieldName]);
    switch (operator) {
        case 'contains': return productFieldValue.includes(value);
        case 'starts': return productFieldValue.startsWith(value);
        case 'ends': return productFieldValue.endsWith(value);
        default: return false;
    }
};
// Фильтры типа "число".
const createNumbersFilter = (fieldName) => (product, operator, value) => {
    const productFieldValue = Number(product[fieldName]);
    const valueNormalized = Number(value);
    switch (operator) {
        case '<': return productFieldValue < valueNormalized;
        case '>': return productFieldValue > valueNormalized;
        case '=': return productFieldValue === valueNormalized;
        case '<=': return productFieldValue <= valueNormalized;
        case '>=': return productFieldValue >= valueNormalized;
        default: return false;
    }
};
class ProductsWebsite {
    constructor() {
        // Список доступных продуктов.
        this.products = [
            new Product('Product 1', 5, 10, 'Short description 1 here'),
            new Product('Product 2', 7, 8, 'Short description 2 here'),
            new Product('Product 3', 100, 3, 'Short description 3 here'),
        ];
        // Записываем все доступные фильтры нашего сайта.
        this.filters = {
            name: createStringsFilter('name'),
            price: createNumbersFilter('price'),
            quantity: createNumbersFilter('quantity'),
            description: createStringsFilter('description'),
        };
        this.search = (payload) => {
            // 1. Вводим "отправляем" информацию для фильтра.
            /*
              Пример:
        
              [
                [ 'name', 'contains', 'Product' ],
                [ 'price', '>', '2' ],
                [ 'quantity', '>', '8' ],
                [ 'description', 'ends', 'here' ],
              ]
            */
            const payloadFilters = payload
                .split('&')
                .map(filterStr => filterStr.split('-'));
            // 2. Возвращаем отфильтрованные результаты.
            return this.products.filter(product => {
                // Итерируемся по всем фильтрам в поисковой строке.
                for (let i = 0; i < payloadFilters.length; i += 1) {
                    const [fieldName, operator, value] = payloadFilters[i];
                    // Вызов фильтрующей функции.
                    const filterCallResult = this.filters[fieldName](product, operator, value);
                    // Если хотя бы один фильтр не "одобряет" этот товар - немедленное возвращение false, товар не соответствует условиям.
                    if (!filterCallResult)
                        return false;
                }
                // Если все фильтры вернули  "true" — товар соответствует всем условиям из всех фильтров.
                return true;
            });
        };
    }
}
const productsWebsite = new ProductsWebsite();
const searchResult = productsWebsite.search("name-contains-Product&price->-2&quantity->-8&description-ends-here");
console.log('3 - Product, ProductsWebsite, search: ', searchResult);
