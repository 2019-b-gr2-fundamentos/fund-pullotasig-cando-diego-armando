import {leer} from './f-leer';
import { estructuraDatosPokemon } from './formato-pokemon';
import * as prompts from 'prompts';
import {escribir} from './escribir';

export async function buscar(){

    const formatoDeDatos = leer('./formato.txt');

    const archivoDatosPokemon= JSON.parse(formatoDeDatos);

    const arregloDePokedex: estructuraDatosPokemon[] = archivoDatosPokemon;

    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por NOMBRE'
    });
    const estudianteEncontrado = arregloDePokedex
            .find( // return CONDICION
                function(valorActual){
                    return valorActual.nombre == buscar.nombre;
                }
            );
    console.log(estudianteEncontrado);

    const arreglo = JSON.stringify(arregloDePokedex);

    //
    escribir(
        './arreglo.txt',
        arreglo
    ) 

}