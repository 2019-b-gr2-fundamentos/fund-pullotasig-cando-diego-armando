
import java.util.Scanner

object MarcasDeAlcohol {
  
  def main(args: Array[String])={
     
    val scan: Scanner = new Scanner(System.in)
    println("¿Ingrese tamaño del arreglo?")
    val TamañoDelArreglo:Int = scan.nextInt()
    
    var ArregloDeMarcas: Array[String] = new Array[String](TamañoDelArreglo)
    
   for(i <- 0 until TamañoDelArreglo){
     
     println("Ingrese marca numero:  ", i)
     ArregloDeMarcas(i) = scan.next()
     
   }
    
    var accion: Int = 0
    do{   
    var sscan: Scanner = new Scanner(System.in)
    println("QUE QUIERE HACER")
    println("1 - Quitar marca de alcohol")
    println("2 - Editar marca de alcohol")
    println("3 - Ver arreglo")
    println("4 - salir")
    var accion = sscan.nextInt()
    
      
    if( accion == 1){
      
      val sccan: Scanner = new Scanner(System.in)
    println("¿Ingrese posicion de la marca?")
    val pos:Int = sccan.nextInt()
    
    val scaan: Scanner = new Scanner(System.in)
    println("¿ingrese nueva marca?")
    val ne: String = scaan.next()
    
      ArregloDeMarcas(pos) == ne
        
    }else if( accion == 2){
      
      val sccan: Scanner = new Scanner(System.in)
    println("¿Ingrese posicion de la marca?")
    val pos:Int = sccan.nextInt()
    
    val scaan: Scanner = new Scanner(System.in)
    println("¿ingrese nueva marca a editar?")
    val ne:String = scaan.next()
    
      ArregloDeMarcas(pos) == ne
     
    }else if( accion == 3){
      
    println("su arreglo", ArregloDeMarcas)
      
    }else{
     "bye bye"
    }
    
    }while(accion==4)
   

    
  }
  
}