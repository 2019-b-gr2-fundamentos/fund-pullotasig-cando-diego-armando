"use strict";
/*

ejemplo de pokedex
apodo:
nombre:
tipo:
nivel:
edad:
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
// ------------------------------------ librerias -------------------------------------
var f_leer_1 = require("./funcion-interfas/f-leer");
var prompts = require("prompts");
// ------------------------------------ programa --------------------------------------
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function opciones() {
            return __awaiter(this, void 0, void 0, function () {
                var pedirAccion, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log('BIENVENIDO A LA POKEDEX');
                            console.log('QUE DESEA HACER');
                            console.log('1.       AÑADIR NUEVO POKEMON A LA POKEDEX');
                            console.log('2.       BUSCAR POKEMON EN LA POKEDEX');
                            console.log('3.       ELIMINAR POKEMON DE LA POKEDEX');
                            console.log('4.       EDITAR POKEMON DE LA POKEDEX');
                            console.log('5.       SALIR DE LA POKEDEX');
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'accion',
                                    message: 'Ingresa el numero de la accion que deseas realizar \n',
                                })];
                        case 1:
                            pedirAccion = _b.sent();
                            return [4 /*yield*/, pedirAccion];
                        case 2:
                            _b.sent();
                            _a = pedirAccion.accion;
                            switch (_a) {
                                case '1': return [3 /*break*/, 3];
                                case '2': return [3 /*break*/, 5];
                                case '3': return [3 /*break*/, 7];
                                case '4': return [3 /*break*/, 8];
                            }
                            return [3 /*break*/, 9];
                        case 3: return [4 /*yield*/, agregar()];
                        case 4:
                            _b.sent();
                            return [3 /*break*/, 10];
                        case 5:
                            buscar();
                            return [4 /*yield*/, buscar];
                        case 6:
                            _b.sent();
                            return [3 /*break*/, 10];
                        case 7: return [3 /*break*/, 10];
                        case 8:
                            editar();
                            return [3 /*break*/, 10];
                        case 9:
                            console.log('ffffffffffffffffff');
                            _b.label = 10;
                        case 10: return [2 /*return*/];
                    }
                });
            });
        }
        function buscar() {
            return __awaiter(this, void 0, void 0, function () {
                var buscar, estudianteEncontrado, arreglo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'text',
                                name: 'nombre',
                                message: 'Buscar por ID o por NOMBRE'
                            })];
                        case 1:
                            buscar = _a.sent();
                            estudianteEncontrado = arregloDePokedex
                                .find(// return CONDICION
                            function (valorActual) {
                                return valorActual.nombre == buscar.nombre;
                            });
                            console.log(estudianteEncontrado);
                            arreglo = JSON.stringify(arregloDePokedex);
                            opciones();
                            return [4 /*yield*/, buscar];
                        case 2:
                            _a.sent();
                            console.log(arregloDePokedex);
                            return [2 /*return*/];
                    }
                });
            });
        }
        function agregar() {
            return __awaiter(this, void 0, void 0, function () {
                var respuestasDatosIngreoPokedex;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts(datosIngreoPokedex)];
                        case 1:
                            respuestasDatosIngreoPokedex = _a.sent();
                            arregloDePokedex.push(respuestasDatosIngreoPokedex);
                            opciones();
                            return [4 /*yield*/, agregar];
                        case 2:
                            _a.sent();
                            console.log(arregloDePokedex);
                            return [2 /*return*/];
                    }
                });
            });
        }
        function editar() {
            return __awaiter(this, void 0, void 0, function () {
                var idABuscar, indiceEncontrado, datosIngreoPokedex, respuestasDatosIngreoPokedex, arreglo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'id',
                                message: 'Ingresa el ID del registro a Editar'
                            })];
                        case 1:
                            idABuscar = _a.sent();
                            indiceEncontrado = arregloDePokedex.findIndex(// return CONDICION ->
                            function (valorActual, indice, arreglo) {
                                return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
                            } // Si encuentra nos devuelve el indice
                            // No encuentra
                            );
                            console.log('Indice encontrado:', indiceEncontrado);
                            datosIngreoPokedex = [
                                {
                                    type: 'text',
                                    name: 'apodo',
                                    message: 'Ingresa el apodo del pokemon'
                                },
                                {
                                    type: 'text',
                                    name: 'nombre',
                                    message: 'Ingresa el nombre del pokemon'
                                },
                                {
                                    type: 'text',
                                    name: 'tipo',
                                    message: 'Ingresa el tipo del pokemon'
                                },
                                {
                                    type: 'text',
                                    name: 'nivel',
                                    message: 'Ingresa el nivel del pokemon'
                                },
                                {
                                    type: 'text',
                                    name: 'edad',
                                    message: 'Ingresa la edad en meses del pokemon'
                                }
                            ];
                            console.log(arregloDePokedex);
                            return [4 /*yield*/, prompts(datosIngreoPokedex)];
                        case 2:
                            respuestasDatosIngreoPokedex = _a.sent();
                            arregloDePokedex.push(respuestasDatosIngreoPokedex);
                            arreglo = JSON.stringify(arregloDePokedex);
                            opciones();
                            return [4 /*yield*/, editar];
                        case 3:
                            _a.sent();
                            console.log(arregloDePokedex);
                            return [2 /*return*/];
                    }
                });
            });
        }
        var logoPokemon, contador, arregloDePokedex, datosIngreoPokedex;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, f_leer_1.leer('./logo.txt')];
                case 1:
                    logoPokemon = _a.sent();
                    console.log(logoPokemon);
                    contador = 1;
                    arregloDePokedex = [];
                    datosIngreoPokedex = [
                        {
                            type: 'text',
                            name: 'apodo',
                            message: 'Ingresa el apodo del pokemon'
                        },
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingresa el nombre del pokemon'
                        },
                        {
                            type: 'text',
                            name: 'tipo',
                            message: 'Ingresa el tipo del pokemon'
                        },
                        {
                            type: 'text',
                            name: 'nivel',
                            message: 'Ingresa el nivel del pokemon'
                        },
                        {
                            type: 'text',
                            name: 'edad',
                            message: 'Ingresa la edad en meses del pokemon'
                        }
                    ];
                    opciones();
                    return [2 /*return*/];
            }
        });
    });
}
main();
