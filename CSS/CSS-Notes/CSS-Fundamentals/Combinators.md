# 🔗 Combinators

- `Descendant` - **selects elements inside another, at any depth**
- `Child` - **selects direct children only**
- `General Sibling` - **selects later siblings (same parent), any gap**
- `Adjacent Sibling` - **selects the very next sibling only**
   
      /* Descendant: .selector2 anywhere inside .selector1 */
      .selector1 .selector2 {
          color: yellow;
      }
    
      /* Child: .selector2 is a direct child of .selector1 */
      .selector1 > .selector2 {
          color: yellow;
      }
    
      /* General Sibling: .selector2 is a later sibling of .selector1 (not necessarily right after) */
      .selector1 ~ .selector2 {
          color: yellow;
      }
    
      /* Adjacent Sibling: .selector2 is the very next sibling after .selector1 */
      .selector1 + .selector2 {
          color: yellow;
      }
