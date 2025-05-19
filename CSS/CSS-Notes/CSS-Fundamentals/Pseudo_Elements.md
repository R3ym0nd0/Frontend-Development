# ✨ Pseudo‑Elements

- `::first-letter` - **styles just the very first character.**
- `::first-line` - **styles only the first line of text.**
- `::selection` - **styles text while it’s highlighted by the user.**
- `::before | ::after` - **inject small bits before/after the element (needs content).**
- `::marker` - **customizes list bullets or numbers.**
 

      /* first letter of an <h1> */
      h1::first-letter {
          font-size: 2rem;
      }
  
      /* first line of a <p> */
      p::first-line {
          background: yellow;
      }
  
      /* the part the user highlights/ selects */
      p::selection {
          color: white;
          background: pink;
      }
  
      /* add content before every <li> in #fruit */
      #fruit li::before {
          content: "❌";
      }
  
      /* add content after the #apple element */
      #apple::after {
          content: "✅";
      }
  
      /* change the bullet/number marker of each <li> in #fruit */
      #fruit li::marker {
          content: "✅";
      }
