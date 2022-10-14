// console.log("Hey Virendra How Are You ?");


// console.log(a);
// console.log(greet());

// var a = 20;
// function greet(){
//     console.log("This is virendra concepts.");
// }

// let greet = ()=>{
//     console.log("Hey Virendra");
// }
// console.log(greet1());

// let greet = function greet1(){
//     console.log("Hey Virendra");
// }
// console.log(greet1());

// let x = 10;
// console.log(window.a);

// var a = [1,2,3,4];
// var b = a;

// let c = [...b];

// c.push(5);
// console.log(a,c);

// var obj = {
//     name1: "viren",
//     id: 1243626
// }


// var obj = {
//     name1: "viren",
//     id: 1243626
// }
// // obj["sub"] = "Web Pro";
// let obj1 = {...obj};
// obj1["sub"] = "Web Pro";
// console.log(obj,obj1);

// var obj = {
//     Name : "Virendra",
//     Id : 123456
// }

// var obj =  {
//     Name : "Virendra",
//     Id : 123456
// }

// var obj1 = obj;
// console.log(obj);
// var obj1 = Object.assign({},obj,{
//     Sub:"Node.Js",
//     "Sub 1": "Javascript"
// });

// var obj1 = {
//     ...obj,...{
//         Sub: "Data Science",
//         Clg: "S K Somaiya"
//     }
// }

// obj["Sub"] = "Web Programming";
// console.log(obj,obj1);

// let phone = {
//     brand : "Samsung",
//     model  : "Galaxy s21"
// }

// let phoneArray = Object.entries(phone);
// console.log(phoneArray);
// console.log(Object.values(phone));

// let phone = [
//     ["brand","Samsung"],
//     ["model","Galaxy S21"]
// ];
// console.log(Object.fromEntries(phone));
// let phoneAsobject = Object.fromEntries(phone);
// console.log(phoneAsobject);

// let arr = [1,212,334,84,15,61,27][42];
// console.log(arr);

// let obj1 = {
//     Name: "Virendra",
//     Id: 11222322
// }

// console.log(Object.freeze(obj1));
// console.log(obj1);
// obj1.Sub = "Web Programming";
// console.log(obj1);
// delete obj1.Id;
// console.log(obj1);

// let objectasArray = Object.entries(obj1);
// console.log(objectasArray);
let data = [
        ["Name", "Virendra"]
       [ "Id", 11222322]
]

    let dataAsObj = Object.fromEntries(data);
    console.log(dataAsObj);