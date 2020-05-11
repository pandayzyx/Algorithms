var arr =[89,8,1,7,3,72,9,8,1,4,5,72,]
var x =  arr.length
for(i=0;i<x-1;i++){
    var min = i
    for(j=i+1; j<x;j++){
        if(arr[j]<arr[min]){
            min = j
        }
    }
    var temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp
}
    console.log(arr)
