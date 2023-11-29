// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); //true
Object.is(0, -0); //false
Object.is(NaN, 100); //false
Object.is("one", "two"); //true
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); //true
Object.is(null, undefined); //false

10 === 20; //true
10 === "10"; //false
3.14 !== 3.14; //false
"TechUp" !== "TechUp"; //false
NaN === NaN; //true
0 !== -0; //false

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; //true
