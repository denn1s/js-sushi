const SUSHI_COLORS = {
  salmon: '#fa8072',
  tuna: '#dc3545',
  shrimp: '#f8a4b8',
  eel: '#8b6914',
  squid: '#dda0dd',
  default: '#94a3b8',
}

const PLATE_COLORS = {
  salmon: 'orange',
  tuna: 'red',
  shrimp: 'pink',
  eel: 'gold',
  squid: 'purple',
  default: 'blue',
}

const SUSHI_ASSETS = new Set(['salmon', 'tuna', 'shrimp', 'eel', 'squid'])

function getSushiKey(item) {
  if (typeof item === 'object' && item.name) {
    return item.name.toLowerCase()
  }
  return String(item)
    .split(' ')[0]
    .replace(/[^a-z]/gi, '')
    .toLowerCase()
}

function getColor(item) {
  const key = getSushiKey(item)
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
  const key = getSushiKey(item)
  const label = getLabel(item)
  const highlightClass = highlighted ? ' highlighted' : ''
  const plateColor = PLATE_COLORS[key] || PLATE_COLORS.default
  const hasSushiAsset = SUSHI_ASSETS.has(key)

  if (hasSushiAsset) {
    return `
      <div class="sushi-item${highlightClass}" data-index="${index}" data-sushi="${key}" style="--delay: ${index * 0.1}s">
        <img class="sushi-plate" src="svg/plates/${plateColor}.svg" alt="" draggable="false">
        <img class="sushi-piece" src="svg/sushi/${key}.svg" alt="" draggable="false">
        <span class="sushi-label">${escapeHtml(label)}</span>
      </div>
    `
  }

  // Fallback for items without SVG assets — colored rect style via inline SVG
  const color = SUSHI_COLORS[key] || SUSHI_COLORS.default
  return `
    <div class="sushi-item${highlightClass}" data-index="${index}" style="--delay: ${index * 0.1}s">
      <img class="sushi-plate" src="svg/plates/${plateColor}.svg" alt="" draggable="false">
      <svg class="sushi-piece sushi-piece-fallback" viewBox="0 0 80 50">
        <rect x="0" y="0" width="80" height="35" rx="8" fill="${color}"/>
        <rect x="5" y="22" width="70" height="14" rx="5" fill="#fefce8" opacity="0.7"/>
      </svg>
      <span class="sushi-label">${escapeHtml(label)}</span>
    </div>
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
      <div class="conveyor">
        <div class="conveyor-back"></div>
        <div class="conveyor-surface"></div>
        <div class="belt-items belt-empty">
          <span class="belt-empty-label">empty belt</span>
        </div>
        <div class="conveyor-front"></div>
        <div class="conveyor-wall"></div>
      </div>
      ${label ? `<span class="belt-label">${escapeHtml(label)}</span>` : ''}
    `
  }

  const sushiItems = items
    .map((item, i) => renderSushiItem(item, 0, i, Array.isArray(highlightIndex) ? highlightIndex.includes(i) : i === highlightIndex))
    .join('')

  return `
    <div class="conveyor">
      <div class="conveyor-back"></div>
      <div class="conveyor-surface"></div>
      <div class="belt-items">
        ${sushiItems}
      </div>
      <div class="conveyor-front"></div>
      <div class="conveyor-wall"></div>
    </div>
    ${label ? `<span class="belt-label">${escapeHtml(label)}</span>` : ''}
  `
}

export function renderEmptyPlate({ type, label }) {
  if (type === 'value') {
    return `
      <div class="plate-item-inner">
        <img class="table-receipt-img" src="svg/paper.svg" alt="" draggable="false">
        <span class="table-question-mark">?</span>
        <span class="table-plate-label">${escapeHtml(label)}</span>
      </div>
    `
  }

  return `
    <div class="plate-item-inner">
      <img class="table-plate-img" src="svg/plates/white.svg" alt="" draggable="false">
      <span class="table-question-mark">?</span>
      <span class="table-plate-label">${escapeHtml(label)}</span>
    </div>
  `
}

export function renderPlate({ type, value, label }) {
  if (type === 'sushi') {
    const key = getSushiKey(value)
    const hasSushiAsset = SUSHI_ASSETS.has(key)
    const sushiImg = hasSushiAsset
      ? `<img class="table-sushi-piece plate-sushi" src="svg/sushi/${key}.svg" alt="" draggable="false">`
      : ''
    return `
      <div class="plate-item-inner">
        <img class="table-plate-img" src="svg/plates/white.svg" alt="" draggable="false">
        ${sushiImg}
        <span class="table-plate-label">${escapeHtml(label)}</span>
      </div>
    `
  }

  // type === 'value' — receipt with value text
  const displayValue = escapeHtml(String(value))
  return `
    <div class="plate-item-inner">
      <img class="table-receipt-img" src="svg/paper.svg" alt="" draggable="false">
      <span class="table-value-text value-badge ${displayValue.length > 1 ? 'multi' : 'single'}">
        ${displayValue.replaceAll(',', ',\n')}
      </span>
      <span class="table-plate-label">${escapeHtml(label.replaceAll(',', ',\n'))}</span>
    </div>
  `
}
