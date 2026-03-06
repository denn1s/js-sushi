import levels from './levels.js'
import { loadProgress } from './progress.js'

const levelTitle = document.getElementById('level-title')
const levelSubtitle = document.getElementById('level-subtitle')
const levelDesc = document.getElementById('level-description')
const levelHint = document.getElementById('level-hint')
const hintBtn = document.getElementById('hint-btn')
const chapterLabel = document.getElementById('chapter-label')
const levelIndicator = document.getElementById('level-indicator')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const levelSelector = document.getElementById('level-selector')
const preCodeEl = document.getElementById('pre-code')
const postCodeEl = document.getElementById('post-code')
const feedbackEl = document.getElementById('feedback')

let onNavigate = null

export function initUI(navigateCallback) {
  onNavigate = navigateCallback

  prevBtn.addEventListener('click', () => {
    const current = getCurrentIndex()
    if (current > 0) onNavigate(levels[current - 1].id)
  })

  nextBtn.addEventListener('click', () => {
    const current = getCurrentIndex()
    if (current < levels.length - 1) onNavigate(levels[current + 1].id)
  })

  hintBtn.addEventListener('click', () => {
    levelHint.classList.toggle('hidden')
  })

  buildLevelSelector()
}

function getCurrentIndex() {
  const id = parseInt(levelIndicator.dataset.levelId)
  return levels.findIndex((l) => l.id === id)
}

function buildLevelSelector() {
  levelSelector.innerHTML = ''
  const progress = loadProgress()
  levels.forEach((level) => {
    const btn = document.createElement('button')
    btn.textContent = level.id
    btn.className = 'level-dot'
    if (progress.completedLevels.includes(level.id)) {
      btn.classList.add('completed')
    }
    btn.addEventListener('click', () => onNavigate(level.id))
    levelSelector.appendChild(btn)
  })
}

export function renderLevel(level) {
  levelTitle.textContent = `${level.id}. ${level.title}`
  levelSubtitle.textContent = level.subtitle || ''
  levelSubtitle.classList.toggle('hidden', !level.subtitle)
  levelDesc.innerHTML = level.description
  levelHint.textContent = level.hint
  levelHint.classList.add('hidden')
  chapterLabel.textContent = `Ch ${level.chapter}: ${level.chapterName}`
  levelIndicator.textContent = `Level ${level.id} of ${levels.length}`
  levelIndicator.dataset.levelId = level.id

  const idx = levels.findIndex((l) => l.id === level.id)
  prevBtn.disabled = idx === 0
  nextBtn.disabled = idx === levels.length - 1

  preCodeEl.textContent = level.preCode || ''
  preCodeEl.classList.toggle('hidden', !level.preCode)
  postCodeEl.textContent = level.postCode || ''
  postCodeEl.classList.toggle('hidden', !level.postCode)

  clearFeedback()
  updateLevelSelector()
}

export function updateLevelSelector() {
  const progress = loadProgress()
  const dots = levelSelector.querySelectorAll('.level-dot')
  dots.forEach((dot, i) => {
    const level = levels[i]
    dot.classList.toggle('completed', progress.completedLevels.includes(level.id))
    dot.classList.toggle('active', level.id === parseInt(levelIndicator.dataset.levelId))
  })
}

export function showFeedback(message, type) {
  feedbackEl.textContent = message
  feedbackEl.className = `feedback ${type}`
  feedbackEl.classList.remove('hidden')

  if (type === 'error') {
    feedbackEl.classList.add('shake')
    setTimeout(() => feedbackEl.classList.remove('shake'), 500)
  }
}

export function clearFeedback() {
  feedbackEl.textContent = ''
  feedbackEl.className = 'feedback hidden'
}
