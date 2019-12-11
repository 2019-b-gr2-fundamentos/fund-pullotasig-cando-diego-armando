import java.util.Scanner
import scala.collection.mutable
object MarcasDeAlcohol {
    
  
  def main(args: Array[String])={
    var arregloDeMarcas = mutable.Set("corona","tequila" )  
    var accion: Int = 0
    while(accion < 5){  
      

    var sscan: Scanner = new Scanner(System.in)
    println("QUE QUIERE HACER")
    println("1 - Quitar marca de alcohol")
    println("2 - Editar marca de alcohol")
    println("3 - Agregar marca de alcohol")
    println("4 - Ver arreglo")
    println("5 - salir")
    accion = sscan.nextInt()
    
    accion match{
      case 1 => eliminar()
      case 2 => editar()
      case 3 => agregar() 
      case 4 => imprimir() 
      case _ => "fuera del rango"      
    }
   
    }
    def eliminar(args: Array[String])={
    
    for(arregloDeMarcas2 <- arregloDeMarcas){            
    println(arregloDeMarcas2)
    }

    var sccan: Scanner = new Scanner(System.in)
    println("Ingrese la marca que quiere quitar")
    var pos:String = sccan.next()
                                  
    arregloDeMarcas -= pos
    }
  
    def editar(args: Array[String])={

      for(arregloDeMarcas2 <- arregloDeMarcas){             
      println(arregloDeMarcas2)
      }

    var sccan: Scanner = new Scanner(System.in)
    println("¿Ingrese posicion de la marca, que quiere borrar?")
    var x:Int = sccan.nextInt()
                
    var scaan: Scanner = new Scanner(System.in)
    println("Ingrese nueva marca")
    var nuevaMarca:String = scaan.next()
    
    arregloDeMarcas(x) = nuevaMarca     
    }

    def agregar(args: Array[String])={

      for(arregloDeMarcas2 <- arregloDeMarcas){             
      println(arregloDeMarcas2)
      }

    var scaan: Scanner = new Scanner(System.in)  
    println("Ingrese nueva marca")
    var nuevaMarca:String = scaan.next()
         
    arregloDeMarcas += nuevaMarca
                
    }
  
    
    def imprimir(args: Array[String])={
    
      for(arregloDeMarcas2 <- arregloDeMarcas){
                  
      println(arregloDeMarcas2)
      }
    }
  }
}
    
    