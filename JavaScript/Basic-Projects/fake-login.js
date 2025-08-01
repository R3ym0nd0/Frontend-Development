function checkLogin(username, password) {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            if (username === "reymond" && password === "reymond123") {
                resolve("Access Granted!");
            } else {
                reject("Access Denied!");
            }
        }, 1000)

    });
};

async function fakeLogin() {
    const username = prompt("Enter Username: ");
    const password = prompt("Enter Password: ");
    
    try  {
        const login = await checkLogin(username, password);
        alert(login);
    } catch (err) {
        alert(err);
    }
}; 

fakeLogin();