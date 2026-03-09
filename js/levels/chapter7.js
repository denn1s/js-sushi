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
    successMessage: 'Destructuring also works in function parameters! function eat([first]) { } unpacks the array right in the signature.',
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
    successMessage: 'You can set defaults too: const [first = \'empty\', second = \'empty\'] = belt. If the array is too short, the default kicks in!',
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
    successMessage: '...rest must always be the last item in the pattern. const [...all, last] = belt would be a syntax error!',
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
    successMessage: 'You can skip multiple positions: const [, , third] = belt grabs only the third item. But at that point, belt[2] might be clearer!',
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
    preCode: "const belt = [{ name: 'salmon', price: 5 }, { name: 'tuna', price: 3 }]\nconst [dish] = belt",
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
    successMessage: 'You can rename during destructuring: const { name: dishName } = dish puts the value into dishName instead of name!',
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
    successMessage: 'You just chained .filter() and .map() with destructuring — a pattern used daily in professional codebases. You\'ve come a long way!',
    beltAfter: ['tuna', 'eel', 'shrimp'],
    beltAfterLabel: 'lunch menu',
  },
]

export default chapter7
