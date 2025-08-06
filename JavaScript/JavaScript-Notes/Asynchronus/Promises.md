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
    
    double(2)
        .then(result => double(result))  // 4
        .then(result => double(result))  // 8
        .then(result => console.log(result)); // 8
