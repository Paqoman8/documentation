# Installation Guide

This guide will help you set up the project locally for development or testing.

## Prerequisites

- **Git**: Version control system. [Download Git](https://git-scm.com/downloads)
- **Web Browser**: Chrome, Firefox, Safari, or Edge.
- **Code Editor**: VS Code (recommended), Sublime Text, or Atom.
- **Node.js** (Optional): Only if you want to use a local development server like `http-server` or `live-server`.

## Step-by-Step Setup

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/Paqoman8/documentation.git
```

### 2. Navigate to the Directory

```bash
cd documentation
```

### 3. Running the Project

#### Option A: Direct File Open (Simplest)
Navigate to the `src` folder and double-click `index.html`.

#### Option B: VS Code Live Server (Recommended)
1. Open the project in VS Code.
2. Install the "Live Server" extension.
3. Right-click `src/index.html` and select "Open with Live Server".

#### Option C: Node.js http-server
If you have Node.js installed:

```bash
npx http-server src
```

Then open the URL shown in the terminal (usually `http://localhost:8080`).

## Troubleshooting

- **Images not loading?** Check that the paths in `index.html` are relative and correct.
- **Styles missing?** Ensure `style.css` is correctly linked in the `<head>`.
