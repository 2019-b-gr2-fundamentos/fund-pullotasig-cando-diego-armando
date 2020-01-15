import{Duenio} from './duenio.interfaces';
export interface animal {  // interface -> (Struct)
    nombreCientifico: string;
    nombre: string;
    clan: string;
    edad?: number; // '?' al final significa opcional
    // hijos: null,
    perritas?: string[]; // '?' al final significa opcional
    vacunado?: boolean; // '?' al final significa opcional
    duenio?: Duenio;
}