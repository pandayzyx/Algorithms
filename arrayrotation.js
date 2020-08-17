//Rotate the array k times in anticlockwise direction
var arr  =  [7,3,5,1,2]
let k = 2
//output  = 1 2 7 3 5
let outarr  = []
var test  = 1
//code
while(test<=k){
    var temp = arr[arr.length-1]
    for(var i=x-1;i>0;i--){
    arr[i] = arr[i-1]
    }
    arr[0] = temp
    test++
}
console.log(outarr)


//Rotate the array k times in clockwise direction
var arr  =  [7,3,5,1,2]
let k = 2
//output  = 5 1 2 7 3
let outarr  = []
var test  = 1
//code
while(test<=k){
    var temp = arr[0]
    for(var i=0;i<x-1;i++){
    arr[i] = arr[i+1]
    }
    arr[x-1] = temp
    test++
}
console.log(outarr)




