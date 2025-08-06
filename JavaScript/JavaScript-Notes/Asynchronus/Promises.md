# ⚠️ [] PROMISES []

    let promise = new Promise((resolve, reject) => {
        let success = true;
    
        if (success) resolve("✅ Success");
        else reject("❌ Failed");
    });
    
    promise
        .then(result => console.log(result))   // ✅ Success
        .catch(error => console.error(error)) // ❌ Failed
        .finally(() => console.log("Done"));
    
    // ⌛ Simulating async with setTimeout
    const fetchUser = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve({ name: "Reymond", age: 20 }), 1000);
        });
    };
    
    fetchUser().then(user => console.log(user));

# 🔄 [] PROMISE CHAINING []

    function double(n) {
        return new Promise(resolve => {
            setTimeout(() => resolve(n * 2), 500);
        });
    }

# ⛓️ [] PARALLEL PROMISES []

    const p1 = new Promise(res => setTimeout(() => res("🐢 Slow"), 2000));
    const p2 = new Promise(res => setTimeout(() => res("🐇 Fast"), 1000));
    
    async function race() {
        let results = await Promise.all([p1, p2]); 
        console.log(results);  // [ "🐢 Slow", "🐇 Fast" ]
    }
    
    race();

# 🧨 [] PROMISE METHODS []

- Promise.all([...]) → Wait for all
- Promise.race([...]) → First settled wins
- Promise.allSettled([...]) → Waits for all (no reject)
- Promise.any([...]) → First fulfilled (ignores rejections)
    
        Promise.all([
            Promise.resolve("✅ One"),
            Promise.resolve("✅ Two")
        ]).then(values => console.log(values)); // [ "✅ One", "✅ Two" ]
            
            double(2)
                .then(result => double(result))  // 4
                .then(result => double(result))  // 8
                .then(result => console.log(result)); // 8
