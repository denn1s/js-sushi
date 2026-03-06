const levels = [
  {
    title: 'Your First Array',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      'An array is an ordered list of items. In our sushi bar, the belt is an array of dishes. There\'s one salmon on the belt — add <code>\'tuna\'</code> and <code>\'shrimp\'</code> to complete it!',
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
    title: 'How Long Is the Belt?',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      'Every array has a <code>.length</code> property that tells you how many items it holds. Store the length in a variable called <code>count</code>.',
    hint: 'Access the property with belt.length — no parentheses needed.',
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
    title: 'Pick a Dish',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      'Arrays are zero-indexed — the first item is at position 0, the second at 1, and so on. Pick the second dish (tuna) from the belt.',
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
    title: 'The Last Dish',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      'To grab the last item, combine <code>.length</code> with bracket notation. The last index is always <code>length - 1</code>.',
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
    title: 'Replace a Dish',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      "You can change any item by assigning to its index. Replace the second dish with 'squid'.",
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
    title: 'Read the Menu',
    chapter: 1,
    chapterName: 'The Empty Belt',
    description:
      '<code>.join(separator)</code> combines all items into a single string, with the separator between each one. Join the belt into a comma-separated menu string.',
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
    title: 'Push a Dish',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "<code>.push()</code> adds an item to the end of the array — like the chef placing a new dish at the end of the belt. Push <code>'eel'</code> onto the belt.",
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
    title: 'Pop the Last',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "<code>.pop()</code> removes the last item from the array and returns it — like a customer grabbing the last dish off the belt. Pop the last dish and store it in <code>picked</code>.",
    hint: 'Call .pop() on the belt — it both removes and returns the item.',
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
    title: 'Unshift: Front of the Line',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "<code>.unshift()</code> adds an item to the beginning — VIP treatment! Add 'salmon' to the front.",
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
    title: 'Shift: Serve the First',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "<code>.shift()</code> removes the first item from the array and returns it — the first customer gets served. Shift the first dish off the belt and store it in <code>picked</code>.",
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
    title: 'Splice: Remove from Middle',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "<code>.splice(start, count)</code> removes <code>count</code> items starting at index <code>start</code> and returns them as a new array. Remove the shrimp at index 2 — it lands on the lower belt!",
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
    title: 'Splice: Remove Two',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "This time, move the tuna and shrimp to the lower belt. That's 2 dishes starting at index 1!",
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
    title: 'Splice: Replace',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "<code>.splice()</code> can also add dishes! After the first two arguments, any extra values get inserted where the removed items were. Swap the tuna for <code>'squid'</code>.",
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
    title: 'Splice: Insert in Middle',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "You know splice can remove and add at the same time. What if you remove <strong>nothing</strong> and just add? Pass <code>0</code> as the remove count to insert without removing. Squeeze <code>'tuna'</code> and <code>'eel'</code> between the salmon and shrimp.",
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
    title: 'slice (not splice!)',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "Careful — <code>.slice()</code> looks like <code>.splice()</code> but works very differently! It copies a section of the belt into a <strong>new array</strong> without changing the original. <code>.slice(start, end)</code> copies from <code>start</code> up to (but not including) <code>end</code>. Copy the tuna and shrimp from the middle!",
    hint: "The end index is exclusive — slice(1, 3) copies indices 1 and 2.",
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
    title: 'includes',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "<code>.includes()</code> checks if an item is on the belt and returns <code>true</code> or <code>false</code>. Is there any tuna on the belt?",
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
    title: 'indexOf',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "<code>.indexOf()</code> tells you the position of an item on the belt, or <code>-1</code> if it's not there. What position is the shrimp at?",
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
    title: 'find (named function)',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "<code>.find()</code> looks at each dish on the belt and returns the first one that passes a test. You give it a function — <code>.find()</code> calls that function for you on every dish. We already wrote <code>isSalmon</code> for you. Pass it to <code>.find()</code> — but don't call it yourself! No <code>()</code> after the name.",
    hint: "Put the function name inside .find() — remember, no () after it!",
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
    title: 'find (arrow function)',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "Instead of creating a separate function, you can write it directly inside <code>.find()</code>. This is called an <strong>arrow function</strong>: <code>(dish) => { return ... }</code>. <code>.find()</code> passes each dish to your function one at a time — <code>dish</code> is just a parameter name you choose. Find the shrimp!",
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
    title: 'findIndex',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "<code>.findIndex()</code> works just like <code>.find()</code>, but instead of returning the dish itself, it returns its <strong>position</strong> on the belt. Where is the eel?",
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
    title: 'every',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "<code>.every()</code> checks if <strong>all</strong> dishes on the belt pass a test. It takes an arrow function just like <code>.find()</code> — it receives each dish one at a time and should return <code>true</code> or <code>false</code>. Are all the dishes salmon?",
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
    title: 'filter',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "<code>.filter()</code> creates a <strong>new array</strong> with only the dishes that pass a test. It takes an arrow function just like <code>.find()</code> and <code>.every()</code>. Keep only the salmon — the filtered dishes land on the lower belt!",
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
    title: 'map: Add Wasabi',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "<code>.map()</code> transforms every dish and puts the results on a <strong>new array</strong>. Your arrow function receives each dish and returns the transformed version. Add the <code>wasabi</code> topping to every dish!",
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
    title: 'reduce (named function)',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "<code>.reduce()</code> combines all the dishes on the belt into a single value. It works differently from the other methods — your function receives <strong>two</strong> parameters: the result built so far, and the current dish. We wrote <code>buildMenu</code> for you — pass it to <code>.reduce()</code>!",
    hint: "Same as .find() — pass the function by name, no () after it!",
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
    title: 'reduce (arrow function)',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "Now write the reduce function yourself! Count how many dishes are on the belt. Your function receives <code>(count, dish)</code> — ignore the dish and just add <code>1</code> to the count each time. Start the count at <code>0</code> by passing it as the second argument to <code>.reduce()</code>.",
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
    title: 'Objects on the Belt',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "So far every dish on the belt has been a string. But a dish can hold more info! An <strong>object</strong> uses <code>{ }</code> to store multiple values. Each value has a name — use <strong>dot notation</strong> to read it: <code>dish.name</code> or <code>dish.price</code>. What's the price of the first dish?",
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
    title: 'Filter with Objects',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "Now combine what you know! The belt has dishes with prices. Use <code>.filter()</code> to keep only the cheap dishes — the ones that cost less than <code>4</code>. Your arrow function receives each <code>dish</code> object and can check <code>dish.price</code>.",
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
    title: 'Map with Objects',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "The upper belt has dishes with names and prices, but you just want the names. Use <code>.map()</code> to pull out the <code>name</code> from each dish — objects go in, strings come out!",
    hint: "Your function receives a dish object — return just dish.name",
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
    title: 'sort',
    chapter: 5,
    chapterName: 'Sorting & Rearranging',
    description:
      "<code>.sort()</code> rearranges the belt in place. It takes a compare function with two parameters — <code>a</code> and <code>b</code> — that returns a number. If the result is negative, <code>a</code> comes first. If positive, <code>b</code> comes first. Sort the dishes by price, cheapest first!",
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
    title: 'The Copy Trap',
    chapter: 6,
    chapterName: 'Spread & Copying',
    description:
      "Watch out! Using <code>=</code> to copy an array doesn't actually copy it — both variables point to the <strong>same</strong> belt. Try it: change the first dish on the lower belt to <code>'squid'</code> and see what happens to the upper belt!",
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
    title: 'Spread: Copy',
    chapter: 6,
    chapterName: 'Spread & Copying',
    description:
      "The <strong>spread operator</strong> <code>...</code> unpacks all items from an array. Wrapping it in <code>[ ]</code> creates a brand new copy — changes to the copy won't affect the original. Copy the upper belt to the lower belt!",
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
    title: 'Safe Copy',
    chapter: 6,
    chapterName: 'Spread & Copying',
    description:
      "Now the lower belt is a <strong>real copy</strong> made with spread. Try the same thing — change the first dish to <code>'squid'</code>. This time, only the lower belt changes!",
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
    title: 'Spread: Add One',
    chapter: 6,
    chapterName: 'Spread & Copying',
    description:
      "You can spread an array and add extra items in the same brackets. Make a copy of the upper belt with <code>'eel'</code> added at the end!",
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
    title: 'Spread: Add Dishes',
    chapter: 6,
    chapterName: 'Spread & Copying',
    description:
      "You can spread an array and add new items at the same time! The chef has some <code>newDishes</code> ready — create a new belt with everything from the upper belt plus the new dishes.",
    hint: "Spread the belt and add the new dishes: [...upperBelt, ...newDishes]",
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
    title: 'Destructuring: Pick One',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "<strong>Destructuring</strong> lets you unpack values from an array into variables. Instead of using <code>belt[0]</code>, you can assign directly by wrapping a variable name in square brackets on the left side of <code>=</code>. Grab the first dish into <code>picked</code>!",
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
    title: 'Destructuring: Pick Two',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "Add more names inside the brackets to unpack more dishes. Each name matches the next position on the belt. Grab the first two dishes into <code>first</code> and <code>second</code>!",
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
    title: 'Destructuring: ...rest',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "What about the leftover dishes? The <code>...rest</code> syntax collects everything that's left into a new array. Grab the first dish into <code>picked</code> and collect the leftovers into <code>lowerBelt</code>!",
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
    title: 'Destructuring: Skip a Dish',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "Sometimes you only want the second dish. Use an empty space before the comma to skip a position! Grab only the second dish into <code>second</code>.",
    hint: "Leave the first spot empty — just a comma tells JS to skip that position.",
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
    title: 'Object Destructuring',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "We grabbed a dish from the belt — but it's an <strong>object</strong> with properties. Objects use curly braces <code>{ }</code> for destructuring, and the variable names must match the property names. Pull out <code>name</code> and <code>price</code> from <code>dish</code>!",
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
    title: 'Destructuring in .filter()',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "You can destructure right inside the function parameter! Instead of <code>(dish) => { return dish.price }</code>, pull out just what you need. Use destructuring in a <code>.filter()</code> to keep only dishes that cost less than <code>4</code>.",
    hint: "Wrap the property name in curly braces inside the parentheses of the arrow function.",
    preCode: "const upperBelt = [\n  { name: 'salmon', price: 5 },\n  { name: 'tuna', price: 3 },\n  { name: 'eel', price: 4 },\n  { name: 'shrimp', price: 2 }\n]",
    postCode: '',
    lockedPrefix: 'const lowerBelt = ',
    initialCode: '',
    placeholder: '',
    answer: "const lowerBelt = upperBelt.filter(({ price }) => { return price < 4 })",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.lowerBelt) &&
        context.lowerBelt.length === 2 &&
        context.lowerBelt[0].name === 'tuna' &&
        context.lowerBelt[1].name === 'shrimp' &&
        userCode.includes('{')
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
    title: 'Destructuring: Default Value',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "What if the belt is shorter than expected? Use <code>=</code> after a variable name to set a fallback. The belt only has one dish — provide a default for the second!",
    hint: "After the variable name, use = to assign a fallback value.",
    preCode: "const belt = ['salmon']",
    postCode: '',
    placeholder: '',
    answer: "const [first, second = 'tuna'] = belt",
    validate: (userCode, context) => {
      return context.first === 'salmon' && context.second === 'tuna'
    },
    beltBefore: ['salmon'],
    beltAfter: ['salmon'],
    plate: [
      { type: 'sushi', value: 'salmon', label: 'first', highlightIndex: 0 },
      { type: 'sushi', value: 'tuna', label: 'second (default)' },
    ],
  },
  {
    title: 'Destructuring: Swap',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "Here's a neat trick! You can swap two variables in one line. The right side builds a temporary array, and the left side unpacks it into the opposite variables.",
    hint: "Build an array with the values reversed, then destructure it back.",
    preCode: "let a = 'salmon'\nlet b = 'tuna'",
    postCode: '',
    placeholder: '',
    answer: '[a, b] = [b, a]',
    validate: (userCode, context) => {
      return context.a === 'tuna' && context.b === 'salmon'
    },
    beltBefore: ['salmon', 'tuna'],
    beltBeforeLabel: 'a, b',
    beltAfter: ['tuna', 'salmon'],
    beltAfterLabel: 'a, b (swapped!)',
    plate: [
      { type: 'sushi', value: 'tuna', label: 'a' },
      { type: 'sushi', value: 'salmon', label: 'b' },
    ],
  },
  {
    title: 'flat: Nested Bento',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      '<code>.flat()</code> unwraps nested arrays — like opening bento boxes and putting all dishes on the belt.',
    hint: 'bento.flat() flattens one level of nesting.',
    preCode: "const bento = [['salmon', 'tuna'], ['shrimp', 'eel']]",
    postCode: '',
    placeholder: '',
    answer: 'const flat = bento.flat()',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.flat) &&
        context.flat.length === 4 &&
        context.flat[0] === 'salmon' &&
        context.flat[3] === 'eel'
      )
    },
    beltBefore: [
      ['salmon', 'tuna'],
      ['shrimp', 'eel'],
    ],
    beltAfter: ['salmon', 'tuna', 'shrimp', 'eel'],
  },
  {
    title: 'flatMap',
    chapter: 7,
    chapterName: 'Destructuring',
    description:
      "<code>.flatMap()</code> maps then flattens in one step. Split each order string into individual items.",
    hint: "orders.flatMap(o => o.split(' ')) — split creates arrays, flatMap flattens them.",
    preCode: "const orders = ['salmon tuna', 'shrimp eel']",
    postCode: '',
    placeholder: '',
    answer: "const items = orders.flatMap(o => o.split(' '))",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.items) &&
        context.items.length === 4 &&
        context.items[0] === 'salmon' &&
        context.items[3] === 'eel'
      )
    },
    beltBefore: ['salmon tuna', 'shrimp eel'],
    beltAfter: ['salmon', 'tuna', 'shrimp', 'eel'],
  },
]

levels.forEach((level, i) => { level.id = i + 1 })

export default levels
