// Referencias
function main(){
    //valores iniciales
    let uno =1;
    let dos = uno;
    let tres = dos;

    console.log('uno',uno);
    console.log('dos',dos);
    console.log('tres',tres);
    // nuevo valor
    uno = 5;
    
    console.log('uno',uno); // cambia en este console
    console.log('dos',dos);
    console.log('tres',tres);
    // arreglos iniciales
    let arreglito = [1,2,3];
    let miOtroArreglito = [];
    let a = arreglito[0];
    let b = arreglito[1];

    console.log('arreglito',arreglito); // arreglito [ 1, 2, 3 ]
    console.log('a',a);
    console.log('b',b);

    miOtroArreglito = arreglito;
    // ingreso nuevo valor en el arreglo
    miOtroArreglito.push(2);

    console.log('arreglito',arreglito); // arreglito [ 1, 2, 3, 2 ]
    console.log('mi otro arreglito',miOtroArreglito); // mi otro arreglito [ 1, 2, 3, 2 ]
    console.log('a',a);
    console.log('b',b);


    // clonar arreglo  --- lo mismo pero sirve para variables 
    miOtroArreglito = [
        ...arreglito,
        ...arreglito
    ];

    // sirve para trabajar bajo bases o formatos para prueba o ejecucion
}

main();