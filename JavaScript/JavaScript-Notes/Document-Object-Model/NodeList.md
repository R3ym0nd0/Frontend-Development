# 📝 NodeList & Event Listeners + Dynamic Elements

// Select all buttons with class "btn"

    let buttons = document.querySelectorAll(".btn");

// Change style & text for each button

    buttons.forEach(button => {
      button.style.backgroundColor = "red";
      button.textContent += " HI";
    });

// CLICK event: change bg color to tomato

    buttons.forEach(button => {
      button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
      });
    });

// MOUSEOVER event: bg color pink

    buttons.forEach(button => {
      button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "pink";
      });
    });

// MOUSEOUT event: bg color lightblue

    buttons.forEach(button => {
      button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "lightblue";
      });
    });

// ADD a new button dynamically

    const newButton = document.createElement("button"); // <button></button>
    
    newButton.textContent = "Button 5"; // <button>Button 5</button>
    newButton.classList = "btn"; // <button class="btn">Button 5</button>
    document.body.appendChild(newButton);

// Update NodeList to include the new button

    buttons = document.querySelectorAll(".btn");    
    console.log(buttons);

// REMOVE button on click

    buttons.forEach(button => {
      button.addEventListener("click", event => {
        event.target.remove(); // Removes an element that what I clicked
        buttons = document.querySelectorAll(".btn"); // Update NodeList after removal
        console.log(buttons);
      });
    });
