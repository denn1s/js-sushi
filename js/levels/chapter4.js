// Chapter 4: Transforming the Belt — filter, map, reduce, objects
const chapter4 = [
  {
    title: 'Picky Eater',
    subtitle: '.filter()',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "A picky customer only eats salmon and refuses everything else. <code>.filter()</code> creates a <strong>new array</strong> with only the dishes that pass a test. It takes an arrow function just like <code>.find()</code> and <code>.every()</code>. Keep only the salmon. The filtered dishes land on the lower belt!",
    hint: "Same arrow function pattern: upperBelt.filter((dish) => { return ... })",
    preCode: "const upperBelt = ['salmon', 'tuna', 'salmon', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: "const lowerBelt = upperBelt.filter((dish) => { return dish === 'salmon' })",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt.length === 2 &&
        context.lowerBelt.every((d) => d === 'salmon') &&
        userCode.includes('.filter(')
      )
    },
    beltBefore: ['salmon', 'tuna', 'salmon', 'shrimp'],
    beltBeforeLabel: 'upper belt',
    beltAfter: ['salmon', 'tuna', 'salmon', 'shrimp'],
    beltAfterLabel: 'upper belt',
    successMessage: '.filter() always returns a new array, even if nothing passes the test — you just get an empty array []!',
    secondBeltAfter: ['salmon', 'salmon'],
    secondBeltAfterLabel: 'lower belt',
  },
  {
    title: 'Wasabi Everything!',
    subtitle: '.map()',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "A customer wants wasabi on every single dish. Bold choice! <code>.map()</code> transforms every item and puts the results on a <strong>new array</strong>. Your arrow function receives each dish and returns the transformed version. Add the <code>wasabi</code> topping to every dish!",
    hint: "Return the dish combined with the topping: (dish) => { return dish + wasabi }",
    preCode: "const upperBelt = ['salmon', 'tuna']\nconst wasabi = ' + wasabi'",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: "const lowerBelt = upperBelt.map((dish) => { return dish + wasabi })",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt[0] === 'salmon + wasabi' &&
        context.lowerBelt[1] === 'tuna + wasabi' &&
        userCode.includes('.map(')
      )
    },
    beltBefore: ['salmon', 'tuna'],
    beltBeforeLabel: 'upper belt',
    beltAfter: ['salmon', 'tuna'],
    beltAfterLabel: 'upper belt',
    successMessage: '.map() always returns an array with the same length as the original. Need fewer items? Combine it with .filter()!',
    secondBeltAfter: ['salmon + wasabi', 'tuna + wasabi'],
    secondBeltAfterLabel: 'lower belt',
  },
  {
    title: 'Build the Menu',
    subtitle: '.reduce() with a Named Function',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "The chef wants to combine all dishes into one menu string for the sign out front. <code>.reduce()</code> combines all items into a single value. Your function receives <strong>two</strong> parameters: the result built so far, and the current dish. We wrote <code>buildMenu</code> for you. Pass it to <code>.reduce()</code>!",
    hint: "Same as .find(): pass the function by name, no () after it!",
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']\nconst buildMenu = (menu, dish) => { return menu + ', ' + dish }",
    postCode: '',
    lockedPrefix: 'const menu = ',
    initialCode: '',
    placeholder: '',
    answer: 'const menu = belt.reduce(buildMenu)',
    validate: (userCode, context) => {
      return context.menu === 'salmon, tuna, shrimp' && userCode.includes('.reduce(') && !userCode.includes('buildMenu(')
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    successMessage: 'Without a starting value, .reduce() uses the first item as the initial accumulator and starts from the second item!',
    plate: { type: 'value', value: 'salmon, tuna, shrimp', label: 'menu' },
  },
  {
    title: 'Head Count',
    subtitle: '.reduce() with Arrow Functions',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "The manager needs a head count of how many dishes are on the belt. Write the reduce function yourself! Your function receives <code>(count, dish)</code>. Ignore the dish and just add <code>1</code> to the count each time. Start the count at <code>0</code> by passing it as the second argument to <code>.reduce()</code>.",
    hint: "The starting value goes after the function: belt.reduce(..., 0)",
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const total = ',
    initialCode: '',
    placeholder: '',
    answer: "const total = belt.reduce((count, dish) => { return count + 1 }, 0)",
    validate: (userCode, context) => {
      return context.total === 3 && userCode.includes('.reduce(') && userCode.includes('=>')
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    successMessage: 'You could count with belt.length, but .reduce() shines for conditional counting — like counting only the salmon!',
    plate: { type: 'value', value: 3, label: 'total' },
  },
  {
    title: 'Check the Price Tag',
    subtitle: 'Object Dot Notation',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "The dishes now have price tags! So far every dish has been a simple string, but a dish can hold more info. An <strong>object</strong> uses <code>{ }</code> to store multiple values. Each value has a name. Use <strong>dot notation</strong> to read it: <code>dish.name</code> or <code>dish.price</code>. What's the price of the first dish?",
    hint: "Access the property with a dot: belt[0].price",
    preCode: "const belt = [{ name: 'salmon', price: 5 }, { name: 'tuna', price: 3 }]",
    postCode: '',
    lockedPrefix: 'const price = ',
    initialCode: '',
    placeholder: '',
    answer: 'const price = belt[0].price',
    validate: (userCode, context) => {
      return context.price === 5 && userCode.includes('.price')
    },
    beltBefore: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
    ],
    beltAfter: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
    ],
    successMessage: 'You can also use bracket notation: belt[0][\'price\']. This is useful when the property name is stored in a variable!',
    plate: { type: 'value', value: 5, label: 'price' },
  },
  {
    title: 'Budget Bites',
    subtitle: '.filter() with Objects',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "A student on a budget only wants the cheap stuff! The belt has dishes with prices. Use <code>.filter()</code> to keep only the dishes that cost less than <code>4</code>. Your arrow function receives each <code>dish</code> object and can check <code>dish.price</code>.",
    hint: "Return whether the dish's price is less than 4: dish.price < 4",
    preCode: "const upperBelt = [\n  { name: 'salmon', price: 5 },\n  { name: 'tuna', price: 3 },\n  { name: 'eel', price: 4 },\n  { name: 'shrimp', price: 2 }\n]",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: "const lowerBelt = upperBelt.filter((dish) => { return dish.price < 4 })",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt.length === 2 &&
        context.lowerBelt[0].name === 'tuna' &&
        context.lowerBelt[1].name === 'shrimp' &&
        userCode.includes('.filter(')
      )
    },
    beltBefore: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
      { name: 'eel', price: 4 },
      { name: 'shrimp', price: 2 },
    ],
    beltBeforeLabel: 'upper belt',
    beltAfter: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
      { name: 'eel', price: 4 },
      { name: 'shrimp', price: 2 },
    ],
    beltAfterLabel: 'upper belt',
    secondBeltAfter: [
      { name: 'tuna', price: 3 },
      { name: 'shrimp', price: 2 },
    ],
    successMessage: '.filter() is great for search features — you could filter by name, price, or any combination of properties!',
    secondBeltAfterLabel: 'lower belt',
  },
  {
    title: 'Names Only, Please',
    subtitle: '.map() with Objects',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "The waiter just needs a list of dish names for the order ticket, not the full objects with prices. Use <code>.map()</code> to pull out the <code>name</code> from each dish. Objects go in, strings come out!",
    hint: "Your function receives a dish object. Return just dish.name",
    preCode: "const upperBelt = [\n  { name: 'salmon', price: 5 },\n  { name: 'tuna', price: 3 },\n  { name: 'shrimp', price: 2 }\n]",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: "const lowerBelt = upperBelt.map((dish) => { return dish.name })",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt.length === 3 &&
        context.lowerBelt[0] === 'salmon' &&
        context.lowerBelt[1] === 'tuna' &&
        context.lowerBelt[2] === 'shrimp' &&
        userCode.includes('.map(')
      )
    },
    beltBefore: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
      { name: 'shrimp', price: 2 },
    ],
    beltBeforeLabel: 'upper belt',
    beltAfter: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
      { name: 'shrimp', price: 2 },
    ],
    beltAfterLabel: 'upper belt',
    successMessage: 'Extracting one property from each object is called "plucking" — you\'ll use this pattern a lot with API data!',
    secondBeltAfter: ['salmon', 'tuna', 'shrimp'],
    secondBeltAfterLabel: 'lower belt',
  },
]

export default chapter4
