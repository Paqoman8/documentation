# Style Guide

To ensure consistency and maintainability, please adhere to the following coding standards.

## HTML

- **Indentation**: 2 spaces.
- **Semantic Tags**: Use `<header>`, `<main>`, `<section>`, `<footer>`, etc., instead of generic `<div>`s where possible.
- **Attributes**: Use double quotes for attributes. `class="container"`.
- **Comments**: Comment major sections.

```html
<!-- Good -->
<section id="about">
  <h2>About Me</h2>
</section>
```

## CSS

- **Naming Convention**: BEM (Block Element Modifier) is preferred but simple kebab-case is acceptable for this small project.
- **Formatting**:
  - One selector per line.
  - Opening brace on the same line.
  - One property per line.
  - 2 space indentation.

```css
/* Good */
.project-card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
}
```

## JavaScript

- **Variable Declaration**: Use `const` by default, `let` if reassignment is needed. Avoid `var`.
- **Functions**: Use Arrow functions for callbacks, named functions for top-level logic.
- **Semicolons**: Always use semicolons.
- **Quotes**: Single quotes `'` preferred for strings.

```javascript
// Good
const init = () => {
  console.log('App started');
};
```
