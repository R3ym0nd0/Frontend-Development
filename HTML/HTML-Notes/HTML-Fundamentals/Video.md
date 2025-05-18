# 🎬 Video

## Basic Video Example
    <video controls width="640" height="360" poster="thumbnail.jpg">
      <source src="movie.mp4"  type="video/mp4">
      <source src="movie.webm" type="video/webm">
      Your browser does not support the video tag.    
    </video>

- `Video Tag <video></video>` - **embeds video content on the page.**
- `Source Tag <source>` - **points to video file & type**

## Video Tag Attributes:
- `controls` - **shows play/pause UI**
- `autoplay` - **starts playing automatically**
- `muted` -	**starts muted (needed if you autoplay)**
- `loop` - **restarts the video when it ends**
- `width / height` - **sets player size (pixels)**
- `poster="thumbnail.jpg"` - **image shown before playback**
- `preload="auto/metadata/none"` - **hints how much data the browser should preload**

## Source Tag Attributes:
- `src` - **file path or URL of the video**
- `type` - **MIME type (video/mp4, video/webm, etc.)**
- `fallback text` — **shows if the browser can’t play any of the provided sources.**
