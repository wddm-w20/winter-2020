# Assignment: In-Class

With partner, you will create a two-page "blog" style layout. `index.html` will be the page listing the available stories. `story.html` will be a single story/blog template. 

You will discuss the project criteria with your partner and you will be pair programming (ie, taking turn on the keyboard)

For this, we will start with `story.html`. On one computer, create a project folder called `blog-layout` (or similar) and add `story.html` with a basic HTML template. 

## Part 1: Blog Content

All content for this project may be _lorem ipsum_. You will use the appropriate semantic structural containers to develop the document.


### Header 

Contains a clickable "logo" image that will anchor back to `index.html`. 

### Main

In the heading portion of the story, start with a primary heading (story/blog title), date of publish (use a `<time datetime="2020-01-01">` element), author name(s), category.

In the content portion of the story, create (in this order):
- 2 paragraphs
- 1 image (use Unsplash)
- 1 paragraph
- a sub-heading
- a paragraph
- a blockquote, with an author/cite
- 1 more paragraph
- a sub-heading
- 2 paragraphs

Beneath the content, a "Related Stories" area with three stories, each with an image, title, and anchor to the story (they should all just anchor back to `story.html`)

### Footer

In the footer, list at least three social media links (fake urls are fine), anchored using clickable image icons. Include a copyright statement and a link to "Terms of Use" (which can use `#` as the anchor placeholder). Also include a one paragraph site bio somewhere in the footer. Ensure the social media links and bio have a heading to introduce them.

### Other

In this document you should include at least one example of each of the following inline content markup types: `em`, `strong`, `sup`, `abbr`, `code`, `q`, `small`


## Part 2: Blog Styling

### General

As a team, determine your basics site styling. Choose:
- Primary background (surface) colour
- Primary foreground (text) colour, aka "on" colour
- 2-3 accent colours (use tools like <https://coolors.co/> or <https://colorhunt.co/> to help)
- A complimentary foreground colour for each accent
- 2 fonts, one from <https://fonts.google.com/> and one web safe font 
  - Most commone web-safe fonts: Arial (sans-serif), Courier New (monospace), Georgia (serif), Times New Roman (serif), Verdana (sans-serif)
  - Also considered _mostly_ web safe: 
    - Sans-serif: Roboto, Helvetica, Trebuchet MS, Gill Sans
    - Serif: Times, Didot, Palatino, American Typewriter
- A standard spacing unit
- A standard container width in `em` units (somewhere between `40em` and `60em` is a good starting point)
- An animation speed in `s` or `ms` (to be used later)

Use CSS custom variables to define your main styles in a `:root` rule at the top of your CSS document. Consider a naming scheme that will capture your styling above in a systematic way. Example usage:

```
:root {
   --col-bg: #fff;
   --col-on-bg: #222;
   --col-accent-a: #5f6caf;
   --col-on-accent-a: #111;
   [...etc]
   --font-a: arial, helvetica, sans-serif;
   [...etc]
   --spacing: 1em;
}

body {
   background-color: var(--col-bg);
   color: var(--col-on-bg);
   [...etc]
}
```

The `body` rule should setup the primary defaults for the page. Be sure to consider primary foreground and background colours, fonts, base line height, alignment, and other inheritable properties.

### Header

Full width and full cover, high-fidelity `background-image` from <http://unsplash.com>. The logo will be within a container of a reasonable `max-width` (dependant on your `font-size`), defined previously in your `:root`. The logo should be left aligned within the container, but the container will be centered within the document. Ensure if the width of the viewport was small enough to squeeze the content, that a padding is applied to both sides horizontally to match your `--spacing` value defined.

### Main

Style your content using class-selected rules, applying the variables defined in the `:root` where needed. Everything should be uniquely styled using your base variables. As well, a few things to style specifically:

- Use the same class applied in the header to contain the width of the content
- Differential the "lead" paragraph of the story. Consider a few possibilities: a different font size or style, indent the first line, increase the size of the first character, etc.
- Images should take the full width of the content, as well as being fluid
- Style the `blockquote` with either a thick border along the left side to show indentation, or by applying an additional measure of `--spacing` through margin.
- Style the "Related Content" link to look like a button that says "Read More".
- Create a division between Related Stories using top/bottom borders

### Footer

Apply one of your accent colours (and it's compliment foreground colour) to the footer, which will span across the entire viewport. The content within the footer should be contained using the same class used above for the header and main. Use `height` (one of the few times!) to set a consistent height for the social media logos.


## Part 3: Index Content

Next week


## Part 4: Separation of Style + Index Styling

Next week

