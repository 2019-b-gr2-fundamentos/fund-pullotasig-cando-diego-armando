//-------------------
import * as prompts from 'prompts';


//-------------------
// logo
console.log();
// bienvenida
console.log();

async function gato(){
    // matriz original
    let arregloGato = Array([0,0,0],[0,0,0],[0,0,0]);
    // console.log(arregloGato);
    
    let posicion = await prompts(
        {
            type: 'number',
            nombre: 'posicionGato',
            message: 'ingresa la posicion donde desea marcar'

        }
    );


    
// dos arreglos uno esta llenos de ceros y otro esta con las imagenes y los comparamos
// falta secuencia para intecalar x y o
    

}

gato();
/*
corrida(){
    if(){
        if(){
            if(){
                if(){

                }else{
                    
                }

            }else{
                
            }

        }else{
            
        }
        
    }else{
        
    }
}
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