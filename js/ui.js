import levels from './levels/index.js'
import { loadProgress } from './progress.js'

const levelTitle = document.getElementById('level-title')
const levelSubtitle = document.getElementById('level-subtitle')
const levelDesc = document.getElementById('level-description')
const hintBtn = document.getElementById('hint-btn')
const hintModal = document.getElementById('hint-modal')
const hintModalOverlay = document.getElementById('hint-modal-overlay')
const levelHint = document.getElementById('level-hint')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const currentLevelEl = document.getElementById('current-level')
const totalLevelsEl = document.getElementById('total-levels')
const levelDropdown = document.getElementById('level-dropdown')
const levelModal = document.getElementById('level-modal')
const levelModalOverlay = document.getElementById('level-modal-overlay')
const levelGrid = document.getElementById('level-grid')

let onNavigate = null
let currentLevelId = 1

export function initUI(navigateCallback) {
  onNavigate = navigateCallback

  totalLevelsEl.textContent = levels.length

  prevBtn.addEventListener('click', () => {
    const current = getCurrentIndex()
    if (current > 0) onNavigate(levels[current - 1].id)
  })

  nextBtn.addEventListener('click', () => {
    const current = getCurrentIndex()
    if (current < levels.length - 1) onNavigate(levels[current + 1].id)
  })

  levelDropdown.addEventListener('click', () => {
    const isOpen = !levelModal.classList.contains('hidden')
    if (isOpen) {
      closeModal()
    } else {
      levelModal.classList.remove('hidden')
      levelModalOverlay.classList.remove('hidden')
    }
  })

  levelModalOverlay.addEventListener('click', closeModal)

  hintBtn.addEventListener('click', () => {
    const isOpen = !hintModal.classList.contains('hidden')
    if (isOpen) {
      closeHint()
    } else {
      hintModal.classList.remove('hidden')
      hintModalOverlay.classList.remove('hidden')
    }
  })

  hintModalOverlay.addEventListener('click', closeHint)

  buildLevelSelector()
}

function closeModal() {
  levelModal.classList.add('hidden')
  levelModalOverlay.classList.add('hidden')
}

function closeHint() {
  hintModal.classList.add('hidden')
  hintModalOverlay.classList.add('hidden')
}

function getCurrentIndex() {
  return levels.findIndex((l) => l.id === currentLevelId)
}

function buildLevelSelector() {
  levelGrid.innerHTML = ''
  const progress = loadProgress()
  levels.forEach((level) => {
    const btn = document.createElement('button')
    btn.textContent = level.id
    btn.className = 'level-dot'
    if (progress.completedLevels.includes(level.id)) {
      btn.classList.add('completed')
    }
    btn.addEventListener('click', () => {
      onNavigate(level.id)
      closeModal()
    })
    levelGrid.appendChild(btn)
  })
}

export function renderLevel(level) {
  currentLevelId = level.id

  levelTitle.textContent = `${level.id}. ${level.title}`
  levelSubtitle.textContent = level.subtitle || ''
  levelSubtitle.classList.toggle('hidden', !level.subtitle)
  levelDesc.innerHTML = level.description
  levelHint.textContent = level.hint || ''
  closeHint()
  currentLevelEl.textContent = level.id

  const idx = levels.findIndex((l) => l.id === level.id)
  prevBtn.disabled = idx === 0
  nextBtn.disabled = idx === levels.length - 1

  clearFeedback()
  updateLevelSelector()
}

export function updateLevelSelector() {
  const progress = loadProgress()
  const dots = levelGrid.querySelectorAll('.level-dot')
  dots.forEach((dot, i) => {
    const level = levels[i]
    dot.classList.toggle('completed', progress.completedLevels.includes(level.id))
    dot.classList.toggle('active', level.id === currentLevelId)
  })
}

export function showFeedback(message, type) {
  // TODO: wire feedback element when added to new UI
  console.log(`[${type}] ${message}`)
}

export function clearFeedback() {
  // TODO: wire feedback element when added to new UI
}
