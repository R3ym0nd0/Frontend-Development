# ⬅️➡️ Sibling Navigation

    const ul = document.querySelector('ul');

    console.log(ul.previousSibling);         // Can be text or comment
    console.log(ul.nextSibling);             // Same, could be anything

    console.log(ul.previousElementSibling);  // Only previous HTML element
    console.log(ul.nextElementSibling);      // Only next HTML element

    // ✨ Use .previousElementSibling / .nextElementSibling to avoid hitting text nodes.
