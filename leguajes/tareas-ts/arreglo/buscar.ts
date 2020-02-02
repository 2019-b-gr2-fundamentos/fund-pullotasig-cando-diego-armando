import {pokedex} from './new';
import {leer} from './leer';
import {estructuraDatosPokemon} from './estructuraDato';
import * as prompts from 'prompts';

export async function buscar(){
    const archivoleido = leer('./arreglo.txt');
    const archivoCargado = JSON.parse(archivoleido);
    
    const archivoConEstructura: estructuraDatosPokemon [] = archivoCargado;
    //
    const idBuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el ID del pokemon que desea editar'
    });
    
    const idModificar = archivoConEstructura.findIndex(
        function (valorActual){
            return valorActual.id == idBuscar.id; 
        } 
    ); 

    
 
    if(idModificar != -1){
        console.log(archivoConEstructura[idModificar]);

    const espera = prompts(
        { 
            type: 'text',
            name: 'accion',
            message: 'presione enter para continuar',
        }
    );
    await espera;

    }else{
        console.log('id no encontrada');
    };

    pokedex();

    
}