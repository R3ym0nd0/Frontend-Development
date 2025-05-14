// 🧠 [] DATA TYPES []

let name = "Reymond";         // String
let age = 20;                 // Number
let isOnline = true;          // Boolean
let score = null;             // Null
let job;                      // Undefined
let big = 1234567890123n;     // BigInt
let id = Symbol("id");        // Symbol

// 🔁 [] TYPE CONVERSION []

parseInt("20.9");      // → 20
parseFloat("20.9");    // → 20.9
String(123);           // → "123"
Number("123");         // → 123
Boolean(1);            // → true

// 🔤 [] STRING METHODS []

let str = "  Hello World  ";

str.length
str[0]
str.toUpperCase()
str.toLowerCase()
str.trimStart()
str.trimEnd()
str.trim()
str.replace("Hello", "Hi")
str.replaceAll("l", "L")
str.slice(0, 5)
console.log(`Hi, I am ${name}`);  // Template literal

// 🔢 [] INCREMENT & DECREMENT []

let y = 5;

y = y - 1;
y -= 1;

y++; // Post-increment
++y; // Pre-increment
y--; // Post-decrement
--y; // Pre-decrement

// 📦 [] ARRAYS []

let fruits = ["apple", "banana", "cherry"];

// Add
fruits[fruits.length] = "mango";
fruits.push("mango");
fruits.unshift("grape");

// Remove
fruits.pop();        // Remove last
fruits.shift();      // Remove first
fruits.slice(1, 3);  // Get part (non-destructive)
fruits.length = 0;   // Clear array

// 🔁 For loop
    for (let i = 0; i < 5; i++) console.log(i);

// 🔁 While loop
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }

// 🔁 Do While loop
    do {
        console.log(i);
        i++;
    } while (i < 5);

// 🔁 For...in (for objects)
    const obj = { name: "Rey", age: 20 };
    for (let key in obj) {
        console.log(key, obj[key]);
    }

    // For...of (for arrays)
    for (let fruit of fruits) {
        console.log(fruit);
    }

// 🤖 IF - ELSE IF - ELSE 

    if (temp > 30) {
        console.log("Hot");
    } 
    
    else if (temp >= 20) {
        console.log("Nice weather");
    } 
    
    else {
        console.log("Cold");
    }

// 🤖 SWITCH

    switch (day) {

    case "Monday":
        console.log("Ugh, Monday");
        break;

    case "Friday":
        console.log("Finally Friday!");
        break;

    default:
        console.log("Just another day");
    }

// ✅ [] COMPARISON OPERATORS []

    // ==    Equal (loose)
    // ===   Equal (strict)
    // !=    Not equal (loose)
    // !==   Not equal (strict)
    // >     Greater
    // <     Less
    // >=    Greater or equal
    // <=    Less or equal

// 🧩 Regular Function

    function greet(name) {
    return `Hi ${name}`;
    }

// 🧩 Arrow Function (shortcut)

    const greet = (name) => `Hi ${name}`;

// 🧩 Multi-line Arrow Function

    const add = (a, b) => {
        let sum = a + b;
        return sum;
    };

// 🧱 [] JSON BASICS []

    let person = {
        FirstName: "Reymond",
        LastName: "Joaquin",
        age: 19,
        hobbies: ["Coding", "Gaming"],
        pets: {
            1: { name: "Bruce", type: "Dog" },
            2: { name: "Catlyn", type: "Cat" }
            }

    };

    console.log(person.FirstName);         // Access
    console.log(person.hobbies[0]);        // Array inside JSON

    person.MiddleInitial = "P";            // Add key
    person.hobbies[0] = "Hacking";         // Modify value

    let str1 = JSON.stringify(person);      // Object → JSON
    let obj1 = JSON.parse(str1);             // JSON → Object

    let keys = Object.keys(obj1);           // Get keys
    keys.forEach(key => console.log(obj1[key]));

// 💥 [] ERROR HANDLING []

    try {
        // Code that might fail
        let age = Number("abc");
        if (isNaN(age)) throw "Not a number!";
        console.log(age);
    } 
    
    catch (err) {
        console.error("Error caught:", err); // err.message // err.content
    } 
    
    finally {
        console.log("Always runs, error or not.");
    }