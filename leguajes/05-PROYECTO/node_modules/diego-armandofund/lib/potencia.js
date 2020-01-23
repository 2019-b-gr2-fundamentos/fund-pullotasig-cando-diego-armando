module.exports = function(numUno, numDos){
    switch(numDos){
        case 1:
            return numUno;
            break;
        case 2:
            return numUno*numUno;
            break;
        case 3:
            return numUno*numUno*numUno;
            break;
        case 4:
            return numUno*numUno*numUno*numUno;
            break; 
        case 5:
            return numUno*numUno*numUno*numUno*numUno;
            break;
        case 6:
            return numUno*numUno*numUno*numUno*numUno*numUno;
            break;
    }
}