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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("prompts");
var leer_1 = require("../arreglo/leer");
var operadores_1 = require("./operadores");
var archivoLeido = leer_1.leer('./logo-juego.txt');
console.log(archivoLeido);
var arregloNumeros = [
    { id: 1, valor: 0 },
    { id: 2, valor: 0 },
    { id: 3, valor: 0 },
    { id: 4, valor: 0 },
    { id: 5, valor: 0 },
    { id: 6, valor: 0 },
    { id: 7, valor: 0 },
    { id: 8, valor: 0 },
    { id: 9, valor: 0 }
];
var arregloJuego = __spreadArrays(arregloNumeros);
var arregloDePosicionesdisponibles = true;
var empieza = 2;
var cambio = empieza;
function main() {
    juego();
    function juego() {
        return __awaiter(this, void 0, void 0, function () {
            var residuo, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!arregloDePosicionesdisponibles) return [3 /*break*/, 8];
                        residuo = cambio % 2;
                        _a = residuo;
                        switch (_a) {
                            case 0: return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, jugadorXXX()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, imprimir()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, jugadorOOO()];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, imprimir()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 7:
                        ;
                        cambio = cambio + 1;
                        return [3 /*break*/, 0];
                    case 8: return [2 /*return*/];
                }
            });
        });
    }
    function jugadorXXX() {
        return __awaiter(this, void 0, void 0, function () {
            var espuestaFilter, respuestaFilter, respuestaMap, marca, posicionGatoAModificar, comprobarFilter, a, posicicion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        espuestaFilter = arregloJuego.filter(function (valorActual) {
                            var valor = valorActual.valor < 1;
                            return valor;
                        });
                        respuestaFilter = operadores_1.filter(arregloJuego, function (valorActual) {
                            var valor = valorActual.valor < 1;
                            return valor;
                        });
                        respuestaMap = respuestaFilter.map(function (valorACtual) {
                            var nuevoObjeto = {
                                posicicion: valorACtual.id,
                            };
                            return nuevoObjeto;
                        });
                        marca = leer_1.leer('./marcaX.txt');
                        console.log(marca);
                        console.log('                                                 ');
                        return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'id',
                                message: 'ESCRIBA EL NUMERO DE LA CASILLA QUE QUIERE MARCAR'
                            })];
                    case 1:
                        posicionGatoAModificar = _a.sent();
                        comprobarFilter = respuestaMap.some(function (valorActual, i, arreglo) {
                            var condicion = valorActual.posicicion == posicionGatoAModificar.id;
                            return condicion;
                        });
                        arregloDePosicionesdisponibles = arregloJuego.some(function (valorActual, i, arreglo) {
                            var condicion = valorActual.valor == 0;
                            return condicion;
                        });
                        if (!(comprobarFilter == false)) return [3 /*break*/, 3];
                        imprimir();
                        console.log('no se puede marcar esa casilla');
                        return [4 /*yield*/, jugadorXXX()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        a = 2;
                        posicicion = posicionGatoAModificar.id - 1;
                        arregloJuego[posicicion].valor = a;
                        gano();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function jugadorOOO() {
        return __awaiter(this, void 0, void 0, function () {
            var respuestaFilter, respuestaMap, marca, posicionGatoAModificar, comprobarFilter, a, posicicion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        respuestaFilter = arregloJuego.filter(function (valorActual) {
                            var valor = valorActual.valor < 1;
                            return valor;
                        });
                        respuestaMap = respuestaFilter.map(function (valorACtual) {
                            var nuevoObjeto = {
                                posicicion: valorACtual.id,
                            };
                            return nuevoObjeto;
                        });
                        marca = leer_1.leer('./marcaO.txt');
                        console.log(marca);
                        console.log('                                                 ');
                        return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'id',
                                message: 'ESCRIBA EL NUMERO DE LA CASILLA QUE QUIERE MARCAR'
                            })];
                    case 1:
                        posicionGatoAModificar = _a.sent();
                        comprobarFilter = respuestaMap.some(function (valorActual, i, arreglo) {
                            var condicion = valorActual.posicicion == posicionGatoAModificar.id;
                            return condicion;
                        });
                        arregloDePosicionesdisponibles = arregloJuego.some(function (valorActual, i, arreglo) {
                            var condicion = valorActual.valor == 0;
                            return condicion;
                        });
                        if (!(comprobarFilter == false)) return [3 /*break*/, 3];
                        imprimir();
                        console.log('no se puede marcar esa casilla');
                        return [4 /*yield*/, jugadorOOO()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        a = 1;
                        posicicion = posicionGatoAModificar.id - 1;
                        arregloJuego[posicicion].valor = a;
                        gano();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
}
function imprimir() {
    function sobre() {
        var idModificar1 = arregloJuego.findIndex(function (valorActual, indice, arreglo) {
            return valorActual.id == 1;
        });
        var valor1 = arregloJuego[idModificar1].valor;
        var idModificar2 = arregloJuego.findIndex(function (valorActual, indice, arreglo) {
            return valorActual.id == 2;
        });
        var valor2 = arregloJuego[idModificar2].valor;
        var idModificar3 = arregloJuego.findIndex(function (valorActual, indice, arreglo) {
            return valorActual.id == 3;
        });
        var valor3 = arregloJuego[idModificar3].valor;
        var a;
        var b;
        var c;
        function fila1() {
            if (valor1 == 2) {
                a = '  ▒██     ██▒  ║';
            }
            if (valor1 == 1) {
                a = '   ▒▄█████▄    ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '  ▒██     ██▒  ║';
            }
            if (valor2 == 1) {
                b = '   ▒▄█████▄    ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '  ▒██     ██▒  ';
            }
            if (valor3 == 1) {
                c = '   ▒▄█████▄    ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila2() {
            if (valor1 == 2) {
                a = '  ▒▒ █▄ ▄█▒▒░  ║';
            }
            if (valor1 == 1) {
                a = '  ▒██▒    ██▒  ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '  ▒▒ █▄ ▄█▒▒░  ║';
            }
            if (valor2 == 1) {
                b = '  ▒██▒    ██▒  ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '  ▒▒ █▄ ▄█▒▒░  ';
            }
            if (valor3 == 1) {
                c = '  ▒██▒    ██▒  ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila3() {
            if (valor1 == 2) {
                a = '  ░░  ▄█▄▒ ░   ║';
            }
            if (valor1 == 1) {
                a = '  ▒██░    ██▒  ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '  ░░  ▄█▄▒ ░   ║';
            }
            if (valor2 == 1) {
                b = '  ▒██░    ██▒  ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '  ░░  ▄█▄▒ ░   ';
            }
            if (valor3 == 1) {
                c = '  ▒██░    ██▒  ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila4() {
            if (valor1 == 2) {
                a = '   ░▒█▀ ▀█░▒   ║';
            }
            if (valor1 == 1) {
                a = '  ▒██     ██░  ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '   ░▒█▀ ▀█░▒   ║';
            }
            if (valor2 == 1) {
                b = '  ▒██     ██░  ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '   ░▒█▀ ▀█░▒   ';
            }
            if (valor3 == 1) {
                c = '  ▒██     ██░  ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila5() {
            if (valor1 == 2) {
                a = '  ▒██▒   ▒██▒  ║';
            }
            if (valor1 == 1) {
                a = '  ░ ▀█████▀▒   ║';
            }
            if (valor1 == 0) {
                a = '             1 ║';
            }
            if (valor2 == 2) {
                b = '  ▒██▒   ▒██▒  ║';
            }
            if (valor2 == 1) {
                b = '  ░ ▀█████▀▒   ║';
            }
            if (valor2 == 0) {
                b = '             2 ║';
            }
            if (valor3 == 2) {
                c = '  ▒██▒   ▒██▒  ';
            }
            if (valor3 == 1) {
                c = '  ░ ▀█████▀▒   ';
            }
            if (valor3 == 0) {
                c = '             3 ';
            }
            console.log(a + b + c);
        }
        fila1();
        fila2();
        fila3();
        fila4();
        fila5();
    }
    function medio() {
        var idModificar1 = arregloJuego.findIndex(function (valorActual, indice, arreglo) {
            return valorActual.id == 4;
        });
        var valor1 = arregloJuego[idModificar1].valor;
        var idModificar2 = arregloJuego.findIndex(function (valorActual, indice, arreglo) {
            return valorActual.id == 5;
        });
        var valor2 = arregloJuego[idModificar2].valor;
        var idModificar3 = arregloJuego.findIndex(function (valorActual, indice, arreglo) {
            return valorActual.id == 6;
        });
        var valor3 = arregloJuego[idModificar3].valor;
        var a;
        var b;
        var c;
        function fila1() {
            if (valor1 == 2) {
                a = '  ▒██     ██▒  ║';
            }
            if (valor1 == 1) {
                a = '   ▒▄█████▄    ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '  ▒██     ██▒  ║';
            }
            if (valor2 == 1) {
                b = '   ▒▄█████▄    ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '  ▒██     ██▒  ';
            }
            if (valor3 == 1) {
                c = '   ▒▄█████▄    ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila2() {
            if (valor1 == 2) {
                a = '  ▒▒ █▄ ▄█▒▒░  ║';
            }
            if (valor1 == 1) {
                a = '  ▒██▒    ██▒  ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '  ▒▒ █▄ ▄█▒▒░  ║';
            }
            if (valor2 == 1) {
                b = '  ▒██▒    ██▒  ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '  ▒▒ █▄ ▄█▒▒░  ';
            }
            if (valor3 == 1) {
                c = '  ▒██▒    ██▒  ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila3() {
            if (valor1 == 2) {
                a = '  ░░  ▄█▄▒ ░   ║';
            }
            if (valor1 == 1) {
                a = '  ▒██░    ██▒  ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '  ░░  ▄█▄▒ ░   ║';
            }
            if (valor2 == 1) {
                b = '  ▒██░    ██▒  ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '  ░░  ▄█▄▒ ░   ';
            }
            if (valor3 == 1) {
                c = '  ▒██░    ██▒  ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila4() {
            if (valor1 == 2) {
                a = '   ░▒█▀ ▀█░▒   ║';
            }
            if (valor1 == 1) {
                a = '  ▒██     ██░  ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '   ░▒█▀ ▀█░▒   ║';
            }
            if (valor2 == 1) {
                b = '  ▒██     ██░  ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '   ░▒█▀ ▀█░▒   ';
            }
            if (valor3 == 1) {
                c = '  ▒██     ██░  ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila5() {
            if (valor1 == 2) {
                a = '  ▒██▒   ▒██▒  ║';
            }
            if (valor1 == 1) {
                a = '  ░ ▀█████▀▒   ║';
            }
            if (valor1 == 0) {
                a = '             4 ║';
            }
            if (valor2 == 2) {
                b = '  ▒██▒   ▒██▒  ║';
            }
            if (valor2 == 1) {
                b = '  ░ ▀█████▀▒   ║';
            }
            if (valor2 == 0) {
                b = '             5 ║';
            }
            if (valor3 == 2) {
                c = '  ▒██▒   ▒██▒  ';
            }
            if (valor3 == 1) {
                c = '  ░ ▀█████▀▒   ';
            }
            if (valor3 == 0) {
                c = '             6 ';
            }
            console.log(a + b + c);
        }
        fila1();
        fila2();
        fila3();
        fila4();
        fila5();
    }
    function bajo() {
        var idModificar1 = arregloJuego.findIndex(function (valorActual, indice, arreglo) {
            return valorActual.id == 7;
        });
        var valor1 = arregloJuego[idModificar1].valor;
        var idModificar2 = arregloJuego.findIndex(function (valorActual, indice, arreglo) {
            return valorActual.id == 8;
        });
        var valor2 = arregloJuego[idModificar2].valor;
        var idModificar3 = arregloJuego.findIndex(function (valorActual, indice, arreglo) {
            return valorActual.id == 9;
        });
        var valor3 = arregloJuego[idModificar3].valor;
        var a;
        var b;
        var c;
        function fila1() {
            if (valor1 == 2) {
                a = '  ▒██     ██▒  ║';
            }
            if (valor1 == 1) {
                a = '   ▒▄█████▄    ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '  ▒██     ██▒  ║';
            }
            if (valor2 == 1) {
                b = '   ▒▄█████▄    ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '  ▒██     ██▒  ';
            }
            if (valor3 == 1) {
                c = '   ▒▄█████▄    ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila2() {
            if (valor1 == 2) {
                a = '  ▒▒ █▄ ▄█▒▒░  ║';
            }
            if (valor1 == 1) {
                a = '  ▒██▒    ██▒  ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '  ▒▒ █▄ ▄█▒▒░  ║';
            }
            if (valor2 == 1) {
                b = '  ▒██▒    ██▒  ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '  ▒▒ █▄ ▄█▒▒░  ';
            }
            if (valor3 == 1) {
                c = '  ▒██▒    ██▒  ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila3() {
            if (valor1 == 2) {
                a = '  ░░  ▄█▄▒ ░   ║';
            }
            if (valor1 == 1) {
                a = '  ▒██░    ██▒  ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '  ░░  ▄█▄▒ ░   ║';
            }
            if (valor2 == 1) {
                b = '  ▒██░    ██▒  ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '  ░░  ▄█▄▒ ░   ';
            }
            if (valor3 == 1) {
                c = '  ▒██░    ██▒  ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila4() {
            if (valor1 == 2) {
                a = '   ░▒█▀ ▀█░▒   ║';
            }
            if (valor1 == 1) {
                a = '  ▒██     ██░  ║';
            }
            if (valor1 == 0) {
                a = '               ║';
            }
            if (valor2 == 2) {
                b = '   ░▒█▀ ▀█░▒   ║';
            }
            if (valor2 == 1) {
                b = '  ▒██     ██░  ║';
            }
            if (valor2 == 0) {
                b = '               ║';
            }
            if (valor3 == 2) {
                c = '   ░▒█▀ ▀█░▒   ';
            }
            if (valor3 == 1) {
                c = '  ▒██     ██░  ';
            }
            if (valor3 == 0) {
                c = '               ';
            }
            console.log(a + b + c);
        }
        function fila5() {
            if (valor1 == 2) {
                a = '  ▒██▒   ▒██▒  ║';
            }
            if (valor1 == 1) {
                a = '  ░ ▀█████▀▒   ║';
            }
            if (valor1 == 0) {
                a = '             7 ║';
            }
            if (valor2 == 2) {
                b = '  ▒██▒   ▒██▒  ║';
            }
            if (valor2 == 1) {
                b = '  ░ ▀█████▀▒   ║';
            }
            if (valor2 == 0) {
                b = '             8 ║';
            }
            if (valor3 == 2) {
                c = '  ▒██▒   ▒██▒  ';
            }
            if (valor3 == 1) {
                c = '  ░ ▀█████▀▒   ';
            }
            if (valor3 == 0) {
                c = '             9 ';
            }
            console.log(a + b + c);
        }
        fila1();
        fila2();
        fila3();
        fila4();
        fila5();
    }
    console.log('                                                 ');
    sobre();
    console.log('═══════════════╬═══════════════╬════════════════');
    medio();
    console.log('═══════════════╬═══════════════╬════════════════');
    bajo();
    console.log('                                                 ');
}
function gano() {
    var a = arregloJuego[0].valor;
    var b = arregloJuego[1].valor;
    var c = arregloJuego[2].valor;
    var d = arregloJuego[3].valor;
    var e = arregloJuego[4].valor;
    var f = arregloJuego[5].valor;
    var g = arregloJuego[6].valor;
    var h = arregloJuego[7].valor;
    var i = arregloJuego[8].valor;
    var ganoO = (a == b && a == c && a == 1) || (d == e && d == f && f == 1) || (g == h && h == i && i == 1) ||
        (a == d && a == g && a == 1) || (b == e && b == h && h == 1) || (c == f && f == i && i == 1) ||
        (a == e && a == i && e == 1) || (c == e && g == e && e == 1);
    var ganoX = (a == b && a == c && a == 2) || (d == e && d == f && f == 2) || (g == h && h == i && i == 2) ||
        (a == d && a == g && a == 2) || (b == e && b == h && h == 2) || (c == f && f == i && i == 2) ||
        (a == e && a == i && e == 2) || (c == e && g == e && e == 2);
    if (ganoO) {
        var gano_1 = leer_1.leer('./ganoO.txt');
        console.log('                                                 ');
        console.log(gano_1);
        console.log('                                                 ');
        console.log('                                                 ');
        arregloDePosicionesdisponibles = false;
    }
    if (ganoX) {
        var gano_2 = leer_1.leer('./ganoX.txt');
        console.log('                                                 ');
        console.log(gano_2);
        console.log('                                                 ');
        console.log('                                                 ');
        arregloDePosicionesdisponibles = false;
    }
}
imprimir();
main();
