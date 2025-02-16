// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 235649764654984756n 



// Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name: "navneet",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);





// **************************************************************

// Stack (Primitive), Heap memory (Non-Primitive)

let myYoutubename = "navneetsharma"

let anothername = myYoutubename
anothername = "ns0052"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "navneet@google.com"

console.log(userOne.email);
console.log(userTwo.email);
