# 🧠 DATA TYPES

  - `let name = "Reymond";`         // String
  - `let age = 20;`                 // Number
  - `let isOnline = true;`          // Boolean
  - `let score = null;`             // Null
  - `let job;`                      // Undefined
  - `let big = 1234567890123n;`     // BigInt
  - `let id = Symbol("id");`        // Symbol

# 🔁 TYPE CONVERSION

  - `parseInt("20.9");`      // → 20
  - `parseFloat("20.9");`    // → 20.9
  - `String(123);`           // → "123"
  - `Number("123");`         // → 123
  - `Boolean(1);`            // → true

# 🧠 String Methods
  `let str = "  Hello World  ";`
  - `str.length`                    // Get the length of the string
  - `str[0]`                        // Access the first character
  - `str.toUpperCase()`             // Convert string to uppercase
  - `str.toLowerCase()`             // Convert string to lowercase
  - `str.trimStart()`               // Remove whitespace from the start
  - `str.trimEnd()`                 // Remove whitespace from the end
  - `str.trim()`                    // Remove whitespace from both sides
  - `str.replace("Hello", "Hi")`    // Replace first occurrence of "Hello" with "Hi"
  - `str.replaceAll("l", "L")`      // Replace all occurrences of "l" with "L"
  - `str.slice(0, 5)`                // Extract a section of the string (index 0 to 5)
  - `console.log(\`Hi, I am ${name}\`);` // Template literal

# 🔢 INCREMENT & DECREMENT

  `let y = 5;`
  - `y++;` // Post-increment
  - `++y;` // Pre-increment
  - `y--;` // Post-decrement
  - `--y;` // Pre-decrement

# [] ARRAYS

  `let fruits = ["apple", "banana", "cherry"];`
  
  ***Adding***
  - fruits[fruits.length] = "mango";
  - fruits.push("mango");
  - fruits.unshift("grape");
  
  ***Removing***
  - fruits.pop();        // Remove last
  - fruits.shift();      // Remove first
  - fruits.slice(1, 3);  // Get part (non-destructive)
  - fruits.length = 0;   // Clear array

# 🔁 For loop
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
# 🔁 While loop
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }

# 🔁 Do While loop
    do {
        console.log(i);
        i++;
    } while (i < 5);

# 🔁 For...in (for objects)
    const obj = { name: "Rey", 
                  age: 20 };
                  
    for (let key in obj) {
        console.log(key, obj[key]);
    }

# 🔁 For...of (for arrays)
    const fruits = ["banana", "apple", "melon"];
    
    for (let fruit of fruits) {
        console.log(fruit);
    }

# 🤖 IF - ELSE IF - ELSE 

    if (temp > 30) {
        console.log("Hot");
    } 
    
    else if (temp >= 20) {
        console.log("Nice weather");
    } 
    
    else {
        console.log("Cold");
    }

# 🤖 SWITCH

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

# ✅ COMPARISON OPERATORS

    1. ==    Equal (loose)
    2. ===   Equal (strict)
    3. !=    Not equal (loose)
    4. !==   Not equal (strict)
    5. >     Greater
    6. <     Less
    7. >=    Greater or equal
    8. <=    Less or equal

# 🧩 Regular Function

    function greet(name) {
      return `Hi ${name}`;
    }

# 🧩 Arrow Function (shortcut)

    const greet = (name) => `Hi ${name}`;

# 🧩 Multi-line Arrow Function

    const add = (a, b) => {
        let sum = a + b;
        return sum;
    };

# 🧱 JSON BASICS

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

# 💥 ERROR HANDLING

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
