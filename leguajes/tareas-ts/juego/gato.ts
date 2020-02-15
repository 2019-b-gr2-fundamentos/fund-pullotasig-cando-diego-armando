import * as prompts from 'prompts';
import {leer} from '../arreglo/leer';
import { estructuraArreglo } from './estructura';
import { escribir } from '../arreglo/escribir';
import { estructura2 } from './estructura2';
const arregloNumeros = [
    {id: 1, valor: 0},
    {id: 2, valor: 0},
    {id: 3, valor: 0},
    {id: 4, valor: 0},
    {id: 5, valor: 0},
    {id: 6, valor: 0},
    {id: 7, valor: 0},
    {id: 8, valor: 0},
    {id: 9, valor: 0}
];
let arregloJuego = [...arregloNumeros];
let arregloDePosicionesdisponibles = true;
const empieza = 2;
let cambio = empieza;
function main(){

    juego();

    async function juego(){

        while(arregloDePosicionesdisponibles){ 
                                   
            let residuo = cambio % 2;
            switch(residuo){
                case 0:                    
                    await jugadorXXX();
                    await imprimir();

                    break;  
                default:
                    await jugadorOOO();
                    await imprimir();

                    break;  
            };
            cambio = cambio + 1;

            
            arregloDePosicionesdisponibles = arregloJuego.some(
                function(valorActual,i,arreglo){
                    const condicion = valorActual.valor == 0;
                    return condicion;
                }
            )    
           //arregloDePosicionesdisponibles = false;
    }

       

    }
    async function jugadorXXX(){

    let respuestaFilter = arregloJuego.filter(
        function(valorActual){
            const valor = valorActual.valor < 1;
            return valor;
        }
    );
    //console.log('respuesta filtradas disponibles',respuestaFilter);

    let respuestaMap =  respuestaFilter.map(
        function(valorACtual){
            const nuevoObjeto = {
                posicicion: valorACtual.id,
            };
            return nuevoObjeto;
        }
    );
    console.log('jugadas disponibles',respuestaMap);

    //let jugadaDisponible = respuestaFilter.length;
    //console.log('jugadas disponibles',jugadaDisponible);

    let posicionGatoAModificar = await prompts(
        {
            type: 'number',
            name: 'id',
            message: 'ingresa la id que desee marcar'
        }
    );
    //console.log('posicion que modificara el gato Gato',posicionGatoAModificar.id);

    let comprobarFilter = respuestaMap.some(
        function(valorActual,i,arreglo){
            const condicion = valorActual.posicicion == posicionGatoAModificar.id;
            return condicion;
        }
    );

    //console.log('posicion comprobacion',comprobarFilter);
    if(comprobarFilter == false){
        await jugadorXXX();  
    }else{
        //colocar valor

        const a = 1;
        const posicicion = posicionGatoAModificar.id -1;
        arregloJuego[posicicion].valor = a;

        console.log(arregloJuego);


    }
        
        
    }
    

    async function jugadorOOO(){
    let respuestaFilter = arregloJuego.filter(
        function(valorActual){
            const valor = valorActual.valor < 1;
            return valor;
        }
    );
    //console.log('respuesta filtradas disponibles',respuestaFilter);

    let respuestaMap =  respuestaFilter.map(
        function(valorACtual){
            const nuevoObjeto = {
                posicicion: valorACtual.id,
            };
            return nuevoObjeto;
        }
    );
   console.log('jugadas disponibles',respuestaMap);

   // let jugadaDisponible = respuestaFilter.length;
   // console.log('jugadas disponibles',jugadaDisponible);

    let posicionGatoAModificar = await prompts(
        {
            type: 'number',
            name: 'id',
            message: 'ingresa la id que desee marcar'
        }
    );
    //console.log('posicion que modificara el gato Gato',posicionGatoAModificar.id);

    let comprobarFilter = respuestaMap.some(
        function(valorActual,i,arreglo){
            const condicion = valorActual.posicicion == posicionGatoAModificar.id;
            return condicion;
        }
    );

    //console.log('posicion comprobacion',comprobarFilter);
    if(comprobarFilter == false){
        await jugadorOOO();         
    }else{
        const b = 2;
        const posicicion = posicionGatoAModificar.id -1;
        arregloJuego[posicicion].valor =b;

        console.log(arregloJuego);

    }  
    
    }   
}
function imprimir(){
    function sobre(){
        const idModificar1 = arregloJuego.findIndex(   
            function (valorActual, indice, arreglo){
                return valorActual.id == 1; 
            } 
        );
        let valor1 = arregloJuego[idModificar1].valor;

        const idModificar2 = arregloJuego.findIndex(   
            function (valorActual, indice, arreglo){
                return valorActual.id == 2; 
            } 
        );
        let valor2 = arregloJuego[idModificar2].valor;

        const idModificar3 = arregloJuego.findIndex(   
            function (valorActual, indice, arreglo){
                return valorActual.id == 3; 
            } 
        );
        let valor3 = arregloJuego[idModificar3].valor;


        function fila1(){
        
            let a;
            let b;
            let c;
            if(valor1 ==2 ){
                a='  ╔════╗  ■';
            }    
            if(valor1 ==1 ){
                a='  ¤   ¤  ■';
            }
            if(valor1 ==0 ){
                a='          ■';
            } 
            
            
            if(valor2 ==2 ){
                b='  ╔════╗  ■';
            }
            if(valor2 ==1 ){
                b='  ¤   ¤  ■';
            }
            if(valor2 ==0 ){
                b='          ■';
            } 

            if(valor3 ==2 ){
                c='  ╔════╗  ';
            }
            if(valor3 ==1 ){
                c='  ¤   ¤  ';
            }
            if(valor3 ==0 ){
                c='          ';
            } 
            console.log(a+b+c);

        }

        function fila2(){

            let a;
            let b;
            let c;
            if(valor1 ==2 ){
                a='  ║    ║  ■';
            }    
            if(valor1 ==1 ){
                a='    ¤    ■';
            }
            if(valor1 ==0 ){
                a='          ■';
            } 
            
 
            if(valor2 ==2 ){
                b='  ║    ║  ■';
            }
            if(valor2 ==1 ){
                b='    ¤    ■';
            }
            if(valor2 ==0 ){
                b='          ■';
            } 

            if(valor3 ==2 ){
                c='  ║    ║  ';
            }
            if(valor3 ==1 ){
                c='    ¤    ';
            }
            if(valor3 ==0 ){
                c='          ';
            } 
            console.log(a+b+c);
        }

        function fila3(){
 
            let a;
            let b;
            let c;
            if(valor1 ==2 ){
                a='  ╚════╝  ■';
            }    
            if(valor1 ==1 ){
                a='  ¤   ¤  ■';
            }
            if(valor1 ==0 ){
                a='          ■';
            } 

            if(valor2 ==2 ){
                b='  ╚════╝  ■';
            }
            if(valor2 ==1 ){
                b='  ¤   ¤  ■';
            }
            if(valor2 ==0 ){
                b='          ■';
            } 

            if(valor3 ==2 ){
                c='  ╚════╝  ';
            }
            if(valor3 ==1 ){
                c='  ¤   ¤  ';
            }
            if(valor3 ==0 ){
                c='          ';
            } 
            console.log(a+b+c);
        }

        fila1();
        fila2();
        fila3();

    }
    function medio(){
        const idModificar1 = arregloJuego.findIndex(   
            function (valorActual, indice, arreglo){
                return valorActual.id == 4; 
            } 
        );
        let valor1 = arregloJuego[idModificar1].valor;

        const idModificar2 = arregloJuego.findIndex(   
            function (valorActual, indice, arreglo){
                return valorActual.id == 5; 
            } 
        );
        let valor2 = arregloJuego[idModificar2].valor;

        const idModificar3 = arregloJuego.findIndex(   
            function (valorActual, indice, arreglo){
                return valorActual.id == 6; 
            } 
        );
        let valor3 = arregloJuego[idModificar3].valor;


        function fila1(){
        
            let a;
            let b;
            let c;
            if(valor1 ==2 ){
                a='  ╔════╗  ■';
            }    
            if(valor1 ==1 ){
                a='  ¤   ¤  ■';
            }
            if(valor1 ==0 ){
                a='          ■';
            } 
            
            
            if(valor2 ==2 ){
                b='  ╔════╗  ■';
            }
            if(valor2 ==1 ){
                b='  ¤   ¤  ■';
            }
            if(valor2 ==0 ){
                b='          ■';
            } 

            if(valor3 ==2 ){
                c='  ╔════╗  ';
            }
            if(valor3 ==1 ){
                c='  ¤   ¤  ';
            }
            if(valor3 ==0 ){
                c='          ';
            } 
            console.log(a+b+c);

        }

        function fila2(){

            let a;
            let b;
            let c;
            if(valor1 ==2 ){
                a='  ║    ║  ■';
            }    
            if(valor1 ==1 ){
                a='    ¤    ■';
            }
            if(valor1 ==0 ){
                a='          ■';
            } 
            
 
            if(valor2 ==2 ){
                b='  ║    ║  ■';
            }
            if(valor2 ==1 ){
                b='    ¤    ■';
            }
            if(valor2 ==0 ){
                b='          ■';
            } 

            if(valor3 ==2 ){
                c='  ║    ║  ';
            }
            if(valor3 ==1 ){
                c='    ¤    ';
            }
            if(valor3 ==0 ){
                c='          ';
            } 
            console.log(a+b+c);
        }

        function fila3(){
 
            let a;
            let b;
            let c;
            if(valor1 ==2 ){
                a='  ╚════╝  ■';
            }    
            if(valor1 ==1 ){
                a='  ¤   ¤  ■';
            }
            if(valor1 ==0 ){
                a='          ■';
            } 

            if(valor2 ==2 ){
                b='  ╚════╝  ■';
            }
            if(valor2 ==1 ){
                b='  ¤   ¤  ■';
            }
            if(valor2 ==0 ){
                b='          ■';
            } 

            if(valor3 ==2 ){
                c='  ╚════╝  ';
            }
            if(valor3 ==1 ){
                c='  ¤   ¤  ';
            }
            if(valor3 ==0 ){
                c='          ';
            } 
            console.log(a+b+c);
        }

        fila1();
        fila2();
        fila3();

    }
    function bajo(){
        const idModificar1 = arregloJuego.findIndex(   
            function (valorActual, indice, arreglo){
                return valorActual.id == 7; 
            } 
        );
        let valor1 = arregloJuego[idModificar1].valor;

        const idModificar2 = arregloJuego.findIndex(   
            function (valorActual, indice, arreglo){
                return valorActual.id == 8; 
            } 
        );
        let valor2 = arregloJuego[idModificar2].valor;

        const idModificar3 = arregloJuego.findIndex(   
            function (valorActual, indice, arreglo){
                return valorActual.id == 9; 
            } 
        );
        let valor3 = arregloJuego[idModificar3].valor;


        function fila1(){
        
            let a;
            let b;
            let c;
            if(valor1 ==2 ){
                a='  ╔════╗  ■';
            }    
            if(valor1 ==1 ){
                a='  ¤   ¤  ■';
            }
            if(valor1 ==0 ){
                a='          ■';
            } 
            
            
            if(valor2 ==2 ){
                b='  ╔════╗  ■';
            }
            if(valor2 ==1 ){
                b='  ¤   ¤  ■';
            }
            if(valor2 ==0 ){
                b='          ■';
            } 

            if(valor3 ==2 ){
                c='  ╔════╗  ';
            }
            if(valor3 ==1 ){
                c='  ¤   ¤  ';
            }
            if(valor3 ==0 ){
                c='          ';
            } 
            console.log(a+b+c);

        }

        function fila2(){

            let a;
            let b;
            let c;
            if(valor1 ==2 ){
                a='  ║    ║  ■';
            }    
            if(valor1 ==1 ){
                a='    ¤    ■';
            }
            if(valor1 ==0 ){
                a='          ■';
            } 
            
 
            if(valor2 ==2 ){
                b='  ║    ║  ■';
            }
            if(valor2 ==1 ){
                b='    ¤    ■';
            }
            if(valor2 ==0 ){
                b='          ■';
            } 

            if(valor3 ==2 ){
                c='  ║    ║  ';
            }
            if(valor3 ==1 ){
                c='    ¤    ';
            }
            if(valor3 ==0 ){
                c='          ';
            } 
            console.log(a+b+c);
        }

        function fila3(){
 
            let a;
            let b;
            let c;
            if(valor1 ==2 ){
                a='  ╚════╝  ■';
            }    
            if(valor1 ==1 ){
                a='  ¤   ¤  ■';
            }
            if(valor1 ==0 ){
                a='          ■';
            } 

            if(valor2 ==2 ){
                b='  ╚════╝  ■';
            }
            if(valor2 ==1 ){
                b='  ¤   ¤  ■';
            }
            if(valor2 ==0 ){
                b='          ■';
            } 

            if(valor3 ==2 ){
                c='  ╚════╝  ';
            }
            if(valor3 ==1 ){
                c='  ¤   ¤  ';
            }
            if(valor3 ==0 ){
                c='          ';
            } 
            console.log(a+b+c);
        }

        fila1();
        fila2();
        fila3();

    }
    sobre();
    console.log('■ ■ ■ ■ ■  ','■ ■ ■ ■ ■  ','■ ■ ■ ■ ■');
    medio();
    console.log('■ ■ ■ ■ ■  ','■ ■ ■ ■ ■  ','■ ■ ■ ■ ■');
    bajo();
}
main();