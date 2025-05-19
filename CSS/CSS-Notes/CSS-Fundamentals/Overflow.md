# 🌊 Overflow

- `overflow` - **controls what happens when content doesn’t fit inside its container.**

      .overflow {
          overflow: visible;  /* If content is too big, it spills outside and you can see it. */
          overflow: hidden;   /* Content that goes outside gets cut off and you can’t see it. */
          overflow: clip;     /* Like hidden, but it won’t let you scroll or show scrollbars. */
          overflow: scroll;   /* Always shows scrollbars, even if you don’t need them. */ 
          overflow: auto;     /* Shows scrollbars only when content is too big to fit. */
      }
