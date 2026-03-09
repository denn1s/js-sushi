// Chapter 1: The Empty Belt — Array creation, access, mutation
const chapter1 = [
  {
    title: 'Stock the Belt!',
    subtitle: 'Creating an Array',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      'The sushi belt is empty and customers are waiting! An array is an ordered list of items, and in our bar, the belt is the array. There\'s one salmon on the belt. Add <code>\'tuna\'</code> and <code>\'shrimp\'</code> to complete the lineup!',
    hint: "Add items separated by commas: ['salmon', 'tuna', 'shrimp']",
    preCode: '',
    postCode: '',
    lockedPrefix: 'const belt = ',
    initialCode: "['salmon']",
    placeholder: '',
    answer: "const belt = ['salmon', 'tuna', 'shrimp']",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.belt) &&
        context.belt.length === 3 &&
        context.belt[0] === 'salmon' &&
        context.belt[1] === 'tuna' &&
        context.belt[2] === 'shrimp'
      )
    },
    successMessage: 'You can check if something is an array with Array.isArray(belt) — handy when you\'re not sure what you\'re working with!',
    beltBefore: ['salmon'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
  },
  {
    title: 'Count the Plates',
    subtitle: '.length',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      'The manager wants to know how many dishes are on the belt right now. Every array has a <code>.length</code> property that tells you how many items it holds. Store the length in a variable called <code>count</code>.',
    hint: 'Access the property with belt.length, no parentheses needed.',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const count = ',
    initialCode: '',
    placeholder: '',
    answer: 'const count = belt.length',
    validate: (userCode, context) => {
      return context.count === 3
    },
    successMessage: '.length isn\'t a method — no parentheses needed! It\'s a property. Strings have it too: try \'sushi\'.length in a console.',
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    plate: { type: 'value', value: 3, label: 'count' },
  },
  {
    title: 'Grab One!',
    subtitle: 'Bracket Access',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      'A customer points at the tuna and says "that one, please!" Arrays are zero-indexed, so the first item is at position 0, the second at 1, and so on. Pick the second dish (tuna) from the belt.',
    hint: 'Use square brackets with the index number: belt[1]',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const picked = ',
    initialCode: '',
    placeholder: '',
    answer: 'const picked = belt[1]',
    validate: (userCode, context) => {
      return context.picked === 'tuna'
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    successMessage: 'Fun fact: belt[\'1\'] works too — JS quietly converts the string to a number!',
    plate: { type: 'sushi', value: 'tuna', label: 'picked', highlightIndex: 1 },
  },
  {
    title: 'End of the Line',
    subtitle: '.length - 1',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      'The last dish on the belt is about to fall off! Grab it before it\'s gone. To reach the last item, combine <code>.length</code> with bracket notation. The last index is always <code>length - 1</code>.',
    hint: 'Try combining belt.length with subtraction inside the brackets.',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const last = ',
    initialCode: '',
    placeholder: '',
    answer: 'const last = belt[belt.length - 1]',
    validate: (userCode, context) => {
      return context.last === 'shrimp' && userCode.includes('length')
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    successMessage: 'Modern JS has an easier way: belt.at(-1) grabs the last item. Negative indices count from the end!',
    plate: { type: 'sushi', value: 'shrimp', label: 'last', highlightIndex: 2 },
  },
  {
    title: 'Swap It Out!',
    subtitle: 'Index Assignment',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      "The tuna doesn't look fresh. Time to swap it! You can change any item on the belt by assigning to its index. Replace the second dish with <code>'squid'</code>.",
    hint: "Remember, arrays start counting at 0. What index is the second dish?",
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: "belt[1] = 'squid'",
    validate: (userCode, context) => {
      return context.belt[1] === 'squid'
    },
    successMessage: 'Even though belt was declared with const, you can still change its contents! const only prevents reassigning the variable itself, not mutating the array.',
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'squid', 'shrimp'],
    highlightIndex: 1,
  },
  {
    title: "Today's Specials",
    subtitle: '.join()',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      'The chef wants to write today\'s menu on the board! <code>.join(separator)</code> combines all items into a single string, with the separator between each one. Join the belt into a comma-separated menu string.',
    hint: 'What string goes between each dish? Pass it to .join().',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const menu = ',
    initialCode: '',
    placeholder: '',
    answer: "const menu = belt.join(',')",
    validate: (userCode, context) => {
      return context.menu === 'salmon,tuna,shrimp'
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    successMessage: 'Try .join(\' | \') or .join(\'\') for different effects. With no argument, .join() defaults to commas!',
    plate: { type: 'value', value: 'salmon,tuna,shrimp', label: 'menu' },
  },
]

export default chapter1
