const fs = require("fs");

const user = "delete";

if (fs.existsSync('listPassword.txt')) {
    fs.appendFileSync("listPassword.txt", user);
    const a = fs.readFileSync("listpassword.txt", "utf-8");
    console.log(a);
} else {
    fs.writeFileSync("listPassword.txt", user);   
    const b = fs.readFileSync("listPassword.txt", "utf-8") ;
    console.log(b);
};

if (user.includes("delete")) { 
    console.log("The file was successfully removed!");
    fs.unlinkSync("listPassword.txt")
} else if (user.includes("bruteForce.txt")) {
    fs.renameSync("listPassword.txt", "bruteForce.txt")
    console.log("You rename your file");
};