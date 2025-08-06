# ⏱️ [] CALLBACKS []

    function getData(callback) {
        setTimeout(() => {
            callback("Data loaded ✅");
        }, 1000);
    }
    
    getData((result) => {
        console.log(result);  // Data loaded ✅
    });

# ❌ Callback Hell (nesting callbacks = hard to manage)

    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                console.log("3");
            }, 1000);
        }, 1000);
    }, 1000);
