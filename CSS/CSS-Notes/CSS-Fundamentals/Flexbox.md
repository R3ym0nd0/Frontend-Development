# 🎁 Flexbox

    .flexbox {
        display: flex;                 /* makes the container a flexbox */
        justify-content: center;       /* centers items horizontally */
        align-items: center;           /* centers items vertically */

        flex-direction: column;        /* stack items top to bottom */
        flex-direction: row;           /* place items left to right (default) */

        flex-wrap: wrap;               /* allow items to move to next line if needed */
        align-content: flex-start;     /* aligns wrapped rows at the top */

        column-gap: 1em;               /* horizontal space between items */
        row-gap: 1em;                  /* vertical space between items */
        
        align-self: center;            /* center specific item inside its container */
        order: 1;                      /* change item order in the container */
    }
    
##  Flexbox alignment depends on flex-direction

**When flex-direction: row (default)**
- `justify-content` aligns items horizontally (left to right)
- `align-items` aligns items vertically (top to bottom)
  
**When flex-direction: column**
- `justify-content` aligns items vertically (top to bottom)
- `align-items` aligns items horizontally (left to right)
