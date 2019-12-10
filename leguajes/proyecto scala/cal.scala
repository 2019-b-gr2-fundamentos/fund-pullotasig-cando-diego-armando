object calculadoraBasica {

  def sumar(x: Int, y: Int) = {
    x + y
  }

  def multiplicar(x: Int, y: Int) = {
    x * y
  }

  def restar(x: Int, y: Int) = {
    x - y
  }

  def dividir(x: Int, y: Int) = {
    y match {
      case 0 => "DivisionPorCero"
      case _ => x/y
    }
  }

  override def toString() = {
    "Hola" + sumar(2,2)
  }
}
object Main extends App {

    println(s"La suma de 2+2 es:" ${sumar(2,2)})
   
}

var scan: Scanner = new Scanner(System.in)
    
    println("1 - Agregar marca de alcohol")
    println("2 - Quitar marca de alcohol")
    println("3 - Editar marca de alcohol")
    
    accion = scan.nextInt()
    
    if( accion == 1){
      
      println(ArregloDeMarcas)
      
    }else if( accion == 2){
      println("3 - Editar marca de alcohol")
    }else if( accion == 3){
      println("3 - Editar marca de alcohol")
    }else if( accion == 4){
      println("3 - Editar marca de alcohol")
    }else{
      println("3 - Editar marca de alcohol")
    }
   }while(accion < 4)
    
    