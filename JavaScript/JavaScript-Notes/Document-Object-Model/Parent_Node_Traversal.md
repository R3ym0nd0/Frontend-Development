# 🧭 Parent Node Traversal

    const ul2 = document.querySelector('ul');

    // Go up to the parent node
    console.log(ul2.parentNode);          // may return a text node or element
    console.log(ul2.parentElement);       // always returns an element (or null)

    // Go up 2 levels
    console.log(ul2.parentNode.parentNode);
    console.log(ul2.parentElement.parentElement);

    // 🔥 Use .parentElement when you only care about actual HTML tags, not weird text nodes.
