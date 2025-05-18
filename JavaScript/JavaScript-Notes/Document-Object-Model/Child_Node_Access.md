# 👶 Child Node Access

    const ul = document.querySelector('ul');

    console.log(ul.childNodes);          // ALL nodes (includes text nodes, line breaks, etc.)
    console.log(ul.firstChild);          // First node (could be text or element)
    console.log(ul.lastChild);           // Last node (could be text or element)

    // Style the second child (index 1 — skipping the line break)
    ul.childNodes[1].style.backgroundColor = "red";

    // ⚠️ childNodes is a NodeList (can include whitespace as text nodes).
