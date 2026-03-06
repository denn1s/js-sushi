const levels = [
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
    plate: { type: 'value', value: 'salmon,tuna,shrimp', label: 'menu' },
  },
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
    beltBefore: ['salmon', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'eel', 'shrimp'],
  },
  {
    title: 'Photo of the Belt',
    subtitle: '.slice()',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "A food blogger wants to photograph just the tuna and shrimp! Careful: <code>.slice()</code> looks like <code>.splice()</code> but works very differently. It copies a section of the belt into a <strong>new array</strong> without changing the original. <code>.slice(start, end)</code> copies from <code>start</code> up to (but not including) <code>end</code>. Copy the tuna and shrimp from the middle!",
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
    secondBeltAfter: ['tuna', 'shrimp'],
    secondBeltAfterLabel: 'lower belt',
  },
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
    secondBeltAfter: ['salmon', 'tuna', 'shrimp'],
    secondBeltAfterLabel: 'lower belt',
  },
  {
    title: 'Cheapest First!',
    subtitle: '.sort()',
    chapter: 5,
    chapterName: 'Sorting & Rearranging',
    description:
      "Happy hour special: cheapest dishes go first! <code>.sort()</code> rearranges the belt in place. It takes a compare function with two parameters, <code>a</code> and <code>b</code>, that returns a number. If the result is negative, <code>a</code> comes first. If positive, <code>b</code> comes first. Sort the dishes by price, cheapest first!",
    hint: "Subtract the prices: (a, b) => { return a.price - b.price }",
    preCode:
      "const belt = [\n  { name: 'eel', price: 4 },\n  { name: 'salmon', price: 5 },\n  { name: 'shrimp', price: 2 }\n]",
    postCode: '',
    placeholder: '',
    answer: "belt.sort((a, b) => { return a.price - b.price })",
    validate: (userCode, context) => {
      return (
        context.belt[0].price === 2 && context.belt[1].price === 4 && context.belt[2].price === 5 &&
        userCode.includes('.sort(')
      )
    },
    beltBefore: [
      { name: 'eel', price: 4 },
      { name: 'salmon', price: 5 },
      { name: 'shrimp', price: 2 },
    ],
    beltAfter: [
      { name: 'shrimp', price: 2 },
      { name: 'eel', price: 4 },
      { name: 'salmon', price: 5 },
    ],
  },
  {
    title: 'The Copycat Problem',
    subtitle: 'Reference vs Copy',
    chapter: 6,
    chapterName: 'Spread & Copying',
    description:
      "Watch out! The new cook tried to make a second belt by writing <code>lowerBelt = upperBelt</code>, but that doesn't actually copy it. Both variables point to the <strong>same</strong> belt! Try it: change the first dish on the lower belt to <code>'squid'</code> and see what happens to the upper belt!",
    hint: "Assign to index 0: lowerBelt[0] = 'squid'",
    preCode: "const upperBelt = ['salmon', 'tuna', 'shrimp']\nconst lowerBelt = upperBelt",
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
    preCode: "const upperBelt = ['salmon', 'tuna', 'shrimp']\nconst lowerBelt = [...upperBelt]",
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
    preCode: "const upperBelt = ['salmon', 'tuna']\nconst newDishes = ['eel', 'shrimp']",
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
    secondBeltAfter: ['salmon', 'tuna', 'eel', 'shrimp'],
    secondBeltAfterLabel: 'lower belt',
  },
  // ── Chapter 7: Destructuring ──────────────────────────────────────
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
    beltAfter: ['tuna', 'eel', 'shrimp'],
    beltAfterLabel: 'lunch menu',
  },
]

levels.forEach((level, i) => { level.id = i + 1 })

export default levels
