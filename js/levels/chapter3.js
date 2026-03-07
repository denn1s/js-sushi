// Chapter 3: Searching the Belt — includes, indexOf, find, findIndex, every
const chapter3 = [
  {
    title: 'Is That Tuna?!',
    subtitle: '.includes()',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "A customer peeks at the belt and asks: \"Do you have any tuna today?\" <code>.includes()</code> checks if an item is on the belt and returns <code>true</code> or <code>false</code>. Check if there's tuna on the belt!",
    hint: "Call .includes() on the belt with the dish name you're looking for.",
    lockedPrefix: 'const hasTuna = ',
    initialCode: '',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: "const hasTuna = belt.includes('tuna')",
    validate: (userCode, context) => {
      return context.hasTuna === true && userCode.includes('.includes(')
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    plate: { type: 'value', value: 'true', label: 'hasTuna' },
  },
  {
    title: "Where's the Shrimp?",
    subtitle: '.indexOf()',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "A customer can see the shrimp but can't tell which position it's at. <code>.indexOf()</code> tells you the position of an item on the belt, or <code>-1</code> if it's not there. What position is the shrimp at?",
    hint: "Call .indexOf() on the belt with the dish name you're looking for.",
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const pos = ',
    initialCode: '',
    placeholder: '',
    answer: "const pos = belt.indexOf('shrimp')",
    validate: (userCode, context) => {
      return context.pos === 2 && userCode.includes('.indexOf(')
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    plate: { type: 'value', value: 2, label: 'pos' },
  },
  {
    title: 'Send the Taste-Tester',
    subtitle: '.find() with a Named Function',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "The chef hired a taste-tester who only likes salmon. <code>.find()</code> looks at each dish on the belt and returns the first one that passes a test. You give it a function, and <code>.find()</code> calls that function for you on every dish. We already wrote <code>isSalmon</code> for you. Pass it to <code>.find()</code>, but don't call it yourself! No <code>()</code> after the name.",
    hint: "Put the function name inside .find(), remember, no () after it!",
    preCode: "const belt = ['tuna', 'salmon', 'shrimp', 'salmon']\nconst isSalmon = (dish) => { return dish === 'salmon' }",
    postCode: '',
    lockedPrefix: 'const found = ',
    initialCode: '',
    placeholder: '',
    answer: 'const found = belt.find(isSalmon)',
    validate: (userCode, context) => {
      return context.found === 'salmon' && userCode.includes('.find(') && !userCode.includes('isSalmon(')
    },
    beltBefore: ['tuna', 'salmon', 'shrimp', 'salmon'],
    beltAfter: ['tuna', 'salmon', 'shrimp', 'salmon'],
    plate: { type: 'sushi', value: 'salmon', label: 'found', highlightIndex: 1 },
  },
  {
    title: 'DIY Taste Test',
    subtitle: '.find() with Arrow Functions',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "No taste-tester this time. You'll do it yourself! Instead of creating a separate function, you can write it directly inside <code>.find()</code>. This is called an <strong>arrow function</strong>: <code>(dish) => { return ... }</code>. Each dish passes through your function one at a time. Find the shrimp!",
    hint: "Write the test inline: belt.find((dish) => { return dish === ... })",
    preCode: "const belt = ['tuna', 'salmon', 'shrimp', 'salmon']",
    postCode: '',
    lockedPrefix: 'const found = ',
    initialCode: '',
    placeholder: '',
    answer: "const found = belt.find((dish) => { return dish === 'shrimp' })",
    validate: (userCode, context) => {
      return context.found === 'shrimp' && userCode.includes('=>')
    },
    beltBefore: ['tuna', 'salmon', 'shrimp', 'salmon'],
    beltAfter: ['tuna', 'salmon', 'shrimp', 'salmon'],
    plate: { type: 'sushi', value: 'shrimp', label: 'found', highlightIndex: 2 },
  },
  {
    title: 'Seat Number, Please',
    subtitle: '.findIndex()',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "The waiter doesn't want the eel itself, just its seat number on the belt. <code>.findIndex()</code> works just like <code>.find()</code>, but instead of returning the dish itself, it returns its <strong>position</strong>. Where is the eel?",
    hint: "Same pattern as .find(), but use .findIndex() instead.",
    preCode: "const belt = ['salmon', 'tuna', 'eel', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const pos = ',
    initialCode: '',
    placeholder: '',
    answer: "const pos = belt.findIndex((dish) => { return dish === 'eel' })",
    validate: (userCode, context) => {
      return context.pos === 2 && userCode.includes('.findIndex(')
    },
    beltBefore: ['salmon', 'tuna', 'eel', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'eel', 'shrimp'],
    plate: { type: 'value', value: 2, label: 'pos' },
  },
  {
    title: 'All Salmon? Really?',
    subtitle: '.every()',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "The chef claims every single dish on the belt is salmon. Sounds fishy! <code>.every()</code> checks if <strong>all</strong> items pass a test. It takes an arrow function just like <code>.find()</code>. Verify the chef's claim: are all the dishes salmon?",
    hint: "Same arrow function pattern: belt.every((dish) => { return ... })",
    preCode: "const belt = ['salmon', 'salmon', 'salmon']",
    postCode: '',
    lockedPrefix: 'const allSalmon = ',
    initialCode: '',
    placeholder: '',
    answer: "const allSalmon = belt.every((dish) => { return dish === 'salmon' })",
    validate: (userCode, context) => {
      return context.allSalmon === true && userCode.includes('.every(')
    },
    beltBefore: ['salmon', 'salmon', 'salmon'],
    beltAfter: ['salmon', 'salmon', 'salmon'],
    plate: { type: 'value', value: 'true', label: 'allSalmon' },
  },
]

export default chapter3
