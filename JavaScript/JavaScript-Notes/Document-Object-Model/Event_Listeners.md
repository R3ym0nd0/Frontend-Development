# 🧠 EVENT LISTENERS BASICS

// ✅ Add event to an HTML element by its id:

    const myBox = document.getElementById("click_me");

// ✅ click event – Change background and text on click:

    myBox.addEventListener("click", event => {
        event.target.style.backgroundColor = "blue";
        event.target.textContent = "Hello";
    });

// 👀 [] TOGGLE VISIBILITY ON CLICK []

    const myButton = document.querySelector("#hide-button");
    const myImage = document.querySelector("#img");

    myButton.addEventListener("click", () => {
    if (myImage.style.visibility === "hidden") {
        myImage.style.visibility = "visible";
        myButton.textContent = "Hide";
    } else {
        myImage.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
    });

// ✅ mouseover event – Change background and text when mouse enters:

    myBox.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "brown";
        event.target.textContent = "Mouse Over"; // Fix: textContent not style.textContent
    });

// ✅ mouseout event – Change background and text when mouse leaves:

    myBox.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "pink";
        event.target.textContent = "Mouse Out"; // Fix: textContent not style.textContent
    });

// ⌨️ [] KEYBOARD EVENTS []

// ✅ Setup:

    const MyBox = document.querySelector("#box");
    const moveAmount = 10;

    let x = 0;
    let y = 0;

// 🔽 keydown – When a key is pressed:

    document.addEventListener("keydown", event => {
        MyBox.textContent = "Hi";
        MyBox.style.backgroundColor = "tomato";
    });

// 🔽 keydown – When a key is pressed:

    document.addEventListener("keyup", event => {
        MyBox.textContent = ":)";
        MyBox.style.backgroundColor = "pink";
    });

// 🎮 Arrow Key Movement – Move box with Arrow Keys:

    document.addEventListener("keydown", event => {

    if (event.key.startsWith("Arrow")) {

        event.preventDefault();

        switch (event.key) {
    
        case "ArrowUp":
            y -= moveAmount;
            break;
        case "ArrowDown":
            y += moveAmount;
            break;
        case "ArrowLeft":
            x -= moveAmount;
            break;
        case "ArrowRight":
            x += moveAmount;
            break;
        }
    }

    MyBox.style.top = `${y}px`;
    MyBox.style.left = `${x}px`;
    });
