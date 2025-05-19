# ✒️ Typography

## font family & appearance
- `font-family` - choose the font (and back‑ups)
- `font-size` -  how big the text is
- `font-weight` - how thick/bold the letters are
- `font-style` - normal or italic text

## text spacing & flow
- `line-height` - space between lines
- `letter-spacing` - space between letters
- `word-spacing` - space between words

## alignment & casing
- `text-align` - line up text left, center, right, or justify
- `text-transform` - make text UPPERCASE, lowercase, or Capitalized

      .typography {
          /* font family & appearance */
          font-family: Arial, Helvetica, sans-serif; /* fallback stack */
          font-size: 1rem;          /* base size (16 px by default) */
          font-weight: bold;        /* weight: normal | bold | 100‑900 */
          font-style: italic;       /* style: normal | italic | oblique */
  
          /* text spacing & flow */
          line-height: 1.5;         /* vertical rhythm */
          letter-spacing: 0.03em;   /* horizontal tracking */
          word-spacing: 2px;        /* extra gap between words */
  
          /* alignment & casing */
          text-align: center;        /* left | center | right | justify */
          text-transform: uppercase; /* none | uppercase | lowercase | capitalize */
        }
