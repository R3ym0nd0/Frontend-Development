# 📌 Positions

- `static`   - **default / it sits where the document flow puts it**
- `relative` - **keeps its spot but can be moved with top/left/right/bottom**
- `absolute` - **taken out of flow, it positioned by top/left/right/bottom inside nearest positioned parent**
- `fixed`    - **fixed to the screen, it stays visible while you scroll**
- `sticky`   - **normal at first, then sticks when you scroll past it**
- `top/right/bottom/left` – **how far to move from that edge**
- `z-index` – **which layer is on top (higher = closer to the viewer)**

      .positions {
          position: static;   /* default / follows normal flow */
          position: relative; /* stays in flow, but you can nudge it with top/left… */
          position: absolute; /* taken out of flow, placed at exact coords inside nearest positioned parent */
          position: fixed;    /* sticks to viewport, it doesn’t move when you scroll */
          position: sticky;   /* acts normal until scrolled to a set point, then sticks */

          /* Offsets (work with relative, absolute, fixed, sticky) */
          top: 20px;    /* push down  ‑ or use negative to pull up   */
          right: 10px;  /* push left  ‑ or use negative to pull right */
          bottom: 0;    /* push up    */
          left: 0;      /* push right */
  
          /* Layer order */
          z-index: 10;  /* bigger number = sits on top */
      }
