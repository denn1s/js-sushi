// Chapter 7: Destructuring — pick, rest, skip, objects, final challenge
const chapter7 = [
  {
    title: 'Grab from the Belt',
    subtitle: 'Array Destructuring',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "Instead of reaching across the belt with <code>belt[0]</code>, you can unpack dishes right into your hands! <strong>Destructuring</strong> lets you assign values from an array into variables. Wrap a variable name in square brackets on the left side of <code>=</code>. Grab the first dish into <code>picked</code>!",
    hint: "The pattern looks like: const [name] = someArray",
    preCode: "const belt = ['salmon', 'tuna', 'shrimp', 'eel']",
    postCode: '',
    placeholder: '',
    answer: 'const [picked] = belt',
    validate: (userCode, context) => {
      return context.picked === 'salmon' && userCode.includes('[')
    },
    beltBefore: ['salmon', 'tuna', 'shrimp', 'eel'],
    beltAfter: ['salmon', 'tuna', 'shrimp', 'eel'],
    successMessage: 'Destructuring works in function parameters too: <code>function process([first, second]) { }</code> unpacks the array right in the signature, saving you from writing <code>first = arr[0]</code> inside the body.',
    plate: { type: 'sushi', value: 'salmon', label: 'picked', highlightIndex: 0 },
  },
  {
    title: 'Grab Two!',
    subtitle: 'Multiple Destructuring',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "One dish wasn't enough! Add more names inside the brackets to unpack more dishes. Each name matches the next position on the belt. Grab the first two dishes into <code>first</code> and <code>second</code>!",
    hint: "Add a second name after a comma inside the brackets: const [a, b] = ...",
    preCode: "const belt = ['salmon', 'tuna', 'shrimp', 'eel']",
    postCode: '',
    placeholder: '',
    answer: 'const [first, second] = belt',
    validate: (userCode, context) => {
      return context.first === 'salmon' && context.second === 'tuna' && userCode.includes('[')
    },
    beltBefore: ['salmon', 'tuna', 'shrimp', 'eel'],
    beltAfter: ['salmon', 'tuna', 'shrimp', 'eel'],
    plate: [
      { type: 'sushi', value: 'salmon', label: 'first', highlightIndex: 0 },
      { type: 'sushi', value: 'tuna', label: 'second', highlightIndex: 1 },
    ],
    successMessage: 'Destructuring supports default values: <code>const [a = 0, b = 0] = arr</code>. If the array has fewer items than variables, the defaults kick in instead of giving you <code>undefined</code>.',
  },
  {
    title: 'Leftovers Bag',
    subtitle: '...rest Syntax',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "You grabbed one dish, but what about the leftovers? The <code>...rest</code> syntax collects everything that's left into a new array, like sweeping the remaining dishes into a takeout bag. Grab the first dish into <code>picked</code> and collect the leftovers into <code>lowerBelt</code>!",
    hint: "Combine destructuring with the spread operator: const [a, ...b] = someArray",
    preCode: "const belt = ['salmon', 'tuna', 'shrimp', 'eel']",
    postCode: '',
    placeholder: '',
    answer: 'const [picked, ...lowerBelt] = belt',
    validate: (userCode, context) => {
      return (
        context.picked === 'salmon' &&
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt.length === 3 &&
        context.lowerBelt[0] === 'tuna' &&
        userCode.includes('...')
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp', 'eel'],
    beltAfter: ['salmon', 'tuna', 'shrimp', 'eel'],
    plate: { type: 'sushi', value: 'salmon', label: 'picked', highlightIndex: 0 },
    successMessage: 'The rest element (<code>...name</code>) must always come last in the pattern. <code>const [...all, last] = arr</code> is a syntax error. If you need the last element separately, use <code>.at(-1)</code> or <code>.slice(-1)</code>.',
    secondBeltAfter: ['tuna', 'shrimp', 'eel'],
    secondBeltAfterLabel: 'lowerBelt',
  },
  {
    title: 'Skip the Salmon',
    subtitle: 'Skipping Positions',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "You don't want the salmon today, you're in the mood for tuna! Use an empty space before the comma to skip a position. Grab only the second dish into <code>second</code>.",
    hint: "Leave the first spot empty. Just a comma tells JS to skip that position.",
    preCode: "const belt = ['salmon', 'tuna', 'shrimp', 'eel']",
    postCode: '',
    placeholder: '',
    answer: 'const [, second] = belt',
    validate: (userCode, context) => {
      return context.second === 'tuna' && userCode.includes(',')
    },
    beltBefore: ['salmon', 'tuna', 'shrimp', 'eel'],
    beltAfter: ['salmon', 'tuna', 'shrimp', 'eel'],
    successMessage: 'You can skip multiple positions with extra commas: <code>const [, , third] = arr</code> grabs only index 2. For deeply nested skipping, bracket access like <code>arr[5]</code> is usually more readable.',
    plate: { type: 'sushi', value: 'tuna', label: 'second', highlightIndex: 1 },
  },
  {
    title: "What's Inside?",
    subtitle: 'Object Destructuring',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "We grabbed a dish from the belt, but it's an <strong>object</strong> with properties. Objects use curly braces <code>{ }</code> for destructuring, and the variable names must match the property names. Pull out <code>name</code> and <code>price</code> from <code>dish</code>!",
    hint: "Use curly braces instead of square brackets on the left side of =.",
    preCode: "const belt = [{ name: 'salmon', price: 5 }, { name: 'tuna', price: 3 }]",
    preCode2: "const [dish] = belt",
    postCode: '',
    placeholder: '',
    answer: 'const { name, price } = dish',
    validate: (userCode, context) => {
      return context.name === 'salmon' && context.price === 5 && userCode.includes('{')
    },
    beltBefore: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
    ],
    beltAfter: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
    ],
    plate: [
      { type: 'sushi', value: 'salmon', label: 'name', highlightIndex: 0 },
      { type: 'value', value: 5, label: 'price' },
    ],
    successMessage: 'Renaming during destructuring avoids naming conflicts: <code>const { name: dishName } = obj</code> creates a variable called <code>dishName</code> holding the value of <code>obj.name</code>. Very useful with nested data.',
  },
  {
    title: 'The Lunch Menu',
    subtitle: 'Final Challenge',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "Time to put it all together! The chef needs a list of affordable dish <strong>names</strong> for the lunch menu. Filter the belt to keep only dishes that cost less than <code>5</code>, then map to extract just the names. Use destructuring in both callbacks!",
    hint: "Chain .filter() and .map(). Destructure { price } in filter, and { name } in map.",
    preCode: "const belt = [\n  { name: 'salmon', price: 5 },\n  { name: 'tuna', price: 3 },\n  { name: 'eel', price: 4 },\n  { name: 'shrimp', price: 2 }\n]",
    postCode: '',
    lockedPrefix: 'const menu = ',
    initialCode: '',
    placeholder: '',
    answer: "const menu = belt.filter(({ price }) => price < 5).map(({ name }) => name)",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.menu) &&
        context.menu.length === 3 &&
        context.menu[0] === 'tuna' &&
        context.menu[1] === 'eel' &&
        context.menu[2] === 'shrimp' &&
        userCode.includes('.filter') &&
        userCode.includes('.map')
      )
    },
    beltBefore: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
      { name: 'eel', price: 4 },
      { name: 'shrimp', price: 2 },
    ],
    successMessage: 'Chaining <code>.filter().map()</code> with destructuring in the callbacks is a pattern you\'ll see daily in production code. It\'s concise, readable, and avoids intermediate variables. Well done!',
    beltAfter: ['tuna', 'eel', 'shrimp'],
    beltAfterLabel: 'lunch menu',
  },
]

export default chapter7
