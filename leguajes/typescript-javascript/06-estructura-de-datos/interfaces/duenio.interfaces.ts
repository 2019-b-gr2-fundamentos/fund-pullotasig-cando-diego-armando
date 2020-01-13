import {animal}from'./animalanimal-perrito.interface';
export interface Duenio {  // interface -> (Struct)
    nombres: string;
    apellidos: string;
    cedula?: string;
    fechaDeNacimiento: number;
    mascotas?: animal[];
}