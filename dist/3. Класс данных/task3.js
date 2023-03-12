// Создаём класс.
var Product = /** @class */ (function () {
    function Product(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
    return Product;
}());
// Фильтры типа "строка".
var createStringsFilter = function (fieldName) { return function (product, operator, value) {
    var productFieldValue = String(product[fieldName]);
    switch (operator) {
        case 'contains': return productFieldValue.includes(value);
        case 'starts': return productFieldValue.startsWith(value);
        case 'ends': return productFieldValue.endsWith(value);
        default: return false;
    }
}; };
// Фильтры типа "число".
var createNumbersFilter = function (fieldName) { return function (product, operator, value) {
    var productFieldValue = Number(product[fieldName]);
    var valueNormalized = Number(value);
    switch (operator) {
        case '<': return productFieldValue < valueNormalized;
        case '>': return productFieldValue > valueNormalized;
        case '=': return productFieldValue === valueNormalized;
        case '<=': return productFieldValue <= valueNormalized;
        case '>=': return productFieldValue >= valueNormalized;
        default: return false;
    }
}; };
var ProductsWebsite = /** @class */ (function () {
    function ProductsWebsite() {
        var _this = this;
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
            description: createStringsFilter('description')
        };
        this.search = function (payload) {
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
            var payloadFilters = payload
                .split('&')
                .map(function (filterStr) { return filterStr.split('-'); });
            // 2. Возвращаем отфильтрованные результаты.
            return _this.products.filter(function (product) {
                // Итерируемся по всем фильтрам в поисковой строке.
                for (var i = 0; i < payloadFilters.length; i += 1) {
                    var _a = payloadFilters[i], fieldName = _a[0], operator = _a[1], value = _a[2];
                    // Вызов фильтрующей функции.
                    var filterCallResult = _this.filters[fieldName](product, operator, value);
                    // Если хотя бы один фильтр не "одобряет" этот товар - немедленное возвращение false, товар не соответствует условиям.
                    if (!filterCallResult)
                        return false;
                }
                // Если все фильтры вернули  "true" — товар соответствует всем условиям из всех фильтров.
                return true;
            });
        };
    }
    return ProductsWebsite;
}());
var productsWebsite = new ProductsWebsite();
var searchResult = productsWebsite.search("name-contains-Product&price->-2&quantity->-8&description-ends-here");
console.log('3 - Product, ProductsWebsite, search: ', searchResult);
//# sourceMappingURL=task3.js.map