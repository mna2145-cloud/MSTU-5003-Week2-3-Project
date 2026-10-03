# Hold to Jump

A small browser-based jumping game built with plain HTML, CSS, and JavaScript.

## Reflection

I wanted to explore how to code basic functionality for a video game, and I was interested in the kind of jump that is repsonsive to the time a button is pressed on the keyboard. In certain video games, you jump higher when you press a key for longer, and I was interested in how that would look from a code standpoint. I asked Codex to keep the visuals and the code simple, so when it first created the browser tool, it had a "charge" feature, where you would press the button first and the icon would jump after the button was released. I was anticipating that these two things would happen together at the same time. I asked it to make that change, while also keeping the code simple. In this second version, you can keep holding the space bar much longer than what might be typical for a jump -- so the icon can kind of hover and move up in the air. It doesn't look very natural / wouldn't be used as is in a game for a jump, but I thought it clearly visually communicated what I wanted the app to do, so I left it in.

I am happy that I asked AI to keep the visuals simple -- I think the visual generation of material is what I have the most difficulty accepting about AI and I would want to make the visuals for any game for myself. I also think it saved a bit on the computing power (I assume) to not generate intense visuals. In a future iteration, I would like to be able to control the icon on screen, as if walking, and then jump, perhaps to a platform, and test the different jump heights as responsive to movement and button pressing, as a way to explore basic game physics.

## Play

Open `index.html` in a web browser. Press and hold **Space** to make the square jump higher, then release to land. The jump height ranges from 40 to 190 pixels; the maximum is reached after 1.2 seconds.

## Project files

- `index.html` — page structure and instructions
- `style.css` — layout, colors, and jump/landing transitions
- `script.js` — Spacebar controls and variable jump height
- `PROJECT_NOTES.md` — project history and notes for future work
