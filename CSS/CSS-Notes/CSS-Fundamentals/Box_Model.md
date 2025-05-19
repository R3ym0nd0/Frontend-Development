# 📦 Box Model

- `Margin` - **space outside the border, pushes other elements away**
- `Border` - **line around padding and content, can have color, width, style**
- `Padding` - **space between content and border, adds breathing room inside the box**
- `Content` - **the actual stuff inside the box (text, images, etc.)**

      .box {
          /* space outside */          
          margin-top: 20px;
          margin-bottom: 20px;
          margin-left: 20px;
          margin-right: 20px;
  
          /* Short Hand: top right bottom left*/
          margin: 20px 20px 20px 20px;   
  
          /* border line (needs style and color to appear) */
          border-top: 3px solid black;
          border-right: 3px solid black;
          border-bottom: 3px solid black;
          border-left: 3px solid black;
  
          /* shorthand: width | style | color */
          border: 3px solid black;
  
          /* space inside */
          padding: 10px;            
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 10px;
          padding-right: 10px;
  
          /* Short Hand: top right bottom left */
          padding: 10px 10px 10px 10px;
      }
