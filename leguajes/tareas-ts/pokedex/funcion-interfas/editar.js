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
var f_leer_1 = require("./f-leer");
var prompts = require("prompts");
var escribir_1 = require("./escribir");
function editar() {
    return __awaiter(this, void 0, void 0, function () {
        var formatoDeDatos, arregloDePokedex, archivoDatosPokemon, idABuscar, indiceEncontrado, datosIngreoPokedex, respuestasDatosIngreoPokedex, nuevoRegistroUno, arreglo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formatoDeDatos = f_leer_1.leer('./formato.txt');
                    arregloDePokedex = JSON.parse(formatoDeDatos);
                    archivoDatosPokemon = arregloDePokedex;
                    console.log('Cual usuario quieres Editar?');
                    console.log(formatoDeDatos);
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el ID del registro a Editar'
                        })];
                case 1:
                    idABuscar = _a.sent();
                    indiceEncontrado = archivoDatosPokemon.findIndex(// return CONDICION ->
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
                    console.log(archivoDatosPokemon);
                    return [4 /*yield*/, prompts(datosIngreoPokedex)];
                case 2:
                    respuestasDatosIngreoPokedex = _a.sent();
                    nuevoRegistroUno = {
                        apodo: respuestasDatosIngreoPokedex.apodo,
                        nombre: respuestasDatosIngreoPokedex.nombre,
                        tipo: respuestasDatosIngreoPokedex.tipo,
                        nivel: respuestasDatosIngreoPokedex.nivel,
                        edad: respuestasDatosIngreoPokedex.edad
                    };
                    archivoDatosPokemon.push(nuevoRegistroUno);
                    arreglo = JSON.stringify(archivoDatosPokemon);
                    escribir_1.escribir('./arreglo.txt', arreglo);
                    return [2 /*return*/];
            }
        });
    });
}
exports.editar = editar;
/*
const nombreAEditar = await prompts(
    {
        type: 'text',
        name: 'apodo',
        message: 'Ingresa el apodo del pokemon'
    }
);
const nombreAEditar = await prompts(
    
    {
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nombre del pokemon'
    }
);
const nombreAEditar = await prompts(
    
    {
        type: 'text',
        name: 'tipo',
        message: 'Ingresa el tipo del pokemon'
    }
);
const nombreAEditar = await prompts(
    
    {
        type: 'text',
        name: 'nivel',
        message: 'Ingresa el nivel del pokemon'
    }
);
const nombreAEditar = await prompts(
    
    {
        type: 'text',
        name: 'edad',
        message: 'Ingresa la edad en meses del pokemon'
    }
);
archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
archivoDatosPokemon[indiceEncontrado].nombre = nombreAEditar.nombre;
*/
