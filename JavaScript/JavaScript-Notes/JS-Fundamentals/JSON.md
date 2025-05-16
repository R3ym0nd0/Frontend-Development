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
