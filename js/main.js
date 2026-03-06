import levels from './levels.js'
import { loadProgress, setCurrentLevel, markCompleted } from './progress.js'
import { executeLevel } from './engine.js'
import { createEditor, setEditorContent, getEditorContent, focusEditor } from './editor.js'
import { showBelt, showSuccess } from './belt.js'
import { initUI, renderLevel, showFeedback, updateLevelSelector } from './ui.js'

let currentLevel = null

function navigateToLevel(id) {
  const level = levels.find((l) => l.id === id)
  if (!level) return

  currentLevel = level
  setCurrentLevel(id)
  renderLevel(level)
  showBelt(level)
  setEditorContent(level.initialCode || '', level.lockedPrefix || '')
  focusEditor()
}

function runCode() {
  if (!currentLevel) return

  const userCode = getEditorContent().trim()
  if (!userCode) {
    showFeedback('Type some code first!', 'error')
    return
  }

  const result = executeLevel(currentLevel, userCode)

  if (result.success) {
    showFeedback('Correct! Great job!', 'success')
    showSuccess(currentLevel)
    const progress = markCompleted(currentLevel.id, userCode)
    updateLevelSelector()

    setTimeout(() => {
      const idx = levels.findIndex((l) => l.id === currentLevel.id)
      if (idx < levels.length - 1) {
        const nextBtn = document.getElementById('next-btn')
        nextBtn.classList.add('pulse')
        setTimeout(() => nextBtn.classList.remove('pulse'), 2000)
      }
    }, 800)
  } else {
    showFeedback(result.error || 'Not quite — try again!', 'error')
  }
}

function init() {
  const editorContainer = document.getElementById('editor-container')
  createEditor(editorContainer, runCode)

  document.getElementById('run-btn').addEventListener('click', runCode)

  initUI(navigateToLevel)

  const progress = loadProgress()
  navigateToLevel(progress.currentLevel || 1)
}

init()
