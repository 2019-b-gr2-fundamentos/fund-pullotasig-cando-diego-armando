import {leer} from './leer'

export function ver (){
    let baseDeDatos = leer('./arreglo.txt')
    console.log(baseDeDatos);
}