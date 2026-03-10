// Chapter 6: Spread & Copying — copy trap, spread copy, safe copy, spread add
const chapter6 = [
  {
    title: 'The Copycat Problem',
    subtitle: 'Reference vs Copy',
    chapter: 6,
    chapterName: 'Spread & Copying',
    description:
      "Watch out! The new cook tried to make a second belt by writing <code>lowerBelt = upperBelt</code>, but that doesn't actually copy it. Both variables point to the <strong>same</strong> belt! Try it: change the first dish on the lower belt to <code>'squid'</code> and see what happens to the upper belt!",
    hint: "Assign to index 0: lowerBelt[0] = 'squid'",
    preCode: "const upperBelt = ['salmon', 'tuna', 'shrimp']",
    preCode2: "const lowerBelt = upperBelt",
    postCode: '',
    placeholder: '',
    answer: "lowerBelt[0] = 'squid'",
    validate: (userCode, context) => {
      return (
        context.lowerBelt[0] === 'squid' &&
        context.upperBelt[0] === 'squid'
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltBeforeLabel: 'upper belt',
    beltAfter: ['squid', 'tuna', 'shrimp'],
    beltAfterLabel: 'upper belt (changed too!)',
    highlightIndex: 0,
    secondBeltBefore: ['salmon', 'tuna', 'shrimp'],
    secondBeltBeforeLabel: 'lower belt',
    secondBeltAfter: ['squid', 'tuna', 'shrimp'],
    secondBeltAfterLabel: 'lower belt',
    successMessage: 'Both belts changed to squid! You only modified <code>lowerBelt</code>, but the upper belt changed too. That\'s because <code>lowerBelt = upperBelt</code> doesn\'t copy: both names point to the same array in memory.',
    secondBeltHighlightIndex: 0,
  },
  {
    title: 'Clone the Belt',
    subtitle: 'Spread Copy',
    chapter: 6,
    chapterName: 'Spread & Copying',
    description:
      "Time to do it the right way! The <strong>spread operator</strong> <code>...</code> unpacks all items from an array. Wrapping it in <code>[ ]</code> creates a brand new copy, so changes to the copy won't affect the original. Copy the upper belt to the lower belt!",
    hint: "Spread the array inside new brackets: [...upperBelt]",
    preCode: "const upperBelt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: 'const lowerBelt = [...upperBelt]',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt.length === 3 &&
        context.lowerBelt[0] === 'salmon' &&
        context.lowerBelt !== context.upperBelt &&
        userCode.includes('...')
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltBeforeLabel: 'upper belt',
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    beltAfterLabel: 'upper belt',
    successMessage: 'Both belts look the same, but now they\'re independent copies! The <code>...</code> spread unpacked every dish from the upper belt into a brand new array. You can also copy with <code>.slice()</code> or <code>Array.from()</code>, but spread is the most popular.',
    secondBeltAfter: ['salmon', 'tuna', 'shrimp'],
    secondBeltAfterLabel: 'lower belt',
  },
  {
    title: 'Proof It Works',
    subtitle: 'Safe Spread Copy',
    chapter: 6,
    chapterName: 'Spread & Copying',
    description:
      "Now the lower belt is a <strong>real copy</strong> made with spread. Let's prove it! Try the same thing as before: change the first dish to <code>'squid'</code>. This time, only the lower belt changes!",
    hint: "Same as before: lowerBelt[0] = 'squid'",
    preCode: "const upperBelt = ['salmon', 'tuna', 'shrimp']",
    preCode2: "const lowerBelt = [...upperBelt]",
    postCode: '',
    placeholder: '',
    answer: "lowerBelt[0] = 'squid'",
    validate: (userCode, context) => {
      return (
        context.lowerBelt[0] === 'squid' &&
        context.upperBelt[0] === 'salmon'
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltBeforeLabel: 'upper belt',
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    beltAfterLabel: 'upper belt (unchanged!)',
    secondBeltBefore: ['salmon', 'tuna', 'shrimp'],
    secondBeltBeforeLabel: 'lower belt',
    successMessage: 'This time the upper belt says "unchanged!" The squid only appeared on the lower belt because spread made a real copy. Compare this to the copycat level: same code, different result, all because of <code>[...]</code>!',
    secondBeltAfter: ['squid', 'tuna', 'shrimp'],
    secondBeltAfterLabel: 'lower belt',
    secondBeltHighlightIndex: 0,
  },
  {
    title: 'One More, Chef!',
    subtitle: 'Spread + Add Item',
    chapter: 6,
    chapterName: 'Spread & Copying',
    description:
      "The chef just made a fresh eel roll and wants it added to a copy of the belt. You can spread an array and add extra items in the same brackets. Make a copy of the upper belt with <code>'eel'</code> added at the end!",
    hint: "Spread first, then add the new item: [...upperBelt, 'eel']",
    preCode: "const upperBelt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: "const lowerBelt = [...upperBelt, 'eel']",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt.length === 4 &&
        context.lowerBelt[3] === 'eel' &&
        context.upperBelt.length === 3 &&
        userCode.includes('...')
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltBeforeLabel: 'upper belt',
    beltAfter: ['salmon', 'tuna', 'shrimp'],
    beltAfterLabel: 'upper belt',
    successMessage: 'See the eel glowing on the lower belt? The upper belt still has just 3 dishes. <code>[...arr, newItem]</code> is like <code>.push()</code> but safer: it creates a fresh array instead of modifying the original.',
    secondBeltAfter: ['salmon', 'tuna', 'shrimp', 'eel'],
    secondBeltAfterLabel: 'lower belt',
    secondBeltHighlightIndex: 3,
  },
  {
    title: 'Merge the Belts',
    subtitle: 'Spread Two Arrays',
    chapter: 6,
    chapterName: 'Spread & Copying',
    description:
      "The chef prepared some new dishes on a separate tray. Time to combine them! You can spread multiple arrays into one. Create a new belt with everything from the upper belt plus the <code>newDishes</code>.",
    hint: "Spread both arrays: [...upperBelt, ...newDishes]",
    preCode: "const upperBelt = ['salmon', 'tuna']",
    preCode2: "const newDishes = ['eel', 'shrimp']",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: 'const lowerBelt = [...upperBelt, ...newDishes]',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt.length === 4 &&
        context.lowerBelt[0] === 'salmon' &&
        context.lowerBelt[3] === 'shrimp' &&
        userCode.includes('...')
      )
    },
    beltBefore: ['salmon', 'tuna'],
    beltBeforeLabel: 'upper belt',
    beltAfter: ['salmon', 'tuna'],
    beltAfterLabel: 'upper belt',
    successMessage: 'The lower belt has all 4 dishes from both sources! You used two spreads in one array: <code>[...a, ...b]</code>. You can even interleave extra items between them: <code>[...a, \'eel\', ...b]</code>.',
    secondBeltAfter: ['salmon', 'tuna', 'eel', 'shrimp'],
    secondBeltAfterLabel: 'lower belt',
  },
]

export default chapter6
