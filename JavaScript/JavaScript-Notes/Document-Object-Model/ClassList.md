# 🎯 Class List

    .classList.add('test');               // add test class
    .classList.remove('test')             // remove test class
    .classList.replace('test', 'test1');  // swaps “test” to “test1” (does nothing if “test” isn’t there)
    .classList.toggle('hover');           // Toggle hover selector
    .classList.contains('test');          // Check if selector contains test class

    // Example
    const myButton = document.querySelector("#my-btn");
    const myH1 = document.querySelector("#hello");

        // ADD & REMOVE
            myButton.classList.add("enabled");
            myButton.classList.remove("enabled");

            myButton.addEventListener("mouseover", event => {
                event.target.classList.add("hover");
            })

             myButton.addEventListener("mouseout", event => {
                event.target.classList.remove("hover");
            })

        // TOGGLE
            myButton.addEventListener("mouseover", event => {
                event.target.classList.toggle("hover");
            })

            myButton.addEventListener("mouseout", event => {
                event.target.classList.toggle("hover");
            })

        // CONTAINS & REPLACE
            myH1.classList.add("enabled");
            myButton.classList.add("enabled");
            myButton.addEventListener("click", event => {
                if (event.target.classList.contains("disabled")) {
                    event.target.textContent += "😂";
                } else {
                    event.target.classList.replace("enabled", "disabled");
                }
            });


