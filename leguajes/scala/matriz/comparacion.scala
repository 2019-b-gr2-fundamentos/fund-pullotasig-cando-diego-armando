
object comparar {
  def verificacionDeDimensiones(matrizUno: Array[Array[Int]],matrizDos: Array[Array[Int]]){
    var matrizUnoPrimeraDimension = obternerDimensionUno(matrizUno)
    var matrizUnoSegundaDimension = obternerDimensionDos(matrizUno)
    var matrizDosPrimeraDimension = obternerDimensionUno(matrizDos)
    var matrizDosSegundaDimension = obternerDimensionDos(matrizDos)
    println(matrizUnoPrimeraDimension)
    println(matrizDosPrimeraDimension)
    println(matrizUnoSegundaDimension)
    println(matrizDosSegundaDimension)
    if(matrizUnoPrimeraDimension == matrizDosPrimeraDimension){
      if(matrizUnoSegundaDimension == matrizDosSegundaDimension){
        var sumaM = Array.ofDim[Int](matrizUnoPrimeraDimension,matrizUnoSegundaDimension)
         for(l <-0 until matrizUnoPrimeraDimension; m <- 0 until matrizUnoSegundaDimension){ 
           var d = matrizUno(l)(m)
           var f = matrizDos(l)(m)
            if(d == f){
              sumaM(l)(m) = d
            }
         }
        println(sumaM.map(_.mkString(" ")).mkString("\n"))
        println("las matrices son iguales")
      }
    }  
  }
  
  def obternerDimensionUno(matriz:Array[Array[Int]]):Int={
   var dimension = matriz.length
   dimension
  }
  
  def obternerDimensionDos(matriz: Array[Array[Int]]):Int={
    var baseDeDimension:Int = matriz(0).length
       baseDeDimension    
  }
  
  def main(args: Array[String]):Unit ={
  var A: Array[Array[Int]] = Array(Array(1,9,3,8,8),Array(1,8,8,9,3),Array(1,8,8,9,3))
  var B: Array[Array[Int]] = Array(Array(1,9,3,8,8),Array(1,8,8,9,3),Array(1,8,8,9,3))
  verificacionDeDimensiones(A,B)
  }
}