# Modern Hero Landing Page

A modern, responsive React landing page template built with Vite, Tailwind CSS, and ESLint.  
Includes a sample "Socialabiz" hero section with mobile-friendly navigation and custom SVG assets.

## Features

- ⚡️ Fast development with [Vite](https://vitejs.dev/)
- ⚛️ React 19 with [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)
- 💨 [Tailwind CSS](https://tailwindcss.com/) utility-first styling
- 🧹 Linting with ESLint and recommended React rules
- 📱 Responsive navbar with mobile menu toggle
- 🎨 Custom SVG assets and handwritten underline effect

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd modern-hero
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Building for Production

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

### Linting

Run ESLint to check for code issues:

```sh
npm run lint
```

## Project Structure

```
modern-hero/
├── public/                # Static assets (e.g., vite.svg)
├── src/
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   ├── index.css          # Global styles (Tailwind + fonts)
│   ├── App.css            # App-specific styles
│   └── components/
│       └── socialabiz/
│           ├── Socialabiz.jsx   # Socialabiz hero section
│           └── assets/          # SVG assets for Socialabiz
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

## Customization

- **Hero Section:**  
  Edit `Socialabiz.jsx` to change the hero content, navigation links, or SVG assets.
- **Styling:**  
  Modify `App.css` and `index.css` for custom styles or Tailwind configuration.
- **Assets:**  
  Replace SVGs in `src/components/socialabiz/assets/` for your own branding.

## License

MIT

---

Inspired by modern SaaS and