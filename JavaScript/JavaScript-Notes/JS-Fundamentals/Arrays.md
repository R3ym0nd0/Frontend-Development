# [] ARRAYS

  `let fruits = ["apple", "banana", "cherry"];`
  
  ***Adding***
  - `fruits[fruits.length] = "mango";`
  - `fruits.push("mango");`
  - `fruits.unshift("grape");`
  
  ***Removing***
  - `fruits.pop();`        // Remove last
  - `fruits.shift();`      // Remove first
  - `fruits.slice(1, 3);`  // Get part (non-destructive)
  - `fruits.length = 0;`   // Clear array
