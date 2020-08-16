function Myarr(name,age){
    this.length  = 0

    Object.defineProperty(this,"length",{
        value:0,
        enumerable:false,
        writable:true
    })
}
Myarr.prototype.push = function(elem){
      this[this.length] = elem
      this.length++
      return this.length
}
Myarr.prototype.map = function(callback){
    var res = new Myarr()
      for(key in this){
          if(this.hasOwnProperty(key)){
              res.push(callback(this[key],key,this))
          }
      }
      return res
}
var gaurav = new Myarr()
gaurav.push("MAsai")
console.log(gaurav)


// var arr  = new Myarr()
// arr.push("masai")
// arr.push("banagalore")
// var z  = arr.map(function(elem){
//     return elem
// })
// console.log(z)

//Creating my map function
// Array.prototype.mymap  =  function(callback){
//     var result  = []
//     for(i=0;i<arr.length;i++){
//         result.push(callback(this[i]))
//     }
//     return result

// }

// var arr  = [1,2,3,4]

// var x  = arr.mymap(function(a){
//     return a*10
// })
// console.log(x)

//Creating push function
// Array.prototype.mypush = function (elem){
//     var y = this.length
//     y++
//     this[this.length] = elem
//     return y

// }
// var arr  = [1,2,3,4]
// var x =  arr.mypush(5)
// console.log(x)
// console.log(arr)

// function Arr(ar){
//     this.length = 0
//     for(key in this){
//         this[i] = "ar"+i
//     }

//     Object.defineProperty(this,length,{
//         value:0,
//         enumerable:false,
//         writable:true
//     })

// }

//Creating pop function
// Array.prototype.mypop = function(){
//     var x  = this[this.length-1]
//     delete this[this.length-1]

//     if(this.length == 0){
//         return "undefined"
//     }
//     else{
//         this.length--
//         return x
//     }
// }
// var arr  = [1,2,3,4]
//  var z = arr.mypop()
//  console.log(z)
//  console.log(arr)

//Creating map function
// Array.prototype.mymap = function(callback){
//     var result  = []
//     for(i=0;i<this.length;i++){
//         var y = callback(this[i],i,this)
//         result.push(y)
//     }
//     return result
// }

// var arr  =  [1,2,3,4]

// var z  = arr.mymap(function(){
//     return x*10
// })
// console.log(z)

//Creating filter function
// Array.prototype.minefilter = function(callback){
//     var result  = []
//     for(i=0;i<this.length;i++){
//         if(callback(this[i],i,this)){
//             result.push(this[i])
//         }
//     }
//     return result
// }
// var arr  = [ 5,2,3,4]
//  var out = arr.minefilter(function(elem,index){
//         return index > 1
//  })
//  console.log(out)

//Creating reduce function
// Array.prototype.myreduce =  function(callback){
//      if(typeof(this[0])== "string" ){
//         var a = ""
//      }
//      else{
//          var a  = 0
//      }
//        for(i=0;i<this.length;i++){
//           a = callback(a,this[i],i)
//        }
//        return a
// }
// var arr  = [1,2,3,"4"]
// var z  =  arr.myreduce(function(a,b){
//     return b+a
// })
// console.log(z)

//Creating for each functionality
// Array.prototype.foreach = function(callback){
//     for(i=0;i<this.length;i++){
//         callback(this[i],i,this)
//     }

// }
// var arr  = [1,2,3,4]
// arr.foreach(function(elem){
//     console.log(elem)
// })

///STACK FUNCTIONALITY
// var stack = [1,2,5,8]

// Array.prototype.stackpop = function(elem){
//     var z  = this[this.length-1]
//     delete this[this.length-1]

//     if(this.length == 0){
//         return "undefined"
//     }
//     else{
//         this.length--
//         return z
//     }
// }

// Array.prototype.stackisEmpty = function(elem){
//       if(this.length == 0){
//           return "True"
//       }
//       else{
//           return "False"
//       }
// }
// var stack = [1,2,3,45,7]
// Array.prototype.stackpush = function(elem){
//     if(this.length <=6 ){
//         console.log(this.length)
//         this[this.length] = elem
//         return this.length

//     }
// }

// Array.prototype.stackisFull = function (elem) {
// 	var z = 4;
// 	if (this.length > 7) {
// 		console.log("You cannot enter more items");
// 	}
// };
// stack.stackpush("25")
// stack.stackpush("25")
// stack.stackpush("28")
// console.log(stack)
// stack.stackisFull()

//QUEUE ALL FUNCTIONALITY
// var arr  =  [1,8,9,3,7]
// Array.prototype.enque = function(elem){

//          this[this.length] = elem
//          return this.length

// }

// Array.prototype.deque = function(){
//     if(this.length == 0){
//         return "undefined"
//     }

//      else{
//         var z  = this[0]
//         for(i=0;i<this.length;i++){
//           this[i] = this[i+1]
//         }
//         this.length--

//         return z
//      }

// }
// var arr  = [1,2,3,5]
// arr.deque()
// arr.deque()
// arr.deque()
// console.log(arr)

// Array.prototype.isempty = function(){
//     if(this.length == 0){
//         return "True"
//     }
//     else{
//         return "False"
//     }

// }
// Array.prototype.front = function(){
//     console.log(this[0])
// }

//arr.enque("23")
//arr.deque()
//console.log(arr)
//arr.front()