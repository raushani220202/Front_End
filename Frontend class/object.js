//prototype in java script:Every javascript will have special property called prototype.
// We can set a prototype to aobject using __proto__.

// let employee={
//     taxRate(){
//         console.log("Tax rate is 10%");
//     }
// }
//  const sachin={
//     salary : 5000,
//  }
//  sachin.__proto__=employee;

// this keyword
//  let student={
//     fullname: "Sachin Tendulkar",
//     age:22,
//     marks: 94,
//     phno: 12345,
//     printMarks : function (){
//         console.log("marks=" ,this.marks);
//     }
// }

// create class in java
//  class MarutiCar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//  }
 
//  let baleno= MarutiCar();
//  console.log(baleno);
//  baleno.start();
//  baleno.stop();

//  let thar= MahindraCar();
//  console.log(thar);
//  thar.start();
//  thar.stop();

//constructor is a special type of method which initialize the object which is same class name

// class Student{
//     constructor(name){
//         console.log("This ia a constructor");
//     }
//     study(){
//         console.log("study");
//     }
//     interview(){
//         console.log("attend interview");
//     }
// }
// // inheritance
// let s1=new Student("Sachin");
// let s2=new Student();

// class Parent{
//     constructor(name){
//         console.log("In the parent constructor");
//         this.name=name;
//         console.log("parent", this.name);
//     }
//     eat(){
//         console.log("Veg");
//     }
//     work(){
//         console.log("Government Employee");
//     }
// }

// class Child extends Parent{
//     constructor(name){
//         console.log("In the child constructor");
//         super(name);
//         this.name=name;
//         console.log("chiid",this.name);
//     }
//     work(){
//         console.log("Software Developer");
//     }
// }

//Error Handling in java script
// let a=10;
// let b= 20;

// console.log(a+b);
// console.log(a*b);
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);

// try{
//     console.log(a+c);
// }
// catch(arr){
//     console.log(err);
// }
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);

//synchronous 
// console.log("A");
// console.log("B");

// //asynchronous
// setTimeout(()=>{
//     console.log("C");
// }, 4000);
// console.log("D");
// console.log("E");
// console.log("f");

//callback hell
// function getData(dvalue,getData){
//     setTimeout(() => {
//         console.log("Data",dvalue);
//         if(getData){
//             getData();
//         }
//     }, 3000);
// }

// getData(10,()=>{
//     getData(20,()=>{
//         getData(30,()=>{
//             getData(40);
//         });
//     });
// });

//promises chain
// let promise=new Promise((resolve,reject)=>{
//     console.log("promise");
//     reject("Not completed");
// })

// promise.then(()=>{
//     console.log("data");
// })

// promise.catch(()=>{
//     console.log("no data");
// });

// function getData(dvalue,getData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {
//             console.log("Data",dvalue);
//             console.log("completed");
//         }, 3000);
//     })
// }
//  getData(1).then((res)=>{
//     return getData(2);
//  }).then((res)=>{
//     return getData(3);
//  }).then((res)=>{
//     return getData(4);
//  }).then((res)=>{
//     console.log(res);
//  })

let a=document.querySelector("#content");
let getData= new Promise((resolve,reject)=>{
   setTimeout(() => {
    resolve("Good Morning")
   }, 4000);
})

getData.then(function(value){
    a.innerText=value;
})