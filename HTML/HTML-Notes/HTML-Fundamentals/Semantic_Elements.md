# 🏷️ Semantic Elements

- `<header>` - **Intro area for a page/section**
- `<nav>` - **Major navigation menu**
- `<main>` - **Primary page content**
- `<section>` - **Thematic grouping of content**
- `<article>` - **Stand‑alone piece that could be syndicated**
- `<aside>` - **Stuff tangentially related to the main content**
- `<footer>` - **Closing info for page/section (copyright, links)**
- `<figure> / <figcaption>`	- **Media (img, chart) + its caption**
- `<time>` - **Machine‑readable date/time stamp**

## 👩‍💻 Example:
    
    <!-- site or section header (logo, nav, hero) -->
    <header>   
        <!-- main navigation links -->
        <nav>    
            <!-- ... -->
        </nav>
    </header>

    <!-- the star‑of‑the‑show content (only one per page) -->
    <main>     
        <!-- self‑contained piece (blog post, news story) -->
        <article> 
            <h1>Article title</h1>
            <section>  <!-- logical subsection -->
                <h2>Sub-heading</h2>
                <p>Paragraph…</p>
            </section>
            <!-- side info: ads, pull quotes, related links -->
            <aside>   
            …
            </aside>
        </article>
    </main>

    <!-- bottom area: copyright, contact, small print -->
    <footer>   
    …
    </footer>
