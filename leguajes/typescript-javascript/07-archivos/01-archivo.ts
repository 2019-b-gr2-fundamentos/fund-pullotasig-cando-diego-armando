//import { leerArchivo } from "./02-leerlarchivo";
//import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.interfases";
import  * as prompts from 'prompts';
async function main(){
    
    let contador= 1;
    const arregloEstudiantes: Estudiante[]=[];
    const arregloPreguntas= [
        {
            type: 'text',
            name:'nombre',
            massage:'Ingrese su nombre'

        }
    ];

    const respuestaEstudianteUno = await prompts(arregloPreguntas);
    const nuevoRegistroUno ={
        id: contador,
        nombre: respuestaEstudianteUno.nombre
    };

    contador= contador+1;
    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);
    const nuevoRegistroDos ={
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    };
    contador = contador+ 1;
    arregloEstudiantes.push(nuevoRegistroDos);

    console.log('Cual usuario desea editar ?');
    console.log(arregloEstudiantes);

    const idABuscar = await prompts (
        {
            type: 'number',
            name: 'id',
            message: 'Ingresa el Id del registro a editar'
        }
    )

    const indiceEncontrado =arregloEstudiantes.findIndex(
        function (valorActual, indice, arreglo){
            
            console.log(valorActual);
            console.log(indice);
            console.log(arreglo);
            return valorActual.id == idABuscar.id;

        }
    )
    console.log('Indice encontrado: ', indiceEncontrado);
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

/*
    const textoLeido = leerArchivo('./ejemplo.txt');
    const nuevoContenido = 'TENGO HAMBRE :( \n';

    escribirArchivo('./ejemplo.txt', '');
    console.log(textoLeido + nuevoContenido);
*/

}

main().then().catch();