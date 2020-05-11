function name (input){
    var transpose_arr = []
    
    var input_arr = input.split("\n").filter(function(x,index){
    return index >0
    }).map(function(y){
    return y.split(" ")
    })
    var row = input_arr.length
    var coloumn = input_arr[0].length

   for(i=0;i<coloumn;i++){
       transpose_arr[i] = []
       for(j=0; j<row; j++){
           transpose_arr[i][j] = input_arr[j][i]

       }
   }
   console.log(transpose_arr)
}

name("2 3\n5 3 6\n4 7 8")


    