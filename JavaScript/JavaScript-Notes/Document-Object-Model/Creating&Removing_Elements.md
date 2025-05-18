# 🧱 Creating & Removing Elements
    
    const ul = document.querySelector('ul'); // select the first <ul> tag
    const li = document.createElement('li'); // create an empty <li></li> 
    ul.append(li); // add it inside of ul at the end
    console.log(ul);

    // Removing Elements
    li.remove(); // deletes the element from the DOM
