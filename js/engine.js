const BLOCKED_PATTERNS = [
  /;/,
  /alert\s*\(/,
  /confirm\s*\(/,
  /prompt\s*\(/,
  /eval\s*\(/,
  /document\./,
  /window\./,
  /\bwhile\b/,
  /\bfor\b/,
  /fetch\s*\(/,
  /XMLHttpRequest/,
  /\bimport\b/,
  /\brequire\b/,
]

const BLOCKED_MESSAGES = {
  ';': 'No semicolons needed! This game uses single expressions.',
  while: 'No loops needed — use array methods instead!',
  for: 'No loops needed — use array methods instead!',
  eval: 'eval() is not allowed.',
  'document.': 'DOM access is not allowed in this sandbox.',
  'window.': 'Window access is not allowed in this sandbox.',
}

export function sanitize(code) {
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(code)) {
      const match = pattern.source.replace(/\\[sb()+*?]/g, '').replace(/\\/g, '')
      const message = BLOCKED_MESSAGES[match] || `"${match}" is not allowed here.`
      return { ok: false, message }
    }
  }
  return { ok: true }
}

export async function executeLevel(level, userCode) {
  const check = sanitize(userCode)
  if (!check.ok) {
    return { success: false, error: check.message }
  }

  const fullCode = [level.preCode, userCode, level.postCode].filter(Boolean).join('\n')

  try {
    let context = {}

    if (level.async) {
      const wrapped = `
        return (async () => {
          ${fullCode}
          return { ${extractVarNames(level, userCode).join(', ')} }
        })()
      `
      const fn = new Function(wrapped)
      const timeoutMs = 3000
      context = await Promise.race([
        fn(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timed out — your code took too long.')), timeoutMs),
        ),
      ])
    } else {
      const wrapped = `
        ${fullCode}
        return { ${extractVarNames(level, userCode).join(', ')} }
      `
      const fn = new Function(wrapped)
      context = fn()
    }

    const passed = level.validate(userCode, context)
    return {
      success: passed,
      context,
      error: passed ? null : 'Not quite — check the expected result and try again.',
    }
  } catch (err) {
    return { success: false, error: err.message }
  }
}

function extractVarNames(level, userCode) {
  const allCode = [level.preCode, userCode, level.postCode].filter(Boolean).join('\n')
  const names = new Set()

  const constLetVar = /(?:const|let|var)\s+(?:\[([^\]]+)\]|(\w+))/g
  let match
  while ((match = constLetVar.exec(allCode)) !== null) {
    if (match[1]) {
      // destructuring: const [a, b, ...rest] = ...
      match[1].split(',').forEach((part) => {
        const name = part.replace(/\.\.\./g, '').trim()
        if (name) names.add(name)
      })
    } else if (match[2]) {
      names.add(match[2])
    }
  }

  // Also grab top-level assignments like `belt[0] = ...` — we need the array name
  const assignments = /^(\w+)\[/gm
  while ((match = assignments.exec(allCode)) !== null) {
    names.add(match[1])
  }

  // Also grab standalone method calls like `belt.sort()`
  const methodCalls = /^(\w+)\.\w+\(/gm
  while ((match = methodCalls.exec(allCode)) !== null) {
    names.add(match[1])
  }

  return [...names]
}
