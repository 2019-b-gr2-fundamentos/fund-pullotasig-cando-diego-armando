export function filter(arreglo: any[], funcion: (valorActual:any, indice?:number,arreglo?:any[]) => boolean): any[]{
    const arregloFiltrado = [];
    for( let i = 0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            arreglo,
        );
        if(respuestaFuncion == true){
        arregloFiltrado.push(arreglo[i]);
        }
    }
    return arregloFiltrado;
}

export function every(arreglo: any[],
    funcion: (valorActual:any, indice?:number,arreglo?:any[]) => boolean): boolean{
    const funEvery = true;
    for( let i = 0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            arreglo,
        );
        if(respuestaFuncion == false){
        return false;
        }
    }
    return funEvery;
}

export function some(arreglo: any[],
    funcion: (valorActual:any, indice?:number,arreglo?:any[]) => boolean): boolean{
    const funSome = false;
    for( let i = 0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            arreglo,
        );
        if(respuestaFuncion == true){
        return true;
        }
    }
    return funSome;
}

export function forEach(arreglo: any[],
    funcion: (valorActual:any, indice?:number,arreglo?:any[]) => void): void{
        for( let i = 0; i < arreglo.length; i++){
        funcion(
            arreglo[i],
            i,
            arreglo,
        );
    }

}

export function map(arregloOriginal: any[],
    funcion: (valorActual:any, indice?:number,arreglo?:any[]) => any[]): any{
        let funMap = [];
        const arreglo = [...arregloOriginal];
        for( let i = 0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            [...arreglo],
        );
        funMap.push(respuestaFuncion)
    }
    return funMap
}

export function reduce(arreglo:any[],
    funcion: (contador:number,
       valorActual:any,
       indice: number, arreglo) =>number,
       contador:number):number
{
   for(let i = 0; i < arreglo.length; i ++){
       contador = funcion(contador, arreglo[i], i, arreglo);
   }
   return contador;
}