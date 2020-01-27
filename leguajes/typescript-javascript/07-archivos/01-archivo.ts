import { leerArchivo } from "./02-leerlarchivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.interfases";
import * as prompts from 'prompts';
async function main(){

   
    const contenidoArchivo = leerArchivo(
        './ejemplo.txt'
    );
    //console.log('contenido del arreglo:', contenidoArchivo);
    // visualisacion previa
    /* 
parcear transformamos un texto en memoria 
si se parcea algo y esta mal estructurado
    */
   let arregloCargadoDeArchivo; // undefined
   try{
       const arregloCargadoDeArchivo= JSON.parse(contenidoArchivo);
   }catch(error){
    arregloCargadoDeArchivo = [];

      //console.log(error); // visualizar error
       console.error('Error parseado de archivo');


   }

   /*try{
       console.error('Error parseado de archivo');
       console.error('Error parseado de archivo');
       console.error('Error parseado de archivo');


    throw new Error("fffffffffffffffffffffffffffffffffffffff");
    console.error('Error parseado de archivo');
}catch(error){
console.error('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
    const arregloCargadoDeArchivo= JSON.parse(contenidoArchivo);
}*/
let contador = 1;


    //OPERADORES  
    let minimoID= -1;
    arregloCargadoDeArchivo.forEach(  // no envia nada y no devuelve nada
            // Iterar --->

            function(valorActual){
                const idActual =valorActual.id;
                if (idActual>minimoID){
                    minimoID = idActual
                }

            }
        );
    minimoID = minimoID +1 ;

    contador = minimoID;
    
    
    // si el texto no esta bien formateado de error
    const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
    const arregloPreguntas = [
        { 
            type: 'text',
            name: 'nombre',
            message: 'Ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    
    const nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    
    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);
    
    console.log('Cual usuario quieres Editar?');
    console.log(arregloEstudiantes);

    // OPERADORES!!! -> REEMPLAZAR AL !FOR!

    const idABuscar = await prompts({
            type: 'number',
            name: 'id',
            message: 'Ingresa el ID del registro a Editar'
    })
    const indiceEncontrado = arregloEstudiantes.findIndex( // return CONDICION ->
        function (valorActual, indice, arreglo){
            return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
        } // Si encuentra nos devuelve el indice
          // No encuentra
    )
    console.log('Indice encontrado:', indiceEncontrado);
    const nombreAEditar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo nombre'
    })
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
    console.log(arregloEstudiantes);

    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por NOMBRE'
    });
    const estudianteEncontrado = arregloEstudiantes
            .find( // return CONDICION
                function(valorActual){
                    return valorActual.nombre == buscar.nombre;
                }
            );
    console.log(estudianteEncontrado);

    const arregloFinal = JSON.stringify(arregloEstudiantes);
    // JSON.stringify(  convertir objeto o arreglo o memoria

    console.log(arregloFinal);

    escribirArchivo(
        './arreglo.txt',
        arregloFinal
    )










    /*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :( \n';
    escribirArchivo('./ejemplo.txt', '');
    console.log(textoLeido + nuevoContenido);
    
    
    const texto = leerArchivo('./dragon.txt');

    console.log(`bien: ${texto} ${texto}`);

    */
}

main().then().catch();