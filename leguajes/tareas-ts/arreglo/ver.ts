import {leer} from './leer'
import * as prompts from 'prompts'
import { pokedex } from './new';

export async function ver (){
    const archivole = leer('./logo.txt');
    console.log(archivole);
    let baseDeDatos = leer('./arreglo.txt')
    let formatoConvertido = JSON.parse(baseDeDatos);
    console.log(formatoConvertido);
    const espera = prompts(
        { 
            type: 'text',
            name: 'accion',
            message: 'presione enter para continuar',
        }
    );
    await espera;

    pokedex();

}