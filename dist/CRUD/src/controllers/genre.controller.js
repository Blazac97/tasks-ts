"use strict";
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
exports.GenreController = void 0;
var genre_model_1 = __importDefault(require("../models/genre.model"));
var http_1 = require("../utils/http");
// Контроллер для жанров.
var GenreController = /** @class */ (function () {
    function GenreController() {
        var _this = this;
        this.createGenre = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var title, createdGenre;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, http_1.parseBody)(req)];
                    case 1:
                        title = (_a.sent()).title;
                        return [4 /*yield*/, genre_model_1["default"].create({ title: title })];
                    case 2:
                        createdGenre = _a.sent();
                        return [2 /*return*/, (0, http_1.createResponse)(res, 200, createdGenre)];
                }
            });
        }); };
        this.getGenres = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var genres;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, genre_model_1["default"].getList()];
                    case 1:
                        genres = _a.sent();
                        return [2 /*return*/, (0, http_1.createResponse)(res, 200, genres)];
                }
            });
        }); };
        this.getGenreById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var genreId, genre;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        genreId = req.url.split('/')[3];
                        return [4 /*yield*/, genre_model_1["default"].getById(genreId)];
                    case 1:
                        genre = _a.sent();
                        return [2 /*return*/, (0, http_1.createResponse)(res, 200, genre)];
                }
            });
        }); };
        this.updateGenreById = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var genreId, title, updatedGenre;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        genreId = req.url.split('/')[3];
                        return [4 /*yield*/, (0, http_1.parseBody)(req)];
                    case 1:
                        title = (_a.sent()).title;
                        return [4 /*yield*/, genre_model_1["default"].updateById(genreId, { title: title })];
                    case 2:
                        updatedGenre = _a.sent();
                        return [2 /*return*/, (0, http_1.createResponse)(res, 200, updatedGenre)];
                }
            });
        }); };
        this.deleteGenre = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var genreId, deletedGenre;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        genreId = req.url.split('/')[3];
                        return [4 /*yield*/, genre_model_1["default"].deleteById(genreId)];
                    case 1:
                        deletedGenre = _a.sent();
                        return [2 /*return*/, (0, http_1.createResponse)(res, 200, deletedGenre)];
                }
            });
        }); };
    }
    return GenreController;
}());
exports.GenreController = GenreController;
exports["default"] = new GenreController();
//# sourceMappingURL=genre.controller.js.map