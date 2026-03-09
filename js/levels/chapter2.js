// Chapter 2: Adding & Removing — push, pop, unshift, shift, splice, slice
const chapter2 = [
  {
    title: "Chef's New Plate",
    subtitle: '.push()',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "The chef just finished a fresh eel roll! <code>.push()</code> adds an item to the end of the array, like placing a new dish at the end of the belt. Push <code>'eel'</code> onto the belt.",
    hint: 'Call .push() on the belt array with the dish name inside the parentheses.',
    preCode: "const belt = ['salmon', 'tuna']",
    postCode: '',
    placeholder: '',
    answer: "belt.push('eel')",
    validate: (userCode, context) => {
      return context.belt.length === 3 && context.belt[2] === 'eel'
    },
    successMessage: '<code>.push()</code> returns the new length of the array, not the array itself. This surprises many beginners: <code>const x = arr.push("hi")</code> sets <code>x</code> to a number, not an array.',
    beltBefore: ['salmon', 'tuna'],
    beltAfter: ['salmon', 'tuna', 'eel'],
    highlightIndex: 2,
  },
  {
    title: 'Last Call!',
    subtitle: '.pop()',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "A hungry customer grabs the last dish off the belt! <code>.pop()</code> removes the last item from the array and returns it. Pop the last dish and store it in <code>picked</code>.",
    hint: 'Call .pop() on the belt. It both removes and returns the item.',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const picked = ',
    initialCode: '',
    placeholder: '',
    answer: 'const picked = belt.pop()',
    validate: (userCode, context) => {
      return context.picked === 'shrimp' && context.belt.length === 2
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna'],
    successMessage: 'Together, <code>.push()</code> and <code>.pop()</code> turn any array into a stack: last in, first out. Stacks are a fundamental data structure used in undo systems, browser history, and JS call stacks.',
    plate: { type: 'sushi', value: 'shrimp', label: 'picked' },
  },
  {
    title: 'VIP Treatment',
    subtitle: '.unshift()',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "A VIP guest just arrived and wants their salmon served first! <code>.unshift()</code> adds an item to the beginning of the array. Add <code>'salmon'</code> to the front of the belt.",
    hint: 'It works just like .push(), but for the front of the array.',
    preCode: "const belt = ['tuna', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: "belt.unshift('salmon')",
    validate: (userCode, context) => {
      return context.belt[0] === 'salmon' && context.belt.length === 3
    },
    successMessage: '<code>.unshift()</code> returns the new length, just like <code>.push()</code>. The name comes from <code>.shift()</code>: since shift removes from the front, unshift "undoes" that by adding to the front.',
    beltBefore: ['tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    highlightIndex: 0,
  },
  {
    title: 'First Come, First Served',
    subtitle: '.shift()',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "The first customer in line gets served! <code>.shift()</code> removes the first item from the array and returns it. Shift the first dish off the belt and store it in <code>picked</code>.",
    hint: 'It works just like .pop(), but for the front of the array.',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const picked = ',
    initialCode: '',
    placeholder: '',
    answer: 'const picked = belt.shift()',
    validate: (userCode, context) => {
      return context.picked === 'salmon' && context.belt.length === 2
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['tuna', 'shrimp'],
    successMessage: '<code>.shift()</code> and <code>.unshift()</code> move every remaining element to update their indices, making them slower than <code>.push()</code> and <code>.pop()</code>. For small arrays it won\'t matter, but it adds up at scale.',
    plate: { type: 'sushi', value: 'salmon', label: 'picked' },
  },
  {
    title: 'Pluck from the Belt',
    subtitle: '.splice() — remove',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "A customer spotted the shrimp in the middle and wants it! <code>.splice(start, count)</code> removes <code>count</code> items starting at index <code>start</code> and returns them as a new array. Remove the shrimp at index 2. It lands on the lower belt!",
    hint: 'The first argument is where to start, the second is how many to remove.',
    preCode: "const upperBelt = ['salmon', 'tuna', 'shrimp', 'eel']",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: 'const lowerBelt = upperBelt.splice(2, 1)',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt[0] === 'shrimp' &&
        context.upperBelt.length === 3 &&
        context.upperBelt[2] === 'eel'
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp', 'eel'],
    beltBeforeLabel: 'upper belt',
    beltAfter: ['salmon', 'tuna', 'eel'],
    beltAfterLabel: 'upper belt',
    successMessage: '<code>.splice()</code> always returns an array of removed items, even if you only removed one. Expect <code>[item]</code>, not <code>item</code>. This is consistent behavior, but watch out when you want a single value.',
    secondBeltAfter: ['shrimp'],
    secondBeltAfterLabel: 'lower belt',
  },
  {
    title: 'Double Takeout',
    subtitle: '.splice() — remove many',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "Two customers order at once! Move the tuna and shrimp to the lower belt. That's 2 dishes starting at index 1.",
    hint: 'Change the second argument to remove more than one item.',
    preCode: "const upperBelt = ['salmon', 'tuna', 'shrimp', 'eel']",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: 'const lowerBelt = upperBelt.splice(1, 2)',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt.length === 2 &&
        context.lowerBelt[0] === 'tuna' &&
        context.lowerBelt[1] === 'shrimp' &&
        context.upperBelt.length === 2
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp', 'eel'],
    beltBeforeLabel: 'upper belt',
    beltAfter: ['salmon', 'eel'],
    beltAfterLabel: 'upper belt',
    successMessage: 'Omitting the second argument makes <code>.splice()</code> remove everything from that index onward. For example, <code>arr.splice(0)</code> removes and returns all items, leaving an empty array behind.',
    secondBeltAfter: ['tuna', 'shrimp'],
    secondBeltAfterLabel: 'lower belt',
  },
  {
    title: 'Fresh Swap',
    subtitle: '.splice() — replace',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "The tuna is sold out, but the chef has fresh squid! <code>.splice()</code> can also add dishes. After the first two arguments, any extra values get inserted where the removed items were. Swap the tuna for <code>'squid'</code>.",
    hint: "Remove 1 item at index 1, then add the new dish: upperBelt.splice(1, 1, ...)",
    preCode: "const upperBelt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: "const lowerBelt = upperBelt.splice(1, 1, 'squid')",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt[0] === 'tuna' &&
        context.upperBelt.length === 3 &&
        context.upperBelt[1] === 'squid'
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltBeforeLabel: 'upper belt',
    beltAfter: ['salmon', 'squid', 'shrimp'],
    beltAfterLabel: 'upper belt',
    successMessage: 'You can insert more items than you remove. <code>splice(1, 1, "a", "b", "c")</code> replaces one element with three, growing the array. The number of insertions is unlimited.',
    secondBeltAfter: ['tuna'],
    secondBeltAfterLabel: 'lower belt',
  },
  {
    title: 'Squeeze Play!',
    subtitle: '.splice() — insert',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "The chef made tuna and eel, and they need to go between the salmon and shrimp! You know splice can remove and add at the same time. What if you remove <strong>nothing</strong> and just add? Pass <code>0</code> as the remove count to insert without removing. Squeeze <code>'tuna'</code> and <code>'eel'</code> in there.",
    hint: "Start at index 1, remove 0, then list the new dishes: belt.splice(1, 0, 'tuna', ...)",
    preCode: "const belt = ['salmon', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: "belt.splice(1, 0, 'tuna', 'eel')",
    validate: (userCode, context) => {
      return context.belt.length === 4 && context.belt[1] === 'tuna' && context.belt[2] === 'eel'
    },
    successMessage: '<code>.splice()</code> can remove, replace, or insert depending on its arguments. Most other languages need separate methods for each operation. It\'s one of JavaScript\'s most versatile array tools.',
    beltBefore: ['salmon', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'eel', 'shrimp'],
  },
  {
    title: 'Photo of the Belt',
    subtitle: '.slice()',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "<code>.slice()</code> looks like <code>.splice()</code> but works very differently. It copies a section of the belt into a <strong>new array</strong> without changing the original. <code>.slice(start, end)</code> copies from <code>start</code> up to (but not including) <code>end</code>. Copy the tuna and shrimp from the middle so people can take a photo of just those!",
    hint: "The end index is exclusive: slice(1, 3) copies indices 1 and 2.",
    preCode: "const upperBelt = ['salmon', 'tuna', 'shrimp', 'eel']",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: 'const lowerBelt = upperBelt.slice(1, 3)',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt.length === 2 &&
        context.lowerBelt[0] === 'tuna' &&
        context.lowerBelt[1] === 'shrimp' &&
        context.upperBelt.length === 4 &&
        userCode.includes('.slice(')
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp', 'eel'],
    beltBeforeLabel: 'upper belt',
    beltAfter: ['salmon', 'tuna', 'shrimp', 'eel'],
    beltAfterLabel: 'upper belt',
    successMessage: '<code>.slice()</code> returns a new array and never modifies the original. To remember the difference: <code>.splice()</code> changes the array in place (mutates), while <code>.slice()</code> always creates a safe copy.',
    secondBeltAfter: ['tuna', 'shrimp'],
    secondBeltAfterLabel: 'lower belt',
  },
]

export default chapter2
