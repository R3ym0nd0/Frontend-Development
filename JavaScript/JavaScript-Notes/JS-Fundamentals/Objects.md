# 📦 {} OBJECTS []

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

### 🔍 Access
    console.log(person.FirstName);        // Reymond
    console.log(person.hobbies[0]);       // Coding

### ➕ Add / Modify
    person.MiddleInitial = "P";           // Add new property
    person.hobbies[0] = "Hacking";        // Update array value

### 🔄 Convert to/from JSON
    let str1 = JSON.stringify(person);    // Object → JSON string
    let obj1 = JSON.parse(str1);          // JSON string → Object

### 🔑 Loop through keys
    let keys = Object.keys(obj1);
    keys.forEach(key => console.log(obj1[key]));
