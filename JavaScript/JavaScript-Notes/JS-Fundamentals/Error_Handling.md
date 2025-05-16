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
