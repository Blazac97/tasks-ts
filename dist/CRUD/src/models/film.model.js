"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.FilmModel = void 0;
var db_1 = __importDefault(require("../db"));
// Создаём модель для фильмов.
var FilmModel = /** @class */ (function () {
    function FilmModel() {
        var _this = this;
        this.create = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var genres, title, annum, newFilm, filmId_1, createFilmGenresQuery_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        genres = data.genres, title = data.title, annum = data.annum;
                        return [4 /*yield*/, db_1["default"].query('INSERT INTO film (title, annum) values ($1,$2) RETURNING *', [title, annum])];
                    case 1:
                        newFilm = _a.sent();
                        if (!Array.isArray(genres)) return [3 /*break*/, 3];
                        filmId_1 = newFilm.rows[0].id;
                        createFilmGenresQuery_1 = 'INSERT INTO film_genre (fk_film_id, fk_genre_id) values ';
                        genres.forEach(function (genreId, index) {
                            createFilmGenresQuery_1 += "(".concat(filmId_1, ", ").concat(genreId, ")");
                            if (index !== genres.length - 1) {
                                createFilmGenresQuery_1 += ', ';
                            }
                        });
                        createFilmGenresQuery_1 += 'RETURNING *';
                        return [4 /*yield*/, db_1["default"].query(createFilmGenresQuery_1)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        result = __assign(__assign({}, (newFilm.rows[0] || {})), { genres: genres || [] });
                        return [2 /*return*/, result];
                }
            });
        }); };
        // ======================Пояснение для создания фильмов======================================================
        /* METHOD : POST  {
        "title":"Остаться в живых",
        "annum":2003,
        "genres":[1,2,3...]  - перечисляем ID жанров через "," , ID - соответсвует id в таблице genre. Строка "genres" - не обязательна, если не хотим добавлять жанры.
         }
        */
        //  ===========================================================================
        this.getList = function () { return __awaiter(_this, void 0, void 0, function () {
            var films;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_1["default"].query('SELECT * FROM films')];
                    case 1:
                        films = _a.sent();
                        return [2 /*return*/, films.rows];
                }
            });
        }); };
        this.getById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var film;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_1["default"].query('SELECT * FROM film WHERE id = $1', [id])];
                    case 1:
                        film = _a.sent();
                        return [2 /*return*/, film.rows[0]];
                }
            });
        }); };
        this.updateById = function (id, data) { return __awaiter(_this, void 0, void 0, function () {
            var updatedFilm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_1["default"].query('UPDATE film set title=$1 annum=$2 WHERE id=$3 RETURNING *', [data.title, data.annum, id])];
                    case 1:
                        updatedFilm = _a.sent();
                        return [2 /*return*/, updatedFilm.rows[0]];
                }
            });
        }); };
        this.deleteById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var deleteFilm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_1["default"].query('DELETE FROM film WHERE id=$1 RETURNING *', [id])];
                    case 1:
                        deleteFilm = _a.sent();
                        return [2 /*return*/, deleteFilm.rows[0]];
                }
            });
        }); };
    }
    return FilmModel;
}());
exports.FilmModel = FilmModel;
exports["default"] = new FilmModel();
//# sourceMappingURL=film.model.js.map