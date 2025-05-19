# 🌄 Background Images

- `background-image `- **sets the picture file**
- `background-repeat` - **tile ('repeat') or don’t tile ('no-repeat')**
- `background-position` - **where to place the image (top, center, etc.)**
- `background-attachment` - **'scroll' (moves with page) or 'fixed' (locks to viewport)**
- `background-size` - **'cover' fills and crops, 'contain' fits inside, or exact sizes (e.g., 100px 200px)**

      .background-images {
          background-image: url(path.png); /* pick the picture */
          background-repeat: no-repeat;    /* don’t repeat it */
          background-position: center;     /* keep it centered */
          background-attachment: fixed;    /* stays put while page scrolls */
          background-size: cover;          /* fill area, crop if needed */
      }
