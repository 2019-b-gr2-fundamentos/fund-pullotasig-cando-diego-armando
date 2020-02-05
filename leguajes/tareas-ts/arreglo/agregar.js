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
Object.defineProperty(exports, "__esModule", { value: true });
var leer_1 = require("./leer");
var prompts = require("prompts");
var escribir_1 = require("./escribir");
var new_1 = require("./new");
function agregar() {
    return __awaiter(this, void 0, void 0, function () {
        var archivole, formatoDeDatos, formatoConvertido, contador, minimoID, arregloDePokedex, datosIngresoPokedex, respuestasIngresar, nuevoRegistro, arregloFinal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    archivole = leer_1.leer('./logo.txt');
                    console.log(archivole);
                    formatoDeDatos = leer_1.leer('./arreglo.txt');
                    formatoConvertido = JSON.parse(formatoDeDatos);
                    contador = 0;
                    minimoID = 0;
                    formatoConvertido.forEach(function (valorActual) {
                        var idActual = valorActual.id;
                        if (idActual > minimoID) {
                            minimoID = idActual;
                        }
                    });
                    minimoID = minimoID + 1;
                    contador = minimoID;
                    arregloDePokedex = formatoConvertido;
                    datosIngresoPokedex = [
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
                            type: 'number',
                            name: 'nivel',
                            message: 'Ingresa el nivel del pokemon'
                        },
                        {
                            type: 'number',
                            name: 'edad',
                            message: 'Ingresa la edad en meses del pokemon'
                        }
                    ];
                    return [4 /*yield*/, prompts(datosIngresoPokedex)];
                case 1:
                    respuestasIngresar = _a.sent();
                    nuevoRegistro = {
                        id: contador,
                        nombre: respuestasIngresar.nombre,
                        apodo: respuestasIngresar.apodo,
                        tipo: respuestasIngresar.tipo,
                        nivel: respuestasIngresar.nivel,
                        edad: respuestasIngresar.edad
                    };
                    arregloDePokedex.push(nuevoRegistro);
                    arregloFinal = JSON.stringify(arregloDePokedex);
                    escribir_1.escribir('./arreglo.txt', arregloFinal);
                    /*
                        console.log('primero',arregloFinal);
                    
                    const prueba = leer('./arreglo.txt');
                   // console.log(formatoDeDatos);
                
                    let formatoPrueba = JSON.parse(prueba);
                    console.log('segundo',formatoPrueba);
                    */
                    new_1.pokedex();
                    return [2 /*return*/];
            }
        });
    });
}
exports.agregar = agregar;
