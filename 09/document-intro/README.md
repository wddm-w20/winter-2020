# Document Intro

## Topics
- [ ] Selecting document elements
- [ ] Storing references
- [ ] Manipulating content

## Selecting document elements

```javascript
// Find an element
document.querySelector(`any css selector`); // null (no element found)

// Locate <h1 class="hello"></h1>
document.querySelector(`.hello`); // valid!

// Store a reference to the location
let greeterHeading = document.querySelector(`.hello`);

// Change the content of the element at the location we stored
greeterHeading.textContent = `Hello world!`;
```

### Note
- `document` refers to the current page that's loaded into the `window` (created using HTML and CSS)
- `querySelector()` is a **method** (or "function") that the `document` can perform to search itself for an Element
  - It finds the element and returns a reference to its location
- `textContent` is a **property** (or "variable") stored within an Element that stores its content (between the open/close tags)
   - Because it's a variable, we can change its value and the browser will update that element within the window
