let editorRoot = null
let inputEl = null
let prefixEl = null
let onRunCallback = null
let currentPrefix = ''

const MIN_LINES = 10

export function createEditor(container, onRun) {
  onRunCallback = onRun

  editorRoot = document.createElement('div')
  editorRoot.className = 'custom-editor'
  editorRoot.addEventListener('click', () => {
    if (inputEl) inputEl.focus()
  })
  container.appendChild(editorRoot)

  return editorRoot
}

export function setPreCode(preCode, preCode2) {
  if (!editorRoot) return

  editorRoot.innerHTML = ''

  const codes = [preCode, preCode2].filter(Boolean)
  let lineNum = 1

  for (const text of codes) {
    const line = document.createElement('div')
    line.className = 'editor-line readonly'

    const num = document.createElement('span')
    num.className = 'line-num'
    num.textContent = lineNum

    const code = document.createElement('span')
    code.className = 'line-text'
    code.textContent = text

    line.appendChild(num)
    line.appendChild(code)
    editorRoot.appendChild(line)
    lineNum++
  }

  // Editable line
  const editLine = document.createElement('div')
  editLine.className = 'editor-line editable'

  const num = document.createElement('span')
  num.className = 'line-num'
  num.textContent = lineNum

  prefixEl = document.createElement('span')
  prefixEl.className = 'locked-prefix'

  inputEl = document.createElement('input')
  inputEl.type = 'text'
  inputEl.className = 'code-input'
  inputEl.spellcheck = false
  inputEl.autocomplete = 'off'

  inputEl.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      if (onRunCallback) onRunCallback()
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (onRunCallback) onRunCallback()
    } else if (e.key === 'Escape') {
      inputEl.blur()
    }
  })

  editLine.appendChild(num)
  editLine.appendChild(prefixEl)
  editLine.appendChild(inputEl)
  editorRoot.appendChild(editLine)
  lineNum++

  // Pad to MIN_LINES
  while (lineNum <= MIN_LINES) {
    const empty = document.createElement('div')
    empty.className = 'editor-line empty'

    const emptyNum = document.createElement('span')
    emptyNum.className = 'line-num'
    emptyNum.textContent = lineNum

    empty.appendChild(emptyNum)
    empty.innerHTML += '&nbsp;'
    editorRoot.appendChild(empty)
    lineNum++
  }
}

export function setEditorContent(code, prefix = '') {
  if (!inputEl) return
  currentPrefix = prefix
  prefixEl.textContent = prefix
  inputEl.value = code
}

export function getEditorContent() {
  if (!inputEl) return ''
  return currentPrefix + inputEl.value
}

export function getEditableContent() {
  if (!inputEl) return ''
  return inputEl.value
}

export function focusEditor() {
  if (inputEl) inputEl.focus()
}
