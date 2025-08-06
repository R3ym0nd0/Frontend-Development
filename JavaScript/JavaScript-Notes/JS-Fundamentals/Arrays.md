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
    
  ***Advanced Array Methods (Common in UI logic)***
  - `fruits.find(fruit => fruit === "banana");`         // Find the banana → "banana" 
  - `fruits.filter(fruit => fruit !== "banana");`       // Filter out banana → ["apple", "cherry"]
  - `fruits.map(fruit => fruit.toUpperCase());`         // Transform to uppercase → ["APPLE", "BANANA", "CHERRY"]
  - `fruits.join(", ");`                                // Join into string → "apple, banana, cherry"
  - `fruits.reduce((acc, curr) => acc + ", " + curr);`  // Reduce to single string → "apple, banana, cherry"
