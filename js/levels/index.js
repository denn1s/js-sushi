import chapter1 from './chapter1.js'
import chapter2 from './chapter2.js'
import chapter3 from './chapter3.js'
import chapter4 from './chapter4.js'
import chapter5 from './chapter5.js'
import chapter6 from './chapter6.js'
import chapter7 from './chapter7.js'

const levels = [
  ...chapter1,
  ...chapter2,
  ...chapter3,
  ...chapter4,
  ...chapter5,
  ...chapter6,
  ...chapter7,
]

levels.forEach((level, i) => { level.id = i + 1 })

export default levels
