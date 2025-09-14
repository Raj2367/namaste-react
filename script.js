// var a =10;
// let b=100;
// const c=200;
// console.log(a,b,c);

// var a=1;
// async function aa(){
//     await new Promise(resolve=>{
//         setTimeout(() => {
//             console.log(a);
//         }, 3000);
//         console.log("lucy was here");
//     });
// }
// aa();

// function aa(params) {
//     // let sum=1;
//     for (let i = 1,sum=1; i <=5; i++,sum+=i) {
//         setTimeout(() => {
//             console.log(i);
//         },sum*1000);
//         // sum+=i;
//     }
// }
// aa();

// // fuctional programming
// const area=function(r){
//     return Math.PI*r*r;
// }
// const circumference=function (r) {
//     return 2*Math.PI*r;
// }
// const calculate=function (arr,logic) {
//     let output=[];
//     for (let i = 0; i < arr.length; i++) {
//         output.push(logic(arr[i]));
//     }
//     return output;
// }
// let arr=[2,3,4];
// console.log(calculate(arr,area));
// console.log(calculate(arr,circumference));

// // map
// const arr = [5, 2, 1, 4, 6];
// function double(x) {
//     return 2*x;
// }
// function triple(x) {
//   return 3 * x;
// }
// function binary(x) {
//   return x.toString(2);
// }
// console.log(arr.map((x) => 2 * x));
// console.log(arr.map(triple));
// console.log(arr.map(binary));

// // filter
// function isEven(x) {
//   return x % 2 === 0;
// }
// function isGreaterThan4(x) {
//   return x > 4;
// }
// console.log(arr.filter(isEven));
// console.log(arr.filter(isGreaterThan4));

// // reduce
// const sum = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(sum);

// const max = arr.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);
// console.log(max);

// const users = [
//   { firstName: "Raj", lastName: "Nayak", age: 25 },
//   { firstName: "Raaj", lastName: "Nk", age: 43 },
//   { firstName: "Rajaaa", lastName: "mjak", age: 26 },
//   { firstName: "Pajero", lastName: "akwak", age: 30 },
//   { firstName: "Ranii", lastName: "rwnak", age: 30 },
// ];

// const fullName = users.map((x) => x.firstName + " " + x.lastName);
// console.log(fullName);

// const group = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(group);

// const peopleUnder30 = users
//   .filter((user) => user.age < 30)
//   .map((x) => x.firstName);
// console.log(peopleUnder30);
// const peopleUnder30UsingReduce = users.reduce(function (acc, curr) {
//     if (curr.age<30) {
//         acc.push(curr.firstName);
//     }
//     return acc;
// }, []);
// console.log(peopleUnder30UsingReduce);

// // Callback Hell
// // Promises
// const createOrder = () => {
//   return new Promise((resolve, reject) => {
//     if (!cartValidation()) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     } else {
//       resolve("12345");
//     }
//   });
// };
// const cartValidation = () => {
//   return true;
// };

// const proceedToPayment = (orderId) => {
//   return new Promise((resolve) => {
//     console.log(orderId);
//     resolve("Payment successfull");
//   });
// };

// createOrder()
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p1 success"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("p2 fail"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("p3 success"), 5000);
// });
// // Promise.all()
// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log("all " + JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// //Promise.allSettled
// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log("all settled" + JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// //Promise.race
// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log("race " + JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// //Promise.any
// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log("any " + JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// // Async await

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("p1 is resolved");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("p2 is resolved");
//   }, 15000);
// });

// handlePromise();
// async function handlePromise() {
//   console.log("hello world!!!");
//   const val = await p1;
//   console.log(val);

//   const val2 = await p2;
//   console.log(val2);
// }

// const API_URL = "https://api.github.com/users/Raj2367";

// async function userDetails() {
//   const result = await (await fetch(API_URL)).json();
//   console.log(result);
// }
// userDetails();

// this keyword
"use strict";
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};
obj.x();
