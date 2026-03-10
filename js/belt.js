import { renderBelt, renderPlate, renderEmptyPlate } from '../svg/placeholder.js'

const beltEl = document.getElementById('belt-display')
const belt2El = document.getElementById('belt-display-2')
const plateEl = document.getElementById('plate-display')
const tableWallEl = document.querySelector('.table-wall')

export function showBelt(level) {
  if (!beltEl) {
    return
  }
  beltEl.innerHTML = renderBelt(level.beltBefore, level.beltBeforeLabel || '')
  beltEl.classList.remove('belt-success')

  if (level.secondBeltBefore || level.secondBeltAfter) {
    belt2El.innerHTML = renderBelt(level.secondBeltBefore || [], level.secondBeltBeforeLabel || level.secondBeltAfterLabel || '')
    belt2El.classList.remove('hidden', 'belt-success')
  } else {
    belt2El.innerHTML = ''
    belt2El.classList.add('hidden')
  }

  if (level.plate) {
    const plates = Array.isArray(level.plate) ? level.plate : [level.plate]
    plateEl.innerHTML = plates.map((p, i) =>
      `<div class="plate-item" style="--plate-delay: ${i * 0.12}s">${renderEmptyPlate(p)}</div>`
    ).join('')
    plateEl.classList.remove('hidden')
    tableWallEl.classList.remove('hidden')
  } else {
    plateEl.innerHTML = ''
    plateEl.classList.add('hidden')
    tableWallEl.classList.add('hidden')
  }
}

export function showSuccess(level) {
  // Collect highlightIndex from plate(s) and level
  let highlightIndex = level.highlightIndex
  if (level.plate) {
    const plates = Array.isArray(level.plate) ? level.plate : [level.plate]
    const indices = plates
    .map(p => p.highlightIndex)
    .filter(i => i !== undefined)
    if (indices.length === 1) {
      highlightIndex = indices[0]
    } else if (indices.length > 1) {
      highlightIndex = indices
    }
  }

  if (beltEl) {
    beltEl.innerHTML = renderBelt(level.beltAfter, level.beltAfterLabel || '', highlightIndex)
    beltEl.classList.add('belt-success')
    beltEl.querySelectorAll('.sushi-item').forEach((el, i) => {
      el.style.animation = `popIn 0.3s ease ${i * 0.08}s both`
    })

    if (level.secondBeltAfter) {
      belt2El.innerHTML = renderBelt(level.secondBeltAfter, level.secondBeltAfterLabel || '', level.secondBeltHighlightIndex)
      belt2El.classList.remove('hidden')
      belt2El.classList.add('belt-success')
      belt2El.querySelectorAll('.sushi-item').forEach((el, i) => {
        el.style.animation = `popIn 0.3s ease ${i * 0.08 + 0.2}s both`
      })
    } else {
      belt2El.innerHTML = ''
      belt2El.classList.add('hidden')
    }
  }

  if (plateEl) {
    if (level.plate) {
      const plates = Array.isArray(level.plate) ? level.plate : [level.plate]
      plateEl.innerHTML = plates.map((p, i) =>
        `<div class="plate-item" style="--plate-delay: ${i * 0.12}s">${renderPlate(p)}</div>`
      ).join('')
      plateEl.classList.remove('hidden')
      tableWallEl.classList.remove('hidden')
    } else {
      plateEl.innerHTML = ''
      plateEl.classList.add('hidden')
      tableWallEl.classList.add('hidden')
    }
  }
}
