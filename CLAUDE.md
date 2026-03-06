# JS Sushi — Learn JavaScript Through Arrays

A browser-based interactive game that teaches JavaScript array methods through a sushi belt metaphor. Students write code to manipulate a visual sushi belt.

## Project Structure

```
index.html          — Single-page app entry point
js/
  main.js           — App init, level navigation, code execution flow
  levels.js         — All 38 levels (data + validation functions)
  engine.js         — Sandboxed code execution (new Function), input sanitization
  editor.js         — CodeMirror 6 editor with locked prefix support
  belt.js           — Single belt SVG visualization controller
  ui.js             — UI rendering, level selector, feedback messages
  progress.js       — localStorage persistence (completed levels, current level, best code)
css/
  style.css         — Main layout & Catppuccin Mocha theme
  belt.css          — Belt animations (slideIn, beltScroll, popIn)
  editor.css        — (currently unused, styles are in editor.js theme)
svg/
  placeholder.js    — SVG rendering for sushi items on the belt
```

## Architecture

- **No build step** — ES modules loaded directly via `<script type="module">` and importmap for CodeMirror
- **CodeMirror 6** loaded from esm.sh CDN
- **Single belt display** — one `#belt-display` container shows initial state on load, transitions to result on success
- **Locked prefix** — levels can define `lockedPrefix` (non-editable dimmed text at start of editor) and `initialCode` (pre-filled editable text). Used in level 1 where `const belt = ` is locked and `['salmon']` is editable.
- **Enter key blocked** — editor is single-line only (Enter consumed by keymap)
- **Semicolons blocked** — engine rejects code containing `;`

## Level Data Shape

Each level in `levels.js` has:
- `id`, `title`, `subtitle`, `chapter`, `chapterName` — metadata (`title` is fun/sushi-themed, `subtitle` is the technical JS concept)
- `description` — HTML string shown in info panel
- `hint` — togglable hint text
- `preCode` / `postCode` — read-only code shown above/below editor, concatenated with user code for execution
- `lockedPrefix` — (optional) non-editable prefix baked into the editor
- `initialCode` — (optional) pre-filled editable content in editor
- `placeholder` — ghost text (currently unused, all set to empty string)
- `highlightIndex` — (optional) index to highlight on the belt on success, without showing a plate below
- `answer` — reference solution
- `validate(userCode, context)` — returns boolean; context contains all declared variables after execution
- `beltBefore` / `beltAfter` — arrays for belt visualization (before = on load, after = on success)
- `beltBeforeLabel` / `beltAfterLabel` — optional belt labels
- `async` — flag for Promise-based levels (wraps execution in async IIFE with timeout)

## 7 Chapters, 40 Levels

1. **The Empty Belt** (1-6) — Array creation, access, mutation
2. **Adding & Removing** (7-15) — push, pop, unshift, shift, splice, slice
3. **Searching the Belt** (16-21) — includes, indexOf, find, findIndex, every
4. **Transforming the Belt** (22-28) — filter, map, reduce, objects
5. **Sorting & Rearranging** (29) — sort
6. **Spread & Copying** (30-34) — copy trap, spread copy, safe copy, spread add
7. **Destructuring** (35-40) — pick, rest, skip, objects, final challenge

## Code Style Conventions

- **Single quotes** in all student-facing code (`'salmon'` not `"salmon"`)
- **No semicolons** in student-facing code examples
- Catppuccin Mocha color palette throughout
- Sushi items colored by name: salmon=#fa8072, tuna=#dc3545, shrimp=#f8a4b8, eel=#8b6914, squid=#dda0dd

## Lesson Review Checklist

When reviewing or working on a lesson, check all of the following:

1. **Clear instructions** — Does the description clearly state what the student needs to do? If a specific value is expected (e.g. push 'eel'), it must be mentioned.
2. **Hint doesn't give the answer** — The hint should nudge toward the concept or approach, never provide the exact code. Compare the hint against the `answer` field to verify.
3. **Visual feedback** — Is the result properly highlighted on success? Use `highlightIndex` (belt-only highlight) or `plate` (badge below belt) as appropriate for the level.
4. **No overlap** — Check that the task is meaningfully different from adjacent lessons, not just the same action with different values.
5. **Validation matches description** — The `validate` function should accept what the description asks for, not just the reference answer.
