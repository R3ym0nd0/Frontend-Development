# 📍 Selectors - How to Target Elements

    // By ID (only grabs one element)
    const id = document.getElementById('text');

    // By Class (returns HTMLCollection)
    const classItems = document.getElementsByClassName('test');

    // By Tag Name (returns HTMLCollection)
    const tags = document.getElementsByTagName('li');

    // First Match (can use any selector: class, id, tag, etc.)
    const firstDiv = document.querySelector('#container');

    // All Matches (returns NodeList)
    const allDivs = document.querySelectorAll('div');
