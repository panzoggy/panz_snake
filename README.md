# 🐍 Snake Game - Neon Cyberpunk Edition

A modern Snake game built with HTML5 Canvas and TypeScript, featuring a stunning neon cyberpunk aesthetic.

## ✨ Features

- **Neon Cyberpunk Visuals** - Glowing borders, animated gradients, particle effects
- **Smooth Animations** - Interpolated snake movement, food pulsing, screen shake on eating
- **Responsive Design** - Works on desktop and mobile with touch controls
- **High Score Persistence** - Saves your best score to localStorage
- **Pause/Resume** - Space bar to pause, click or space to resume
- **Keyboard & Touch Controls** - Arrow keys, WASD, or on-screen buttons

## 🎮 Play Online

[Play on GitHub Pages](https://panzoggy.github.io/panz_snake/) *(enable Pages in repo settings)*

Or clone and run locally:

```bash
git clone https://github.com/panzoggy/panz_snake.git
cd panz_snake
npm install
npm run dev    # TypeScript watch mode
npm run serve  # Serves at http://localhost:3000
```

## 🎯 Controls

| Action | Keyboard | Mobile |
|--------|----------|--------|
| Up | ↑ / W | ▲ button |
| Down | ↓ / S | ▼ button |
| Left | ← / A | ◄ button |
| Right | → / D | ► button |
| Pause | Space | - |
| Restart | Click "Rejouer" | Click "Rejouer" |

## 🛠 Tech Stack

- **TypeScript** - Type-safe game logic
- **HTML5 Canvas** - High-performance 2D rendering
- **CSS3** - Custom properties, gradients, animations
- **ES2020 Modules** - Modern JavaScript

## 📁 Project Structure

```
panz_snake/
├── index.html      # Main game (HTML + CSS + JS inline)
├── src/
│   └── game.ts     # TypeScript version (alternative)
├── package.json    # Build scripts
├── tsconfig.json   # TypeScript config
└── README.md       # This file
```

## 🎨 Visual Highlights

- Animated gradient border with glow effect
- Smooth snake body with gradient stroke and glowing head
- Pulsing food with radial gradient and highlight
- Subtle grid background
- Screen shake feedback on eating
- Game over overlay with final score

## 📝 License

MIT License - Feel free to use and modify!