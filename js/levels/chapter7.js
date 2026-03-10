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
    successMessage: 'The salmon landed on the plate! Instead of writing <code>belt[0]</code>, the brackets on the left pulled it out for you. Destructuring is just a shortcut for assigning array positions to variable names.',
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
    successMessage: 'Two dishes on the plates! Each name in the brackets maps to the next position: <code>first</code> gets index 0 (salmon), <code>second</code> gets index 1 (tuna). The remaining dishes stay on the belt untouched.',
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
    successMessage: 'The salmon landed on the plate and the rest went to the lower belt! <code>...lowerBelt</code> swept up everything after the first dish. The rest element must always be last in the pattern: <code>[first, ...rest]</code> works, but <code>[...rest, last]</code> is a syntax error.',
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
    successMessage: 'The tuna ended up on the plate even though it\'s the second dish! That leading comma skipped right past the salmon. You can skip multiple positions with more commas: <code>const [, , third] = arr</code> grabs index 2.',
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
    successMessage: 'The salmon and its price are on the plates! With objects, the variable names must match the property names: <code>{ name }</code> grabs <code>dish.name</code>, <code>{ price }</code> grabs <code>dish.price</code>. Need a different variable name? Use <code>{ name: dishName }</code>.',
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
    successMessage: 'The lunch menu belt shows just the affordable dish names! You chained <code>.filter()</code> to pick the cheap ones, then <code>.map()</code> to extract the names, and used destructuring in both. This is exactly how real-world JavaScript reads.',
    beltAfter: ['tuna', 'eel', 'shrimp'],
    beltAfterLabel: 'lunch menu',
  },
]

export default chapter7
