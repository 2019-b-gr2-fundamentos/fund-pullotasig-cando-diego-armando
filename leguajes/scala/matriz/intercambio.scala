object comparar {
  def verificacionDeDimensiones(matrizUno: Array[Array[Int]]){
    var matrizUnoPrimeraDimension = obternerDimensionUno(matrizUno)
    var matrizUnoSegundaDimension = obternerDimensionDos(matrizUno)
    println(matrizUnoPrimeraDimension)
    println(matrizUnoSegundaDimension)
    if(matrizUnoPrimeraDimension == matrizUnoSegundaDimension){
        var cambio = Array.ofDim[Int](matrizUnoPrimeraDimension,matrizUnoSegundaDimension)
         for(l <-0 until matrizUnoPrimeraDimension; m <- 0 until matrizUnoSegundaDimension){ 
           var d = matrizUno(l)(m)
            cambio(l)(m) = d 
         }
        println(cambio.map(_.mkString(" ")).mkString("\n"))
        println("la matriz nueva")
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
  var A: Array[Array[Int]] = Array(Array(1,9,3),Array(1,8,8),Array(1,8,1))
  verificacionDeDimensiones(A)
  }
}