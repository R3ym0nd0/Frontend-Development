# 👧👦 Child Element Access

    const ul = document.querySelector('ul');
    
    console.log(ul.children);             // Only ELEMENT nodes (no text)
    console.log(ul.firstElementChild);    // First child that is an element
    console.log(ul.lastElementChild);     // Last child that is an element

    // ✅ Recommended for clean element targeting, no weird line breaks messing with your loop.
