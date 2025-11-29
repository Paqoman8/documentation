# Usage Guide

This document explains how to use and customize the portfolio template.

## Customizing Content

### Changing Personal Info
Open `src/index.html` and look for the `<!-- Personal Info -->` section. Update the name, title, and bio.

```html
<h1 id="name">Your Name</h1>
<p class="subtitle">Full Stack Developer</p>
```

### Adding Projects
Locate the `<!-- Projects Section -->`. Duplicate the project card structure for each new project.

```html
<div class="project-card">
  <h3>Project Title</h3>
  <p>Description...</p>
</div>
```

## Customizing Styles

### Theming
Open `src/css/style.css`. At the top, you will find the `:root` variables. Change these hex codes to update the entire color scheme.

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --text-color: #333;
}
```

## Deployment

### GitHub Pages (Recommended)

1. Go to your repository settings on GitHub.
2. Scroll down to "Pages".
3. Select the `main` branch and the `/src` folder (or root if you move index.html up).
4. Save. Your site will be live at `https://github.com/Paqoman8/documentation.git`.

### Netlify / Vercel

1. Connect your GitHub repo.
2. Set the "Publish directory" to `src`.
3. Deploy.
