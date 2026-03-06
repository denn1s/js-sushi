const SUSHI_COLORS = {
  salmon: '#fa8072',
  tuna: '#dc3545',
  shrimp: '#f8a4b8',
  eel: '#8b6914',
  squid: '#dda0dd',
  default: '#94a3b8',
}

function getColor(item) {
  if (typeof item === 'object') {
    return SUSHI_COLORS[item.name] || SUSHI_COLORS.default
  }
  const key = String(item)
    .split(' ')[0]
    .replace(/[^a-z]/gi, '')
    .toLowerCase()
  return SUSHI_COLORS[key] || SUSHI_COLORS.default
}

function getLabel(item) {
  if (typeof item === 'object') {
    const parts = []
    if (item.name) parts.push(item.name)
    if (item.price !== undefined) parts.push('$' + item.price)
    return parts.join(' ') || JSON.stringify(item)
  }
  if (Array.isArray(item)) {
    return '[' + item.join(', ') + ']'
  }
  return String(item)
}

export function renderSushiItem(item, x, index, highlighted = false) {
  const color = getColor(item)
  const label = getLabel(item)
  const y = 50
  const highlightClass = highlighted ? ' highlighted' : ''

  return `
    <g class="sushi-item${highlightClass}" data-index="${index}" style="--delay: ${index * 0.1}s">
      <!-- plate -->
      <ellipse cx="${x + 45}" cy="${y + 50}" rx="42" ry="12" fill="#94a3b8" opacity="0.3"/>
      <!-- sushi piece -->
      <rect x="${x + 10}" y="${y}" width="70" height="40" rx="8" fill="${color}" class="sushi-piece"/>
      <!-- rice base -->
      <rect x="${x + 15}" y="${y + 28}" width="60" height="14" rx="5" fill="#fefce8" opacity="0.7"/>
      <!-- label -->
      <text x="${x + 45}" y="${y + 80}" text-anchor="middle" fill="#cdd6f4"
            font-size="11" font-family="sans-serif">${escapeHtml(label)}</text>
    </g>
  `
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function renderBelt(items, label, highlightIndex) {
  if (!items || items.length === 0) {
    return `
      <svg viewBox="0 0 600 ${label ? 145 : 130}" class="belt-svg">
        <rect x="0" y="45" width="600" height="50" rx="6" fill="#313244" class="belt-track"/>
        <line x1="0" y1="70" x2="600" y2="70" stroke="#45475a" stroke-width="2" stroke-dasharray="8 6" class="belt-line"/>
        <text x="300" y="75" text-anchor="middle" fill="#6c7086" font-size="14" font-family="sans-serif">empty belt</text>
        ${label ? `<text x="300" y="125" text-anchor="middle" fill="#a6adc8" font-size="12" font-family="sans-serif">${escapeHtml(label)}</text>` : ''}
      </svg>
    `
  }

  const itemWidth = 100
  const totalWidth = Math.max(600, items.length * itemWidth + 20)

  const sushiItems = items
    .map((item, i) => renderSushiItem(item, i * itemWidth + 10, i, Array.isArray(highlightIndex) ? highlightIndex.includes(i) : i === highlightIndex))
    .join('')

  return `
    <svg viewBox="0 0 ${totalWidth} 130" class="belt-svg">
      <rect x="0" y="45" width="${totalWidth}" height="50" rx="6" fill="#313244" class="belt-track"/>
      <line x1="0" y1="70" x2="${totalWidth}" y2="70" stroke="#45475a" stroke-width="2" stroke-dasharray="8 6" class="belt-line"/>
      ${sushiItems}
      ${label ? `<text x="${totalWidth / 2}" y="125" text-anchor="middle" fill="#a6adc8" font-size="12" font-family="sans-serif">${escapeHtml(label)}</text>` : ''}
    </svg>
  `
}

export function renderEmptyPlate({ type, label }) {
  if (type === 'value') {
    return `
      <svg viewBox="0 0 180 100" class="plate-svg">
        <!-- empty value badge -->
        <g class="value-badge">
          <rect x="50" y="10" width="80" height="55" rx="12" fill="#6c7086" opacity="0.1"/>
          <rect x="52" y="12" width="76" height="51" rx="10" fill="none" stroke="#6c7086" stroke-width="2" stroke-dasharray="6 4"/>
          <text x="90" y="47" text-anchor="middle" fill="#6c7086" font-size="28" font-family="sans-serif">?</text>
        </g>
        <!-- label -->
        <text x="90" y="88" text-anchor="middle" fill="#6c7086" font-size="11" font-family="sans-serif">${escapeHtml(label)}</text>
      </svg>
    `
  }

  return `
    <svg viewBox="0 0 180 140" class="plate-svg">
      <!-- plate -->
      <ellipse cx="90" cy="105" rx="80" ry="20" fill="#585b70" opacity="0.5"/>
      <ellipse cx="90" cy="100" rx="75" ry="18" fill="#45475a"/>
      <!-- question mark -->
      <text x="90" y="75" text-anchor="middle" fill="#6c7086" font-size="32" font-family="sans-serif">?</text>
      <!-- plate label -->
      <text x="90" y="132" text-anchor="middle" fill="#6c7086" font-size="11" font-family="sans-serif">${escapeHtml(label)}</text>
    </svg>
  `
}

export function renderPlate({ type, value, label }) {
  if (type === 'sushi') {
    const color = SUSHI_COLORS[value] || SUSHI_COLORS.default
    const displayLabel = escapeHtml(String(value))
    return `
      <svg viewBox="0 0 180 140" class="plate-svg">
        <!-- plate -->
        <ellipse cx="90" cy="105" rx="80" ry="20" fill="#585b70" opacity="0.5"/>
        <ellipse cx="90" cy="100" rx="75" ry="18" fill="#45475a"/>
        <!-- sushi piece -->
        <g class="plate-sushi">
          <rect x="45" y="40" width="90" height="50" rx="10" fill="${color}" class="sushi-piece"/>
          <rect x="50" y="70" width="80" height="18" rx="6" fill="#fefce8" opacity="0.7"/>
        </g>
        <!-- item label -->
        <text x="90" y="35" text-anchor="middle" fill="#cdd6f4" font-size="13" font-family="sans-serif">${displayLabel}</text>
        <!-- plate label -->
        <text x="90" y="132" text-anchor="middle" fill="#a6adc8" font-size="11" font-family="sans-serif">${escapeHtml(label)}</text>
      </svg>
    `
  }

  // type === 'value' — no dish plate, just the badge
  const displayValue = escapeHtml(String(value))
  const fontSize = displayValue.length > 6 ? 22 : 28
  const padding = 40
  const width = Math.max(80, displayValue.length * (fontSize * 0.6) + padding)
  const viewW = width + 40
  const cx = viewW / 2
  const x = (viewW - width) / 2
  return `
    <svg viewBox="0 0 ${viewW} 100" class="plate-svg">
      <!-- value badge -->
      <g class="value-badge">
        <rect x="${x}" y="10" width="${width}" height="55" rx="12" fill="#89b4fa" opacity="0.15"/>
        <rect x="${x + 2}" y="12" width="${width - 4}" height="51" rx="10" fill="none" stroke="#89b4fa" stroke-width="2"/>
        <text x="${cx}" y="46" text-anchor="middle" fill="#89b4fa" font-size="${fontSize}" font-weight="bold" font-family="sans-serif">${displayValue}</text>
      </g>
      <!-- label -->
      <text x="${cx}" y="88" text-anchor="middle" fill="#a6adc8" font-size="11" font-family="sans-serif">${escapeHtml(label)}</text>
    </svg>
  `
}
