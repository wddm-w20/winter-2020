## Project structure
A web site or application is a single folder, with many contributing files. This folder is often called the **root* folder (or just *project* folder).

Each web project contains a file named `index.html`, which is the project's starting page (often referred to as the *home* page).

All files and folders must follow these two rules:
- Small letters only (numbers are okay too)
- All spaces are converted into dashes: `-`


## Anatomy of an element
An HTML document is a collection of **elements** *(important keyword!)*. 

As an example of an element, here is a paragraph:
`<p>Hello world!</p>`

Here are that paragraph's parts:
- `<p>`: Opening tag. Dictates what type of content this is
- `Hello world!`: The content we want the user to see
- `</p>`: Closing tag. Matches, the open, but includes a `/` (slash) before the tag type

## HTML template
All HTML pages start with the following structure (at least):

```html
<!doctype html>
<html>
   <head>
      <title></title>
   </head>
   <body>
   </body>
</html>
```

Notice that everythign so far in terms of file/folder names and code are all written in small letters. *This is by design!*


## Content elements we know so far
All physical content (what we want the users to see) is created within the document's `<body>` element (after the opening tag, before the closing `</body>` tag)

- `<p>`: Paragraph
- `<h1>` to `<h6>`: Headings
- `<ol>`: Ordered list
- `<ul>`: Unordered list
- `<li>`: List item (only goes within `ol` and `ul`)

**Note:** All of the elements above are *block* (or block-like) elements.


## Shortcuts so far (some are Mac or VSCode specific)
- `cmd + s`: Save
- `cmd + shift + n`: New window
- `cmd + x`, `cmd + c`, `cmd + v`: Cut selection or line, Copy selection or line, Paste from clipboard
- `ctrl + space`: Auto complete window
- `alt + z`: Toggle line-wrap


## In-class practice lab
Complete the following:

1. Create a folder named **"my-bio"**
1. Add a file named **"index.html"** (must be named this always!)
1. Add the template (Slack, #113-programming)
1. Write a meaningful `<title>`
1. Structure your bio into an HTML web page (within the `<body>`)
  - Use: `<p>`, `<h1>`-`<h6>`, `<li>` (within an `<ul>` or `<ol>`)


## Also today
- Check over your work
  - Resist the urge to line break your content
  - All content within the `body`
  - Did you add a `title`?
- A few basic structural elements: `section`, `article`
- A few basic inline elements: `strong`, `em`, `a`
- Attributes
- Folders
- Images and paths
- Comments in HTML
- Intro to CSS styling
- Backup/submission


## Next week
- A few basic structural elements: `header`, `main`, `footer`, `nav`, `aside`, `div`, etc.
- More inline elements: `abbr`, `sub`, `sup`, `code`, `pre`, `span`
- HTML special characters


https://code.visualstudio.com/
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
https://stackoverflow.com/
https://colours.neilorangepeel.com/