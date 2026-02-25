# Ferman's Profile

A clean, modern personal profile page for Ferman ([@0xh3rman](https://github.com/0xh3rman)) featuring a brutalist minimalism design with dark theme and cyan accents.

## Features

- **Brutalist Design:** Raw, unadorned typography with monospace fonts for technical credibility
- **Dark Theme:** Pure black background with white text and electric cyan accents
- **Responsive Layout:** Centered, card-based layout that works on all screen sizes
- **Social Links:** Direct links to GitHub and X/Twitter profiles
- **Stats Display:** Shows GitHub contributions, repositories, and stars

## Quick Start

To serve and expose the page locally:

```bash
cd /home/ubuntu/profile && pnpm dev
```

The development server will start at `http://localhost:3000/`. To expose it publicly:

```bash
# In another terminal, use the expose tool to get a temporary public URL
manus-expose 3000
```

## Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Vite** for fast development and building
- **JetBrains Mono** for monospace typography
- **Lucide React** for icons

## Design Philosophy

The profile page follows **Brutalist Minimalism** principles:

- **Raw Typography:** Monospace fonts (JetBrains Mono) convey technical expertise
- **Stark Contrast:** Black background with white text for maximum readability
- **Minimal Decoration:** No unnecessary elements—only essential information
- **Functional Accents:** Electric cyan (#00d9ff) highlights links and interactive elements
- **Generous Whitespace:** Ample spacing between sections for visual breathing room

## Build

To build the project for production:

```bash
pnpm build
```

The output will be in the `dist/` directory.

## GitHub Pages Deployment

This repository is configured for GitHub Pages deployment on the `main` branch. The site is live at:

**https://0xh3rman.github.io/profile/**

To enable GitHub Pages:

1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `main` branch and `/root` directory
4. Save

## File Structure

```
profile/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx     # Profile page component
│   │   ├── App.tsx          # Main app component
│   │   ├── index.css        # Global styles with theme variables
│   │   └── main.tsx         # React entry point
│   └── index.html           # HTML template
├── server/                  # Backend placeholder (not used)
├── package.json             # Project dependencies
└── README.md                # This file
```

## License

MIT
