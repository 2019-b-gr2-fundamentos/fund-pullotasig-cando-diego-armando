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
var editar_1 = require("./editar");
var buscar_1 = require("./buscar");
var borrar_1 = require("./borrar");
//----------------------------------------------------------------------------
function pokedex() {
    return __awaiter(this, void 0, void 0, function () {
        var pedirAccion;
        return __generator(this, function (_a) {
            switch (_a.label) {
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
                            message: 'Ingresa el numero de la accion que deseas realizar ',
                        })];
                case 1:
                    pedirAccion = _a.sent();
                    return [4 /*yield*/, pedirAccion];
                case 2:
                    _a.sent();
                    switch (pedirAccion.accion) {
                        case 1:
                            ver_1.ver();
                            break;
                        case 2:
                            agregar_1.agregar();
                            break;
                        case 3:
                            editar_1.editar();
                            break;
                        case 4:
                            buscar_1.buscar();
                            break;
                        case 5:
                            borrar_1.borrar();
                            break;
                        default:
                            console.log('bye bye');
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.pokedex = pokedex;
pokedex();
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
