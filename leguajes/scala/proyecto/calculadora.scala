import java.util.Scanner
import scala.math.sqrt

object calculadora{
    
  
  def main(args: Array[String])={
     
    var accion: Int = 0
    
    while(accion < 11){  
      
    var scan: Scanner = new Scanner(System.in)
    println("Bienvenido a su calculadora que desea hacer")
    println("1 - Sumar")
    println("2 - Restar")
    println("3 - Multiplicar")
    println("4 - Dividir")
    println("5 - Calcular el cubo de un numero")
    println("6 - Calcular hipotenusa")
    println("7 - Calcular el promedio")
    println("8 - Calcular el area de un circulo")
    println("9 - Calcular el volumen de un circulo")
    println("10 - Calcular el volumen de un cilindro")
    println("11 - salir")
    accion = scan.nextInt()
    
    accion match{
      case 1 =>{
        var A: Scanner = new Scanner(System.in)
        println("Ingrese valor")
        var valorA:Int = A.nextInt()
        
        var B: Scanner = new Scanner(System.in)
        println("Ingrese valor")
        var valorB:Int = B.nextInt()
        
        var resp: Scanner = new Scanner(System.in)
        println("desea ingresar otro valor")
        println("1 - Si")
        println("0 - No")
        var valor:Int = resp.nextInt()
        
          if(valor == 1){
          var c: Scanner = new Scanner(System.in)
          println("Ingrese valor")
          var valorc:Int = c.nextInt()
          
            var resp1: Scanner = new Scanner(System.in)
            println("desea ingresar otro valor")
            println("1 - Si")
            println("0 - No")
            var valor1:Int = resp1.nextInt()
            
            if(valor1 == 1){
              
              var d: Scanner = new Scanner(System.in)
              println("Ingrese valor")
              var valord:Int = d.nextInt()
              
              println("El resultado es", valorA + valorB + valorc + valord)
              
            }else{
              println("El resultado es", valorA + valorB + valorc)
            }
          
          }else{
            println("El resultado es", valorA + valorB)
          }
      }

      case 2 =>{
        var A: Scanner = new Scanner(System.in)
        println("Ingrese valor")
        var valorA:Int = A.nextInt()
        
        var B: Scanner = new Scanner(System.in)
        println("Ingrese valor")
        var valorB:Int = B.nextInt()
        
        var resp: Scanner = new Scanner(System.in)
        println("desea ingresar otro valor")
        println("1 - Si")
        println("0 - No")
        var valor:Int = resp.nextInt()
        
          if(valor == 1){
          var c: Scanner = new Scanner(System.in)
          println("Ingrese valor")
          var valorc:Int = c.nextInt()
          
            var resp1: Scanner = new Scanner(System.in)
            println("desea ingresar otro valor")
            println("1 - Si")
            println("0 - No")
            var valor1:Int = resp1.nextInt()
            
            if(valor1 == 1){
              
              var d: Scanner = new Scanner(System.in)
              println("Ingrese valor")
              var valord:Int = d.nextInt()
              
              println("El resultado es", valorA - valorB - valorc - valord)
              
            }else{
              println("El resultado es", valorA - valorB - valorc)
            }
          
          }else{
            println("El resultado es", valorA - valorB)
          }
      }
      case 3 =>{
        var A: Scanner = new Scanner(System.in)
        println("Ingrese valor")
        var valorA:Int = A.nextInt()
        
        var B: Scanner = new Scanner(System.in)
        println("Ingrese valor")
        var valorB:Int = B.nextInt()
        
        var resp: Scanner = new Scanner(System.in)
        println("desea ingresar otro valor")
        println("1 - Si")
        println("0 - No")
        var valor:Int = resp.nextInt()
        
          if(valor == 1){
          var c: Scanner = new Scanner(System.in)
          println("Ingrese valor")
          var valorc:Int = c.nextInt()
          
            var resp1: Scanner = new Scanner(System.in)
            println("desea ingresar otro valor")
            println("1 - Si")
            println("0 - No")
            var valor1:Int = resp1.nextInt()
            
            if(valor1 == 1){
              
              var d: Scanner = new Scanner(System.in)
              println("Ingrese valor")
              var valord:Int = d.nextInt()
              
              println("El resultado es", valorA * valorB * valorc * valord)
              
            }else{
              println("El resultado es", valorA * valorB * valorc)
            }
          
          }else{
            println("El resultado es", valorA * valorB)
          }
      } 
      case 4 =>{
        var A: Scanner = new Scanner(System.in)
        println("Ingrese primer valor")
        var valorA:Int = A.nextInt()
        
        var B: Scanner = new Scanner(System.in)
        println("Ingrese segundo valor")
        var valorB:Int = B.nextInt()
        
          if(valorB != 0){
                   
            var resp1: Scanner = new Scanner(System.in)
            println("desea ingresar otro valor")
            println("1 - Si")
            println("0 - No")
            var valor1:Int = resp1.nextInt()
            
            if(valor1 == 1){
              
              var d: Scanner = new Scanner(System.in)
              println("Ingrese tercer valor")
              var valord:Int = d.nextInt()
              
              if(valord != 0){
                
                println("El resultado es", (valorA / valorB)/ valord )
                
              }else{
                println("El resultado es una indeterminacion")
              }
              
            }else{
              println("El resultado es", valorA / valorB )
            }
          
          }else{
            println("El resultado es una indeterminacion")
          }
      } 
      case 5 =>{
        var A: Scanner = new Scanner(System.in)
        println("Ingrese valor")
        var valorA:Int = A.nextInt()
        
        if(valorA <100){
          println("El resultado es", valorA*valorA*valorA)
        }else{
          println("fuera del rango")
        }
        
      }
      case 6 =>{
        var A: Scanner = new Scanner(System.in)
        println("Ingrese valor")
        var valorA:Int = A.nextInt()
        
        var B: Scanner = new Scanner(System.in)
        println("Ingrese valor")
        var valorB:Int = B.nextInt()
        
        if(valorA <1000){
          println("El resultado es", sqrt(valorA*valorA + valorB*valorB))
        }else{
          println("fuera del rango")
        }
        
      }
      case 7 =>{
        var A: Scanner = new Scanner(System.in)
        println("Ingrese  valor")
        var valorA:Int = A.nextInt()
        
        var B: Scanner = new Scanner(System.in)
        println("Ingrese  valor")
        var valorB:Int = B.nextInt()
        
        var resp: Scanner = new Scanner(System.in)
        println("desea ingresar otro valor")
        println("1 - Si")
        println("0 - No")
        var valor:Int = resp.nextInt()
        
          if(valor == 1){
          var c: Scanner = new Scanner(System.in)
          println("Ingrese valor")
          var valorc:Int = c.nextInt()
          
            var resp1: Scanner = new Scanner(System.in)
            println("desea ingresar otro valor")
            println("1 - Si")
            println("0 - No")
            var valor1:Int = resp1.nextInt()
            
            if(valor1 == 1){
              
              var d: Scanner = new Scanner(System.in)
              println("Ingrese valor")
              var valord:Int = d.nextInt()
              
              var resp2: Scanner = new Scanner(System.in)
              println("desea ingresar otro valor")
              println("1 - Si")
              println("0 - No")
              var valor2:Int = resp2.nextInt()
              
              if(valor2 == 1){
                var e: Scanner = new Scanner(System.in)
                println("Ingrese valor")
                var valore:Int = e.nextInt()
                
                println("El promedio es", (valorA + valorB + valorc + valord + valore)/5)
                
              }else{
                println("El promedio es", (valorA + valorB + valorc + valord)/4)
              }
              
            }else{
              println("El promedio es", (valorA + valorB + valorc)/3)
            }
          
          }else{
            println("El promedio es", (valorA + valorB)/2)
          }
      } 
      case 8 =>{
        var A: Scanner = new Scanner(System.in)
        println("Ingrese valor del radio")
        var valorA:Int = A.nextInt()
               
        if(valorA <1000){
          println("El area del circulo es",  valorA*valorA*3.14159 )
        }else{
          println("fuera del rango")
        }
        
      }
      case 9 =>{
        var A: Scanner = new Scanner(System.in)
        println("Ingrese valor del radio")
        var valorA:Int = A.nextInt()
               
        if(valorA <1000){
          println("El volumen de la esfera es", valorA*valorA*valorA*3.14159*4*0.333 )
        }else{
          println("fuera del rango")
        }
        
      } 
      case 10 =>{
        var A: Scanner = new Scanner(System.in)
        println("Ingrese valor del radio")
        var valorA:Int = A.nextInt()
        
        var B: Scanner = new Scanner(System.in)
        println("Ingrese valor de la altura")
        var valorB:Int = B.nextInt()
      
        println("El volumen del cilindro es ", valorA*valorA*valorB*3.14159)
        
      }
      case _ => "bye bye"
    }
   
    }
    
  }
}


