# SVG Assets Checklist

Assets needed to replace all programmatic placeholders in `svg/placeholder.js`. Each asset should be a standalone SVG file in `svg/`.

---

## Sushi Pieces (no plate — these will bounce independently)

Each sushi piece includes the colored topping and the rice base underneath. Design them as a top-down nigiri-style piece.

| # | File | Description | Color Reference |
|---|------|-------------|-----------------|
| 1 | `svg/sushi-salmon.svg` | Salmon nigiri topping + rice | `#fa8072` coral |
| 2 | `svg/sushi-tuna.svg` | Tuna nigiri topping + rice | `#dc3545` red |
| 3 | `svg/sushi-shrimp.svg` | Shrimp nigiri topping + rice | `#f8a4b8` pink |
| 4 | `svg/sushi-eel.svg` | Eel nigiri topping + rice (nori wrap band) | `#8b6914` brown |
| 5 | `svg/sushi-squid.svg` | Squid nigiri topping + rice | `#dda0dd` plum |
| 6 | `svg/sushi-default.svg` | Generic/unknown sushi topping + rice | `#94a3b8` slate |

**Notes:**
- Keep a consistent bounding box (e.g. 70 x 54) so they sit uniformly on the plate.
- The rice base should be a lighter cream shape (`#fefce8`) visible below the topping.
- Each flavor should look visually distinct beyond just color (texture lines, shape variation, etc.).

---

## Plate

A single reusable plate that sits beneath each sushi piece on the belt.

| # | File | Description |
|---|------|-------------|
| 7 | `svg/plate.svg` | Oval sushi plate viewed from slight top-down angle |

**Notes:**
- Elliptical / oval shape, slight 3D perspective (shadow ellipse underneath, main surface on top).
- Neutral color so it doesn't clash with any topping — current placeholder uses `#94a3b8` at 0.3 opacity for the shadow and `#45475a` / `#585b70` for the dish surface.
- Bounding box suggestion: ~90 x 24 (wider than tall, to sit under the sushi piece).

---

## Result Plate (larger, for the result area below the belt)

Used in the plate display area when a level asks the student to produce a single sushi item.

| # | File | Description |
|---|------|-------------|
| 8 | `svg/plate-large.svg` | Larger oval plate for the result display area |

**Notes:**
- Same style as the belt plate, but bigger (~160 x 40).
- The sushi piece SVG will be placed on top of this independently.

---

## Belt

The conveyor belt track that items ride on.

| # | File | Description |
|---|------|-------------|
| 9 | `svg/belt-track.svg` | Conveyor belt track segment (tileable / stretchable) |

**Notes:**
- Dark surface (`#313244`) with a dashed center line (`#45475a`).
- Should be horizontally tileable or designed to stretch via `preserveAspectRatio`.
- The animated dashed line can remain CSS-driven; just needs the static track artwork.

---

## Empty Belt

Shown when the array is empty (`[]`).

| # | File | Description |
|---|------|-------------|
| 10 | `svg/belt-empty.svg` | Empty conveyor belt with "empty belt" label or visual cue |

---

## Value Badge (receipt / ticket)

For levels where the result is a number, boolean, or string (not a sushi item). Think of it as a receipt or ticket that pops out.

| # | File | Description |
|---|------|-------------|
| 11 | `svg/receipt.svg` | Receipt/ticket background for displaying a value |
| 12 | `svg/receipt-empty.svg` | Empty receipt with `?` shown before the student solves the level |

**Notes:**
- Styled like a small paper receipt or ticket — slightly torn/wavy top edge, maybe a subtle paper texture.
- The actual value text (number, `true`/`false`, string) will be rendered on top programmatically.
- Current placeholder uses a rounded rect with blue accent (`#89b4fa`).
- Suggestion: cream/white paper color with a subtle border, keeping the blue accent for the value text.
- Bounding box suggestion: ~120 x 70.

---

## Highlight Glow

For items that should be visually called out on success.

| # | File | Description |
|---|------|-------------|
| 13 | `svg/glow.svg` | Green glow effect overlay for highlighted belt items |

**Notes:**
- Radial gradient or soft-edged shape in `#a6e3a1` (Catppuccin green).
- Placed behind a sushi piece to indicate it's the "answer" item.
- Can also be done purely in CSS (current approach) — only create this if you want a richer hand-drawn glow.

---

## Summary

| Category | Count | Files |
|----------|-------|-------|
| Sushi pieces | 6 | `sushi-salmon`, `sushi-tuna`, `sushi-shrimp`, `sushi-eel`, `sushi-squid`, `sushi-default` |
| Plates | 2 | `plate`, `plate-large` |
| Belt | 2 | `belt-track`, `belt-empty` |
| Receipts | 2 | `receipt`, `receipt-empty` |
| Effects | 1 | `glow` (optional, can stay CSS) |
| **Total** | **13** | |

---

## Integration Notes

- **Bouncy sushi:** The plate and sushi piece are separate SVGs so the sushi can have independent CSS transforms (bounce, wobble, pop) while the plate stays still.
- **Belt items:** Each belt slot composites: `plate.svg` (static) + `sushi-{flavor}.svg` (animated on top).
- **Result area:** `plate-large.svg` (static) + `sushi-{flavor}.svg` scaled up, or `receipt.svg` + value text overlay.
- **Color palette:** Follow Catppuccin Mocha — dark backgrounds, pastel accents.
