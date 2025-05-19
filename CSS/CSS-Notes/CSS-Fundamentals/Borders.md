# 📦 Borders

- `border-width` - **thickness of the line**
- `border-style` - **look of the line (solid, dashed, dotted, double, none)**
- `border-color` - **color of the line**
- `border-radius` - **curves the corners (bigger = rounder)**

      .border {
          border-width: 3px;
          border-style: solid;
          border-color: blue;
          border-radius: 10px;
      }
  
      .short-hand-border {
          border: 3px solid blue; /* width | style | color */ 
      }
  
      .border-sides {
          border-bottom: 3px solid blue;
          border-top: 3px solid blue;
          border-left: 3px solid blue;
          border-right: 3px solid blue;
      }
  
