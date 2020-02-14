// Referencias
function main() {
    //valores iniciales
    var uno = 1;
    var dos = uno;
    var tres = dos;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    // nuevo valor
    uno = 5;
    console.log('uno', uno); // cambia en este console
    console.log('dos', dos);
    console.log('tres', tres);
    // arreglos iniciales
    var arreglito = [1, 2, 3];
    var miOtroArreglito = [];
    var a = arreglito[0];
    var b = arreglito[1];
    console.log('arreglito', arreglito);
    console.log('a', a);
    console.log('b', b);
    miOtroArreglito = arreglito;
    miOtroArreglito.push(2);
    console.log('arreglito', arreglito);
    console.log('mi otro arreglito', miOtroArreglito);
    console.log('a', a);
    console.log('b', b);
}
main();
