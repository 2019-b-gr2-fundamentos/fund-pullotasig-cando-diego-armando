// boolean
// string
//null -> object
//number
//PERSONA
//ANIMAL
//CASI EN TODOS LOS LENGuAJES SE UTILIZA UNa
//Struct->Estructura de datos
//Clase-> estructura de datos ->metodos
var edad = 20;
var poliPerro1 = {
    'nombreCientifico': 'canis lupus familiaris',
    "llave": "valor",
    noEsNecesario: true,
    enojo: undefined,
    edadActual: edad //variables
};
//Estructura de datos en lenguaje no tipado
var poliPerro2 = {
    nombreCientifico: 'canis lupus familiaris',
    nombre: 'Grandote',
    clan: 'PoliCanis',
    edad: 10,
    hijos: null,
    perritas: ['manuela', 'zoraida'],
    vacunado: true
};
/*
//Estructura de datos en lenguaje tipado
interface animal {  // interface -> (Struct)
    nombreCientifico: string;
    nombre: string;
    clan: string;
    edad?: number; // '?' al final significa opcional
    // hijos: null,
    perritas?: string[]; // '?' al final significa opcional
    vacunado?: boolean; // '?' al final significa opcional
    duenio: Duenio;
}
//Estructura de datos en lenguaje tipado
interface Duenio {  // interface -> (Struct)
    nombres: string;
    apellidos: string;
    cedula?: string;
    fechaDeNacimiento: number;
    mascotasPerros?: animal[];
}
*/
var poliPerro = {
    nombreCientifico: 'canis lupus familiaris',
    nombre: 'tonny',
    clan: null
};
var duenio1 = {
    apellidos: 'Pullotasig',
    nombres: 'Diego',
    fechaDeNacimiento: 3,
    mascotas: [poliPerro]
};
// Guardar datos en una estructura de datos
poliPerro.clan = 'polican';
poliPerro.duenio = duenio1;
poliPerro.edad = 4;
poliPerro.vacunado = true;
// Acceder a los datos de una estructura de datos
console.log(poliPerro);
