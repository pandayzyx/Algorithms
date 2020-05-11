function processData(input) {
    //Enter your code here
  var input_arr = input.split("\n")
  var out_arr = input_arr[1].split(" ")
  var x = Number(input_arr[0])
  var c=0;
  var obj ={}
  for(i=0;i<x;i++){
    obj[out_arr[i]] = "xyz"
}
  var out_arr1 = Object.keys(obj)

  function check_small(a,b){
    //   var y = out_arr[0]
    //   var z = out_arr[out_arr1.length-1]
    //   console.log(y)
    //   console.log(z)
    console.log(out_arr1)
  }
    check_small(out_arr1,out_arr1)
}
processData("4\n-22 0 8 4")