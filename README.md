# Liquid hamburger Menu

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/liquid-hamburger-menu/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A standalone recreation of the uploaded 16.83-second screen recording.

## What the video shows

- Title: **Liquid hamburger Menu**
- Black page with a blue-glowing title
- Large dark navy demo area framed by a bright orange border
- A cyan/blue circular hamburger button in the center
- Four circular menu droplets expand around it: left, top, right, and bottom
- The central three-line hamburger icon changes into an X when open
- The four menu items have emoji-like icons: home, profile/person, game controller, and search
- A dark editor-style CSS panel below the demo shows the staggered transition rules

The recording starts with the radial menu open. The central button is clicked to collapse it, then clicked again to expand it. Individual menu droplets also show hover feedback.

## CSS declarations legible in the video

These staggered positions and timings are transcribed from the visible editor:

```css
.menu-open:checked ~ .item-1 {
  transition-duration: 290ms;
  transform: translate3d(-100px, 0, 0);
}

.menu-open:checked ~ .item-2 {
  transition-duration: 390ms;
  transform: translate3d(0, -100px, 0);
}

.menu-open:checked ~ .item-3 {
  transition-duration: 490ms;
  transform: translate3d(100px, 0, 0);
}

.menu-open:checked ~ .item-4 {
  transition-duration: 590ms;
  transform: translate3d(0, 100px, 0);
}
```

Other readable source details include a hidden checkbox state, a `menu-open-button` with a cubic-bezier transition, a hover scale, and 25px by 3px white hamburger bars. The original full HTML/CSS/JS source is not completely visible in the recording; missing details are reconstructed to reproduce the visual and interaction.

## Run

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Click the central blue circle to collapse or expand the four menu items.
4. Hover a menu item to see its white hover state.
5. Press Escape to close the menu.

No npm install, framework, or external dependency is required.

## Files

- `index.html` — menu structure and code panel
- `style.css` — liquid-blue circles, hamburger transform, and staggered radial transitions
- `script.js` — Escape key and menu item interaction
- `README.md` — this guide

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
