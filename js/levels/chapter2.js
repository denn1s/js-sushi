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
    successMessage: 'See the eel glowing at the end of the belt? <code>.push()</code> always adds to the end. You can push multiple items at once too: <code>belt.push(\'eel\', \'squid\')</code> adds both in order.',
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
    successMessage: 'Notice how the shrimp left the end of the belt and landed on the plate below! <code>.pop()</code> both removes the last item and gives it back to you. Together with <code>.push()</code>, they make the belt work like a stack: last in, first out.',
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
    successMessage: 'See the salmon glowing at the front of the belt? <code>.unshift()</code> always inserts at the beginning, pushing everything else down. Its name comes from <code>.shift()</code>: unshift "undoes" a shift by adding back to the front.',
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
    successMessage: 'The salmon slid off the front and onto the plate! Notice how the remaining dishes shifted left to fill the gap. That shifting is why <code>.shift()</code> got its name, and why it\'s slower than <code>.pop()</code> for large arrays.',
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
    successMessage: 'The shrimp moved from the upper belt to the lower belt! Notice <code>.splice()</code> returned an array <code>[\'shrimp\']</code>, not just the string. It always gives back an array of removed items, even if you only removed one.',
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
    successMessage: 'Both dishes jumped to the lower belt! You can remove even more by increasing the second number. Omit it entirely and <code>.splice(1)</code> removes everything from index 1 onward.',
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
    successMessage: 'Look at the belts: the tuna moved down and the squid took its place on top! <code>.splice()</code> removed and inserted in one step. You can even insert more items than you remove to grow the array.',
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
    successMessage: 'See how the upper belt still has all 4 dishes? <code>.slice()</code> copies without touching the original. Easy way to remember: sp<strong>l</strong>ice is <strong>l</strong>ike a knife (it cuts the array), while s<strong>l</strong>ice is like a <strong>photo</strong> (it just copies a section).',
    secondBeltAfter: ['tuna', 'shrimp'],
    secondBeltAfterLabel: 'lower belt',
  },
]

export default chapter2
