import { basicSetup } from '@codemirror/basic-setup'
import { keymap, EditorView, Decoration } from '@codemirror/view'
import { EditorState, EditorSelection, StateField, StateEffect } from '@codemirror/state'
import { javascript } from '@codemirror/lang-javascript'
import { autocompletion } from '@codemirror/autocomplete'

let editorView = null
let onRunCallback = null
let lockedLen = 0

const theme = EditorView.theme({
  '&': {
    fontSize: '15px',
    backgroundColor: '#1e1e2e',
    borderRadius: '8px',
    border: '1px solid #45475a',
  },
  '.cm-content': {
    caretColor: '#f5e0dc',
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    padding: '12px 0',
  },
  '.cm-gutters': {
    backgroundColor: '#1e1e2e',
    color: '#6c7086',
    border: 'none',
  },
  '.cm-activeLine': {
    backgroundColor: '#313244',
  },
  '.cm-selectionBackground': {
    backgroundColor: '#45475a !important',
  },
  '&.cm-focused .cm-cursor': {
    borderLeftColor: '#f5e0dc',
  },
  '&.cm-focused': {
    outline: 'none',
  },
  '.cm-locked-prefix': {
    color: '#6c7086',
  },
})

const runKeymap = keymap.of([
  {
    key: 'Ctrl-Enter',
    run: () => {
      if (onRunCallback) onRunCallback()
      return true
    },
  },
  {
    key: 'Cmd-Enter',
    run: () => {
      if (onRunCallback) onRunCallback()
      return true
    },
  },
])

const blockEnter = keymap.of([
  { key: 'Enter', run: () => true },
  { key: 'Shift-Enter', run: () => true },
])

const prefixDeco = Decoration.mark({ class: 'cm-locked-prefix' })

const prefixDecoField = StateField.define({
  create(state) {
    if (lockedLen > 0) {
      return Decoration.set([prefixDeco.range(0, lockedLen)])
    }
    return Decoration.none
  },
  update(decos, tr) {
    if (lockedLen > 0) {
      return Decoration.set([prefixDeco.range(0, lockedLen)])
    }
    return Decoration.none
  },
  provide: (f) => EditorView.decorations.from(f),
})

function lockFilter() {
  return EditorState.changeFilter.of((tr) => {
    if (lockedLen === 0) return true
    let dominated = true
    tr.changes.iterChangedRanges((fromA, toA) => {
      if (fromA < lockedLen) dominated = false
    })
    return dominated
  })
}

function lockCursor() {
  return EditorState.transactionFilter.of((tr) => {
    if (lockedLen === 0) return tr
    const sel = tr.newSelection
    let needsFix = false
    for (const range of sel.ranges) {
      if (range.from < lockedLen || range.to < lockedLen) {
        needsFix = true
        break
      }
    }
    if (!needsFix) return tr
    const clamped = sel.ranges.map((r) => {
      const from = Math.max(r.from, lockedLen)
      const to = Math.max(r.to, lockedLen)
      return EditorSelection.range(from, to)
    })
    return [tr, { selection: EditorSelection.create(clamped) }]
  })
}

export function createEditor(container, onRun) {
  onRunCallback = onRun

  if (editorView) {
    editorView.destroy()
  }

  editorView = new EditorView({
    parent: container,
    state: EditorState.create({
      doc: '',
      extensions: [
        basicSetup,
        javascript(),
        autocompletion({ override: [() => null], activateOnTyping: false }),
        theme,
        runKeymap,
        blockEnter,
        prefixDecoField,
        lockFilter(),
        lockCursor(),
        EditorView.lineWrapping,
      ],
    }),
  })

  return editorView
}

export function setEditorContent(code, prefix = '') {
  if (!editorView) return
  lockedLen = 0 // temporarily unlock so the change goes through
  const full = prefix + code
  const spec = {
    changes: { from: 0, to: editorView.state.doc.length, insert: full },
  }
  if (prefix.length > 0) {
    spec.selection = { anchor: full.length }
  }
  editorView.dispatch(spec)
  lockedLen = prefix.length // now lock
}

export function getEditorContent() {
  if (!editorView) return ''
  return editorView.state.doc.toString()
}

export function getEditableContent() {
  if (!editorView) return ''
  return editorView.state.doc.toString().slice(lockedLen)
}

export function focusEditor() {
  if (editorView) editorView.focus()
}
