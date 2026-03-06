import { renderBelt, renderPlate, renderEmptyPlate } from '../svg/placeholder.js'

const beltEl = document.getElementById('belt-display')
const plateEl = document.getElementById('plate-display')

export function showBelt(level) {
  beltEl.innerHTML = renderBelt(level.beltBefore, level.beltBeforeLabel || '')
  beltEl.classList.remove('belt-success')

  if (level.plate) {
    plateEl.innerHTML = renderEmptyPlate(level.plate)
    plateEl.classList.remove('hidden')
  } else {
    plateEl.innerHTML = ''
    plateEl.classList.add('hidden')
  }
}

export function showSuccess(level) {
  const highlightIndex = level.plate?.highlightIndex ?? level.highlightIndex
  beltEl.innerHTML = renderBelt(level.beltAfter, level.beltAfterLabel || '', highlightIndex)
  beltEl.classList.add('belt-success')
  beltEl.querySelectorAll('.sushi-item').forEach((el, i) => {
    el.style.animation = `popIn 0.3s ease ${i * 0.08}s both`
  })

  if (level.plate) {
    plateEl.innerHTML = renderPlate(level.plate)
    plateEl.classList.remove('hidden')
  } else {
    plateEl.innerHTML = ''
    plateEl.classList.add('hidden')
  }
}
