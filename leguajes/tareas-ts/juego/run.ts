//-------------------
import * as prompts from 'prompts';
import {leer} from '../arreglo/leer';
import { estructuraArreglo } from './estructura';
import { escribir } from '../arreglo/escribir';


//-------------------
// logo
console.log();
// bienvenida
console.log();
let archivoLeido = leer('./formato-base.txt');
    let archivoParseado = JSON.parse(archivoLeido);
    let copia: estructuraArreglo[] = archivoParseado;
    const arregloFinal = JSON.stringify(copia);

    escribir(
        './arreglo.txt',
        arregloFinal
    );

async function gato(){
    
    
    juego();


    async function juego(){
        console.log('1.                   jugar con "X"');
        console.log('2.                   jugar con "O"');
        const quienEmpieza = await prompts (
            {
                type: 'number',
                name: 'jugadorUno',
                message: 'escriba 1 ó 2'
            }
        );
        const empieza: number = quienEmpieza.jugadorUno;
        if(empieza!= 1){
            console.log('elija correctamente');
            juego();
            if(empieza!= 2){
                console.log('elija correctamente');
                juego();
            }
        }
        //console.log('fffffffffffff');
        let yaGano = false;
        do{
           /*
            let empate =false;
            if (empieza =9){
                empate = true;
                return empate;
            }
            let gano = false;
            if(empate){
                gano = true;
                return gano;
            }
            let yaGano = gano || empate;
*/
            empieza = empieza + 1;
            let residuo: Number = empieza % 2;


            switch(residuo){
                case 0:
                    
                    jugadorX();
                    break;
                default:
                   
                    jugadorO();
                    break;    
            }

        }while(empieza >9){
            console.log('termino el juego');
        };
        
    }
    async function jugadorX(){
        let archivoLeido = leer('./arreglo.txt');
    let archivoParseado = JSON.parse(archivoLeido);
    let formatoCargado: estructuraArreglo[] = archivoParseado;
        const respuestaFilter = formatoCargado.filter(
            function(valorActual){
                const valor = valorActual.valor < 1;
                return valor;
            }
        );
        //console.log(respuestaFilter);
    
        const respuestaMap =  respuestaFilter.map(
            function(valorACtual){
                const nuevoObjeto = {
                    posicion: valorACtual.posicion,
                };
                return nuevoObjeto;
            }
        );
    
        console.log(respuestaMap);
    
        let posicionGato = await prompts(
            {
                type: 'number',
                nombre: 'posicion',
                message: 'ingresa la posicion que desea marcar'
            }
        );
        console.log(formatoCargado);

        const marca = respuestaMap.findIndex(
            function (valorActual){
                return valorActual.posicion == posicionGato.posicion; 
            } 
        );
        console.log(marca);

        const a = 1;
        formatoCargado[marca].valor = a;

        const arregloFinal = JSON.stringify(formatoCargado);

    escribir(
        './arreglo.txt',
        arregloFinal
    );
    }

    async function jugadorO(){
        let archivoLeido = leer('./arreglo.txt');
    let archivoParseado = JSON.parse(archivoLeido);
    let formatoCargado: estructuraArreglo[] = archivoParseado;
        const respuestaFilter = formatoCargado.filter(
            function(valorActual){
                const valor0 = valorActual.valor = 0;
                return valor0;
            }
        );
    
        const respuestaMap =  respuestaFilter.map(
            function(valorACtual){
                const nuevoObjeto = {
                    posicion: valorACtual.posicion,
                };
                return nuevoObjeto;
            }
        );
    
        console.log(respuestaMap);
    
        let posicionGato = await prompts(
            {
                type: 'number',
                nombre: 'posicion',
                message: 'ingresa la posicion que desea marcar'
            }
        );
        console.log(formatoCargado);

        const marca = respuestaMap.findIndex(
            function (valorActual){
                return valorActual.posicion == posicionGato.posicion; 
            } 
        );
        console.log(marca);

        const a = 1;
       

        const arregloFinal = JSON.stringify(formatoCargado);

    escribir(
        './arreglo.txt',
        arregloFinal
    );
    }

    async function espaciosLibres(){
        
    
    }
}

gato();
/*
// filter para buscar los iguales a cero y luego
// necesitamos un map para imprimir solo los que se pueden modificar

en la validadacion de ganador tendremos las posiciones de ganador || y otra || etc

llamamos a txt gandor o || x

verificacion de espacios libres()
// .filter ---> filtrar el arreglo (condicion ---> devuelve un arreglo con valores filtrados)
    const respuestaFilter = arregloEstudiante
    .filter(
        function(valorActual,i,arreglo){
            const condicion = valorActual.nota0 = 0;

            return condicion

        }

    );
//.map ---> transformamos el arreglo (mutamos el arreglo)
    
    const respuestaMap =  respuestaFilter.map(
        function(valorACtual,i,arreglo){
            const nuevoObjeto = {
                id: valorACtual.id,
            };
            return nuevoObjeto;
        }
    );

    respuesta map 

    let posicion = await prompts(
        {
            type: 'number',
            nombre: 'posicionGato',
            message: 'ingresa la posicion donde desea marcar'

        }
    );

    const idModificar = archivoConEstructura.findIndex( // identificamos
        function (valorActual){
            return valorActual.id == idBuscar.id; 
        } 
    ); 
     posicion
     |
     |
     |
     |
     °
     pasamos a las funciones añadir

añadirX(){
    recibimos = posicion;
    arregloGato[posicion] = 1

}

añadir0(){
    recibimos = posicion;
    arregloGato[posicion] = 2

}



// uso leer un txt 
y despues lo guardo en una dirrecion la cual voy a modificar y despues
con escribir lo guardo en un nuevo archivo 
solamente uso en primer txt como un formato para el inico de la programa
*/