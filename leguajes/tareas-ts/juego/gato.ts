import * as prompts from 'prompts';
import {leer} from '../arreglo/leer';
import {some} from './operadores';
import {filter} from './operadores';
import {map} from './operadores';
import { estructuraArreglo } from './estructura';
let archivoLeido = leer('./logo-juego.txt');
console.log(archivoLeido);
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
    
           //arregloDePosicionesdisponibles = false;
    }

       

    }
    async function jugadorXXX(){

    let respuestaFilter = arregloJuego.filter(
        function(valorActual){
            const valor = valorActual.valor < 1;
            return valor;
        }
    )




    let respuestaMap =  respuestaFilter.map(
        function(valorACtual){
            const nuevoObjeto = {
                posicicion: valorACtual.id,
            };
            return nuevoObjeto;
        }
    );

    let marca = leer('./marcaX.txt');
    console.log(marca);
    console.log('                                                 ');
    let posicionGatoAModificar = await prompts(
        {
            type: 'number',
            name: 'id',
            message: 'ESCRIBA EL NUMERO DE LA CASILLA QUE QUIERE MARCAR'
        }
    );

    let comprobarFilter = respuestaMap.some(
        function(valorActual,i,arreglo){
            const condicion = valorActual.posicicion == posicionGatoAModificar.id;
            return condicion;
        }
    );
    arregloDePosicionesdisponibles = arregloJuego.some(
        function(valorActual,i,arreglo){
            const condicion = valorActual.valor == 0;
            return condicion;
        }
    ) 

    if(comprobarFilter == false){
        imprimir();
        console.log('no se puede marcar esa casilla');
        await jugadorXXX();  
    }else{

        const a = 2;
        const posicicion = posicionGatoAModificar.id -1;
        arregloJuego[posicicion].valor = a;

        gano();

    }
    
    }
    
    async function jugadorOOO(){

        let respuestaFilter = arregloJuego.filter(
            function(valorActual){
                const valor = valorActual.valor < 1;
                return valor;
            }
        );

    
        let respuestaMap =  respuestaFilter.map(
            function(valorACtual){
                const nuevoObjeto = {
                    posicicion: valorACtual.id,
                };
                return nuevoObjeto;
            }
        );

        let marca = leer('./marcaO.txt');
        console.log(marca);
        console.log('                                                 ');
        let posicionGatoAModificar = await prompts(
            {
                type: 'number',
                name: 'id',
                message: 'ESCRIBA EL NUMERO DE LA CASILLA QUE QUIERE MARCAR'
            }
        );
        //console.log('posicion que modificara el gato Gato',posicionGatoAModificar.id);
    
        let comprobarFilter = respuestaMap.some(
            function(valorActual,i,arreglo){
                const condicion = valorActual.posicicion == posicionGatoAModificar.id;
                return condicion;
            }
        );
        arregloDePosicionesdisponibles = arregloJuego.some(
            function(valorActual,i,arreglo){
                const condicion = valorActual.valor == 0;
                return condicion;
            }
        ) 
    
        //console.log('posicion comprobacion',comprobarFilter);
        if(comprobarFilter == false){
            imprimir();
            console.log('no se puede marcar esa casilla');
            await jugadorOOO();  
        }else{
            //colocar valor
    
            const a = 1;
            const posicicion = posicionGatoAModificar.id -1;
            arregloJuego[posicicion].valor = a;
    
            gano();

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
        let a;
        let b;
        let c;

        function fila1(){

            if(valor1 ==2 ){
                a='  ▒██     ██▒  ║';
            }    
            if(valor1 ==1 ){
                a='   ▒▄█████▄    ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ▒██     ██▒  ║';
            }
            if(valor2 ==1 ){
                b='   ▒▄█████▄    ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='  ▒██     ██▒  ';
            }
            if(valor3 ==1 ){
                c='   ▒▄█████▄    ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila2(){

            if(valor1 ==2 ){
                a='  ▒▒ █▄ ▄█▒▒░  ║';
            }    
            if(valor1 ==1 ){
                a='  ▒██▒    ██▒  ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ▒▒ █▄ ▄█▒▒░  ║';
            }
            if(valor2 ==1 ){
                b='  ▒██▒    ██▒  ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='  ▒▒ █▄ ▄█▒▒░  ';
            }
            if(valor3 ==1 ){
                c='  ▒██▒    ██▒  ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila3(){

            if(valor1 ==2 ){
                a='  ░░  ▄█▄▒ ░   ║';
            }    
            if(valor1 ==1 ){
                a='  ▒██░    ██▒  ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ░░  ▄█▄▒ ░   ║';
            }
            if(valor2 ==1 ){
                b='  ▒██░    ██▒  ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='  ░░  ▄█▄▒ ░   ';
            }
            if(valor3 ==1 ){
                c='  ▒██░    ██▒  ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila4(){

            if(valor1 ==2 ){
                a='   ░▒█▀ ▀█░▒   ║';
            }    
            if(valor1 ==1 ){
                a='  ▒██     ██░  ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='   ░▒█▀ ▀█░▒   ║';
            }
            if(valor2 ==1 ){
                b='  ▒██     ██░  ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='   ░▒█▀ ▀█░▒   ';
            }
            if(valor3 ==1 ){
                c='  ▒██     ██░  ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila5(){

            if(valor1 ==2 ){
                a='  ▒██▒   ▒██▒  ║';
            }    
            if(valor1 ==1 ){
                a='  ░ ▀█████▀▒   ║';
            }
            if(valor1 ==0 ){
                a='             1 ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ▒██▒   ▒██▒  ║';
            }
            if(valor2 ==1 ){
                b='  ░ ▀█████▀▒   ║';
            }
            if(valor2 ==0 ){
                b='             2 ║';
            } 

            if(valor3 ==2 ){
                c='  ▒██▒   ▒██▒  ';
            }
            if(valor3 ==1 ){
                c='  ░ ▀█████▀▒   ';
            }
            if(valor3 ==0 ){
                c='             3 ';
            } 
            console.log(a+b+c);

        }



        fila1();
        fila2();
        fila3();
        fila4();
        fila5();

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
        let a;
        let b;
        let c;

        function fila1(){

            if(valor1 ==2 ){
                a='  ▒██     ██▒  ║';
            }    
            if(valor1 ==1 ){
                a='   ▒▄█████▄    ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ▒██     ██▒  ║';
            }
            if(valor2 ==1 ){
                b='   ▒▄█████▄    ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='  ▒██     ██▒  ';
            }
            if(valor3 ==1 ){
                c='   ▒▄█████▄    ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila2(){

            if(valor1 ==2 ){
                a='  ▒▒ █▄ ▄█▒▒░  ║';
            }    
            if(valor1 ==1 ){
                a='  ▒██▒    ██▒  ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ▒▒ █▄ ▄█▒▒░  ║';
            }
            if(valor2 ==1 ){
                b='  ▒██▒    ██▒  ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='  ▒▒ █▄ ▄█▒▒░  ';
            }
            if(valor3 ==1 ){
                c='  ▒██▒    ██▒  ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila3(){

            if(valor1 ==2 ){
                a='  ░░  ▄█▄▒ ░   ║';
            }    
            if(valor1 ==1 ){
                a='  ▒██░    ██▒  ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ░░  ▄█▄▒ ░   ║';
            }
            if(valor2 ==1 ){
                b='  ▒██░    ██▒  ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='  ░░  ▄█▄▒ ░   ';
            }
            if(valor3 ==1 ){
                c='  ▒██░    ██▒  ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila4(){

            if(valor1 ==2 ){
                a='   ░▒█▀ ▀█░▒   ║';
            }    
            if(valor1 ==1 ){
                a='  ▒██     ██░  ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='   ░▒█▀ ▀█░▒   ║';
            }
            if(valor2 ==1 ){
                b='  ▒██     ██░  ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='   ░▒█▀ ▀█░▒   ';
            }
            if(valor3 ==1 ){
                c='  ▒██     ██░  ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila5(){

            if(valor1 ==2 ){
                a='  ▒██▒   ▒██▒  ║';
            }    
            if(valor1 ==1 ){
                a='  ░ ▀█████▀▒   ║';
            }
            if(valor1 ==0 ){
                a='             4 ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ▒██▒   ▒██▒  ║';
            }
            if(valor2 ==1 ){
                b='  ░ ▀█████▀▒   ║';
            }
            if(valor2 ==0 ){
                b='             5 ║';
            } 

            if(valor3 ==2 ){
                c='  ▒██▒   ▒██▒  ';
            }
            if(valor3 ==1 ){
                c='  ░ ▀█████▀▒   ';
            }
            if(valor3 ==0 ){
                c='             6 ';
            } 
            console.log(a+b+c);

        }



        fila1();
        fila2();
        fila3();
        fila4();
        fila5();

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
        let a;
        let b;
        let c;

        function fila1(){

            if(valor1 ==2 ){
                a='  ▒██     ██▒  ║';
            }    
            if(valor1 ==1 ){
                a='   ▒▄█████▄    ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ▒██     ██▒  ║';
            }
            if(valor2 ==1 ){
                b='   ▒▄█████▄    ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='  ▒██     ██▒  ';
            }
            if(valor3 ==1 ){
                c='   ▒▄█████▄    ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila2(){

            if(valor1 ==2 ){
                a='  ▒▒ █▄ ▄█▒▒░  ║';
            }    
            if(valor1 ==1 ){
                a='  ▒██▒    ██▒  ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ▒▒ █▄ ▄█▒▒░  ║';
            }
            if(valor2 ==1 ){
                b='  ▒██▒    ██▒  ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='  ▒▒ █▄ ▄█▒▒░  ';
            }
            if(valor3 ==1 ){
                c='  ▒██▒    ██▒  ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila3(){

            if(valor1 ==2 ){
                a='  ░░  ▄█▄▒ ░   ║';
            }    
            if(valor1 ==1 ){
                a='  ▒██░    ██▒  ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ░░  ▄█▄▒ ░   ║';
            }
            if(valor2 ==1 ){
                b='  ▒██░    ██▒  ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='  ░░  ▄█▄▒ ░   ';
            }
            if(valor3 ==1 ){
                c='  ▒██░    ██▒  ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila4(){

            if(valor1 ==2 ){
                a='   ░▒█▀ ▀█░▒   ║';
            }    
            if(valor1 ==1 ){
                a='  ▒██     ██░  ║';
            }
            if(valor1 ==0 ){
                a='               ║';
            } 
            
            
            if(valor2 ==2 ){
                b='   ░▒█▀ ▀█░▒   ║';
            }
            if(valor2 ==1 ){
                b='  ▒██     ██░  ║';
            }
            if(valor2 ==0 ){
                b='               ║';
            } 

            if(valor3 ==2 ){
                c='   ░▒█▀ ▀█░▒   ';
            }
            if(valor3 ==1 ){
                c='  ▒██     ██░  ';
            }
            if(valor3 ==0 ){
                c='               ';
            } 
            console.log(a+b+c);

        }
        function fila5(){

            if(valor1 ==2 ){
                a='  ▒██▒   ▒██▒  ║';
            }    
            if(valor1 ==1 ){
                a='  ░ ▀█████▀▒   ║';
            }
            if(valor1 ==0 ){
                a='             7 ║';
            } 
            
            
            if(valor2 ==2 ){
                b='  ▒██▒   ▒██▒  ║';
            }
            if(valor2 ==1 ){
                b='  ░ ▀█████▀▒   ║';
            }
            if(valor2 ==0 ){
                b='             8 ║';
            } 

            if(valor3 ==2 ){
                c='  ▒██▒   ▒██▒  ';
            }
            if(valor3 ==1 ){
                c='  ░ ▀█████▀▒   ';
            }
            if(valor3 ==0 ){
                c='             9 ';
            } 
            console.log(a+b+c);

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
function gano(){
    const a = arregloJuego[0].valor;
    const b = arregloJuego[1].valor;
    const c = arregloJuego[2].valor;
    const d = arregloJuego[3].valor;
    const e = arregloJuego[4].valor;
    const f = arregloJuego[5].valor;
    const g = arregloJuego[6].valor;
    const h = arregloJuego[7].valor;
    const i = arregloJuego[8].valor;

    let ganoO: boolean = (a==b && a==c && a==1)|| (d==e && d==f && f==1)||(g==h && h==i && i==1)||
    (a==d && a==g && a==1)|| (b==e && b==h && h==1)||(c==f && f==i && i==1)||
    (a==e && a==i && e==1)|| (c==e && g==e && e==1);

    let ganoX: boolean = (a==b && a==c && a==2)|| (d==e && d==f && f==2)||(g==h && h==i && i==2)||
    (a==d && a==g && a==2)|| (b==e && b==h && h==2)||(c==f && f==i && i==2)||
    (a==e && a==i && e==2)|| (c==e && g==e && e==2);    
    
    if(ganoO){
        let gano = leer('./ganoO.txt');

        console.log('                                                 ');
        console.log(gano);
        console.log('                                                 ');
        console.log('                                                 ');
        arregloDePosicionesdisponibles = false;
    }
    if(ganoX){
        let gano = leer('./ganoX.txt');

        console.log('                                                 ');
        console.log(gano);
        console.log('                                                 ');
        console.log('                                                 ');
        arregloDePosicionesdisponibles = false;
    }
    
  
}

imprimir();
main();