# 🎨 Styling Elements

    // Change style of ONE element
    const title = document.querySelector('#container');
    title.style.backgroundColor = 'red';

    // Change style of MULTIPLE elements
    const list = document.querySelectorAll('.test');
    for (let i = 0; i < list.length; i++) {
        list[i].style.fontSize = '20px';
