# Project Notes

## What we set up

- Project folder: `MSTU-5003-Week2-3-Project`
- Private GitHub repository: [mna2145-cloud/MSTU-5003-Week2-3-Project](https://github.com/mna2145-cloud/MSTU-5003-Week2-3-Project)
- The local Git repository is connected to GitHub through the `origin` remote.

## Browser demo

The project is a small browser-based jump experience built with plain HTML, CSS, and JavaScript:

- `index.html` — page structure
- `style.css` — layout and jump/landing transitions
- `script.js` — Spacebar input, variable jump height, and meter updates
- `README.md` — how to play, project files, and the project reflection

Press **Space** and the square starts jumping immediately. Keep holding to rise higher, then release to land. Jump height scales with how long Space is held, from 40 pixels up to a 190-pixel limit (reached after 1.2 seconds). The meter shows charge while the square rises.

## Work completed

- Changed the interaction from charging on press and jumping on release to starting the jump immediately on keydown.
- The square rises as Space is held; releasing Space starts the landing transition. Repeated keydown events are ignored so holding the key does not retrigger the jump.
- Kept the existing square, play area, colors, and meter graphics. Updated the instructions to explain the press/hold/release behavior.
- Updated `index.html`, `style.css`, and `script.js`. Reload the browser tab after code changes to see the latest version.
- Added `README.md` with play instructions and a reflection on the project goals, design choices, and possible future game-physics work.

## Current state

The browser preview is `index.html`. The project is tracked in the private GitHub repository on the `main` branch. The README and game files have been pushed; the latest README reflection and this notes update are being published now.

## Pick up tomorrow

Open `index.html` in a browser to continue exploring the demo, or edit the source files. Future ideas include adding horizontal movement and platforms to explore how jump height interacts with movement and basic game physics. Commit and push future changes to the private GitHub repository when ready.
