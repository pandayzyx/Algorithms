// //Using protypes method in a constructor to see protoype object  see these codes in browser 
// function Person(name,age){
//     this.name  = name
//     this.age  =  age
// }
// //it will return undefined as arrow function do not have this context to them
// Person.prototype.display  =  ()=>{console.log(this.name)}
// //It will return gaurav
// Person.prototype.display  =  function(){console.log(this.name)}

// var person =  new Person("gaurav",25)
// console.log(person)
// console.log(person.display())


//Object orineted programming using a class 
class Card{
    constructor(title){
        this.title =  title
    }
    createCard = ()=>{
        var img  =  document.createElement('img')
        var h1 =  document.createElement('h1')
        h1.textContent = this.title
        var imgDiv =  document.createElement('div')
        img.setAttribute('src',"data:image/jpeg;base64,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")
        img.style.height =  "400px"
        img.style.width = "400px"
        imgDiv.append(h1,img)
        return imgDiv
    }
}
var div = document.getElementById('main-div')
//Zomato card is an object with some methods like create card on it to create as many cards as we want same like we create card components in react
var zomatocard =  new Card("This is the landscape image")
console.log(zomatocard)
div.append(zomatocard.createCard())




// //Prototpe method example to show someone using classes 
// class Parent{
//     constructor(name,age){
//         this.name =  name
//         this.age =  age
//     }
// }
// class Child extends Parent{
//     constructor(name,age,gender){
//         //super speicifies the property to be inherited form parent class
//         super(name,age)
//         this.gender =  gender
//     }
// }
// var children  =  new Child("Gaurav",25,"Male")
// //Run this file in browser to see protype method it cant be seen in vs node environment 
// console.log(children)


//Promises
//Promises are object with some methods like .then .catch and .finally with it that help to handle asynchronus requests in a more structured way
//Creating ur own promise
//Promise has got 3 stages pending fullfilled and reject

// var promise  =  new Promise((resolve,reject)=>{
//     if("true"){
//         //some logic success
//         resolve("Promise rsolved")
//     }
//     else{
//         reject("Promise is not resolved ")
//     }
//     ///Logic you want to execute goes inside
// })
// console.log(promise)

//How to use promise to handle asynchronus requests
function sleep(time){
    return new Promise((resolve,reject)=>{
          if(typeof(time) !=="number"){
              reject("Strings are not valid as number")
          }
          else{
              //It can any async request here i have taken settimeout you can take an xhr request as well
              setTimeout(()=>{
               resolve({status:200})
              },1000)
          }
    })
}
// sleep(200).then(res=>console.log(res)).catch(err=>console.log(err))
// sleep("200").then(res=>console.log(res)).catch(err=>console.log(err))

//Waterfall Model
//Doing asynchronus request one by one first=>second=>third=>fourth

//Sending parallel aync requsts using promise.all 
// var promise1  =  sleep(200).then((res)=>"promise1 is resolved").catch(err=>err)
// var promise2  =  sleep(200).then((res)=>{
//     throw new Error("u have got error")
// }).catch(err=>err)
// var promise3  =  sleep(200).then((res)=>"promise3 is resolved").catch(err=>err)
// var promise4  =  sleep(200).then((res)=>"promise4 is resolved").catch(err=>err)

// Promise.all([promise1,promise2,promise3,promise4]).then(res=>console.log(res))


//async and await
//async also returns a new promise so its just a sugar syntaxing for promises as async function themselves return  promises
// function sleep(time){
//       return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(console.log("the time is ",time))
//           },time)
//       })
     
// }
// async function test(){
//     //here sleep function is asynchronus because it returns a promise 
//     await(sleep(1000))
//     console.log("after1 sec")
//     await sleep(2000)
//     console.log("after 2 seconds")
//     return "test has retunred"
// }
// test().then(res=>console.log(res))

//Some js questions try to get answers 
// var x =  "gaurav"
// function test(){
//     console.log(x)
//     var x  =  "saurav"
// }
// test()


// var x =   100
// function test(){
//    var x=i=10
// }
// test()
// console.log(x)

//In node env it gives empty object but in browser it will give windows object
// function test(){
//     console.log(this)
// }
// test()

//try these kind of combinations
// console.log(x)
// let x  =  "gaurav"
// console.log(x)

// const x  =  "gaurav"
// console.log(x)







