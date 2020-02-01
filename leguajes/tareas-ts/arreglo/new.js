"use strict";
/*
pokedex 1.0.2

nombre:
tipo:
nivel:

*/
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
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var ver_1 = require("./ver");
var agregar_1 = require("./agregar");
var prompts = require("prompts");
//----------------------------------------------------------------------------
function pokedex() {
    return __awaiter(this, void 0, void 0, function () {
        var pedirAccion, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('1. ver');
                    console.log('2. agregar');
                    console.log('3. editar');
                    console.log('4. buscar');
                    console.log('5. borrar');
                    console.log('6. salir');
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'accion',
                            message: 'Ingresa el numero de la accion que deseas realizar \n ',
                        })];
                case 1:
                    pedirAccion = _b.sent();
                    return [4 /*yield*/, pedirAccion];
                case 2:
                    _b.sent();
                    _a = pedirAccion.accion;
                    switch (_a) {
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 4];
                        case 3: return [3 /*break*/, 6];
                        case 4: return [3 /*break*/, 7];
                        case 5: return [3 /*break*/, 8];
                        case 6: return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 10];
                case 3:
                    ver_1.ver();
                    pokedex();
                    return [3 /*break*/, 11];
                case 4:
                    agregar_1.agregar();
                    return [4 /*yield*/, agregar_1.agregar];
                case 5:
                    _b.sent();
                    pokedex();
                    return [3 /*break*/, 11];
                case 6: return [3 /*break*/, 11];
                case 7: return [3 /*break*/, 11];
                case 8: return [3 /*break*/, 11];
                case 9:
                    console.log('bye bye');
                    return [3 /*break*/, 11];
                case 10:
                    pokedex();
                    return [3 /*break*/, 11];
                case 11:
                    console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                    return [2 /*return*/];
            }
        });
    });
}
pokedex();
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
