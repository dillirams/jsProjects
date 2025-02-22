// const title=document.getElementById("demo");



// let user1={
//     name:"dilliram",
//     age:20,
//     gender:"male"
// }

// function greet(e){
//     console.log("good morning, my name is "+e.name+" ane my age is"+e.age);
// }
// greet(user1);

// let user2=[{
//     name:"pema",
//     age:19,
//     address:"thimphu"
// },{
//     name:"sangay",
//     age:13,
//     address:"pling"
// },{
//     name:"dema",
//     age:18,
//     address:"dagana"
// },{
//     name:"phurpa",
//     age:14,
//     address:"thimphu"
// },{
//     name:"sonam",
//     age:23,
//     address:"thimphu"
// }]

// const eligible=(detail)=>{
//     const result=detail.filter((detail)=>{
//        if(detail.age>=18){
//         console.log(detail.name+" is only those people are eligible for the voting");
//        }
//        else{
//         console.log(detail.name+" is not eligible for the voting"); 
//        }
      
//     })
    
// }

// eligible(user2);

// class father{
//     #values;
//     constructor(r,g,b){
//        this.#values=[r,g,b];
//        console.log(this.#values);
//     }
// }
// const object=new father(255,0,0);
// console.log(object);

// class car{
//     constructor(brand){
//         this.carname=brand;
//     }
//     present(){
//         return 'i have a '+ this.carname;
//     }
// }
// class Model extends car{
//     constructor(brand,mod){
//         super(brand);
//         this.model=mod;
//     }
//     show(){
//         return this.present()+ ', it is a'+ this.model;
//     }
// }

// let myCar=new Model('Ford',"mustang");

//title.innerHTML=myCar.show();

//remove all the negative numbers using call back function
// const allNum=[3.-4,6,-4,2,-9,7,-3,8];

// const positiveNum=display(allNum,(x)=>x>0);
// console.log(positiveNum);


// function display(num,callBack){
//     let array=[];
//     for(const value of num){
//         if(callBack(value)){
//             array.push(value);
//         }
//     }
//    return array;
// }

// 

// 
// const fs=require('fs');
 
// function print(err,data){
//     console.log(data);
// }

// fs.readFile('file.txt','utf8',print);
// setTimeout(()=>{
//     console.log("happy me");
// },0)
// console.log("hello");

// class Rectangle {
//     constructor(width, height, color) {
//          this.width = width;
//          this.height = height;
//          this.color = color; 
//     }
    
//     area() {
//         const area = this.width * this.height;
//         const area2=()=>{
//             return this.width*this.height;
//         }
//         console.log("area2 is: "+area2());
//           return area;
//     }
    
//     paint() {
//              console.log(`Painting with color ${this.color}`);
//     }
    
//  }
 
//  const rect = new Rectangle(2, 4)
//  const area = rect.area();
//  console.log(area)

// const map=new Map();
// map.set('name','harkirat');
// const firstName=map.get('name');
// console.log(firstName);

// function waitFor3s(resolve){
//     setTimeout(resolve,3000);

// }
// function main(){
//     console.log("hello how are you there");
// }
// waitFor3s(main);

// const { promises } = require('dns');
// const fs=require('fs');
// fs.readFile('file.txt','utf8',()=>{
//     return new Promise();
// })

const fs=require('fs');
//promisified version of readfile

function readtheFile(returnFinalResult){
    fs.readFile('file.txt','utf-8',(err,data)=>{
        returnFinalResult(data);
    })
}

function readFile(filename){
    return new Promise(readtheFile);
}

const p=readFile();
function callback(content){
    console.log(content);
}
p.then(callback);

// promisfied version of setTimeOut

function promisifeidSetTimeOut(duration){
    return new Promise((resolve)=>{
        setTimeout(resolve,duration);
    });
}

// function displayFunction(){
//     console.log("display after few minutes");
// }
// promisifeidSetTimeOut(10000).then(displayFunction);
// let str="gzamldo";
// const sortedstr=str.split("").sort().join("");
// console.log(sortedstr);

async function solve() {
    await promisifeidSetTimeOut(1000);
    console.log("hi");
}

solve();

console.log(__dirname);