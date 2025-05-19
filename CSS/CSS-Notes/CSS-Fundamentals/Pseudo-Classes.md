# 🎭 Pseudo‑Classes

- `:link` - **unvisited link**
- `:hover` - **when cursor is over it**
- `:not(...)` - **element that does not match what’s inside**
- `:active` - **while it’s being clicked/tapped**
- `:visited` - **link already clicked before**
- `:nth-child(n)` - **pick the _n_th child (1st, 2nd, every 3rd, etc.)**
    

      /* link: a hyperlink that hasn’t been clicked yet */
      a:link { 
          color: blue; 
      }
  
      /* hover: when the mouse is over the element */
      a:hover { 
          color: red;
      }
  
      /* not(:hover): any time the mouse is NOT over the element */
      a:not(:hover) { 
          opacity: 0.8;
      }
  
      /* active: the moment you press (click) the element */
      a:active { 
          color: green; 
      }
  
      /* visited: a link that the user has already clicked */
      a:visited    {
          color: purple; 
      }
  
      /* nth-child(1): the first child of its parent (can be 2, 3, even formulas) */
      li:nth-child(1) { 
          font-weight: bold; 
      }
