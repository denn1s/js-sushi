#!/usr/bin/env python3
"""Generate plate SVGs in different colors from the blue template."""

import colorsys
import re
import sys

def hex_to_hsl(hex_color):
    hex_color = hex_color.lstrip('#')
    r, g, b = int(hex_color[0:2], 16) / 255, int(hex_color[2:4], 16) / 255, int(hex_color[4:6], 16) / 255
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    return h * 360, s * 100, l * 100

def hsl_to_hex(h, s, l):
    h, s, l = h / 360, s / 100, l / 100
    r, g, b = colorsys.hls_to_rgb(h, l, s)
    return '#{:02x}{:02x}{:02x}'.format(int(round(r * 255)), int(round(g * 255)), int(round(b * 255)))

# Blue plate base color (rim)
BLUE_BASE = '#2f9996'
blue_h, blue_s, blue_l = hex_to_hsl(BLUE_BASE)

# All colored elements in the blue plate: label -> hex
BLUE_COLORS = {
    'rim':          '#2f9996',
    'rimlight1':    '#93e4dc',
    'rimlight2':    '#8be2d9',
    'rimshadow':    '#1f7676',
    'bottom1':      '#196264',
    'bottom2':      '#126062',
    'highlight1':   '#cbfdfc',
    'highlight2':   '#d1fdfc',
    'highlight3':   '#d3fefc',
    'highlight4':   '#d4fefc',
    'highlight5':   '#d4fcfc',
    'highlight6':   '#d5fdfd',
    'highlight7':   '#d3fdfc',
    'highlight8':   '#d9fdfc',
    'highlight9':   '#d6fdfc',
    'highlight10':  '#d1fdfc',
    'highlight11':  '#d8fdfc',
    'highlight12':  '#d6fdfc',
}

# Compute HSL deltas from base for each element
deltas = {}
for label, hex_color in BLUE_COLORS.items():
    h, s, l = hex_to_hsl(hex_color)
    deltas[label] = (h - blue_h, s - blue_s, l - blue_l)

# Target plates: name -> base hex
PLATES = {
    'green':     '#54A288',
    'gold':      '#EDA340',
    'purple':    '#776570',
}

def remap_color(base_hex, delta):
    base_h, base_s, base_l = hex_to_hsl(base_hex)
    dh, ds, dl = delta
    new_h = (base_h + dh) % 360
    new_s = max(0, min(100, base_s + ds))
    new_l = max(0, min(100, base_l + dl))
    return hsl_to_hex(new_h, new_s, new_l)

# Read template
with open('blue.svg', 'r') as f:
    template = f.read()

for name, base_hex in PLATES.items():
    svg = template
    # Replace each color in the SVG
    for label, blue_hex in BLUE_COLORS.items():
        new_hex = remap_color(base_hex, deltas[label])
        svg = svg.replace(blue_hex, new_hex)

    # Update the docname
    svg = svg.replace('dish.svg', f'{name}.svg')

    out_path = f'{name}.svg'
    with open(out_path, 'w') as f:
        f.write(svg)

    # Print color mapping for verification
    print(f'\n{name} (base: {base_hex}):')
    for label in ['rim', 'rimlight1', 'rimlight2', 'rimshadow', 'bottom1', 'bottom2']:
        new_hex = remap_color(base_hex, deltas[label])
        print(f'  {label}: {new_hex}')

print('\nDone! Generated all plate SVGs.')
