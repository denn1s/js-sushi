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
      "<code>.splice(start, count)</code> removes <code>count</code> items starting at index <code>start</code>. Remove the shrimp at index 2.",
    hint: 'The first argument is where to start, the second is how many to remove.',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp', 'eel']",
    postCode: '',
    placeholder: '',
    answer: 'belt.splice(2, 1)',
    validate: (userCode, context) => {
      return (
        context.belt.length === 3 &&
        context.belt[0] === 'salmon' &&
        context.belt[1] === 'tuna' &&
        context.belt[2] === 'eel'
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp', 'eel'],
    beltAfter: ['salmon', 'tuna', 'eel'],
  },
  {
    title: 'Splice: Remove Two',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "<code>.splice()</code> returns an array of the removed items. Remove 2 dishes starting at index 1 and store them in <code>removed</code>.",
    hint: 'Change the second argument to remove more than one item.',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp', 'eel']",
    postCode: '',
    lockedPrefix: 'const removed = ',
    initialCode: '',
    placeholder: '',
    answer: 'const removed = belt.splice(1, 2)',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.removed) &&
        context.removed.length === 2 &&
        context.removed[0] === 'tuna' &&
        context.removed[1] === 'shrimp' &&
        context.belt.length === 2
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp', 'eel'],
    beltAfter: ['salmon', 'eel'],
    plate: { type: 'value', value: "['tuna', 'shrimp']", label: 'removed' },
  },
  {
    title: 'Splice: Insert in Middle',
    chapter: 2,
    chapterName: 'Adding & Removing',
    description:
      "<code>.splice(start, 0, items...)</code> inserts without removing. Insert 'tuna' and 'eel' at index 1.",
    hint: 'To insert without removing, set the delete count to 0.',
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
    title: 'includes',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "<code>.includes()</code> returns true or false — is this dish on the belt? Check if 'tuna' is on the belt.",
    hint: "belt.includes('tuna') returns a boolean.",
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: "const hasTuna = belt.includes('tuna')",
    validate: (userCode, context) => {
      return context.hasTuna === true
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
  },
  {
    title: 'indexOf',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "<code>.indexOf()</code> returns the position of an item, or -1 if not found. Find where 'shrimp' is.",
    hint: "belt.indexOf('shrimp') returns the index number.",
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: "const pos = belt.indexOf('shrimp')",
    validate: (userCode, context) => {
      return context.pos === 2
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
  },
  {
    title: 'find',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      '<code>.find()</code> returns the first item that passes a test. This is your first arrow function! The <code>=></code> arrow creates a small inline function.',
    hint: "belt.find(dish => dish === 'salmon') — the arrow function tests each dish.",
    preCode: "const belt = ['tuna', 'salmon', 'shrimp', 'salmon']",
    postCode: '',
    placeholder: '',
    answer: "const found = belt.find(dish => dish === 'salmon')",
    validate: (userCode, context) => {
      return context.found === 'salmon'
    },
    beltBefore: ['tuna', 'salmon', 'shrimp', 'salmon'],
    beltAfter: ['tuna', 'salmon', 'shrimp', 'salmon'],
  },
  {
    title: 'findIndex',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      '<code>.findIndex()</code> is like <code>.find()</code> but returns the position instead of the value.',
    hint: "belt.findIndex(dish => dish === 'eel') returns the index.",
    preCode: "const belt = ['salmon', 'tuna', 'eel', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: "const pos = belt.findIndex(dish => dish === 'eel')",
    validate: (userCode, context) => {
      return context.pos === 2
    },
    beltBefore: ['salmon', 'tuna', 'eel', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'eel', 'shrimp'],
  },
  {
    title: 'some & every',
    chapter: 3,
    chapterName: 'Searching the Belt',
    description:
      "<code>.every()</code> checks if ALL items pass a test. Is every dish on the belt 'salmon'?",
    hint: "belt.every(dish => dish === 'salmon') returns true only if all match.",
    preCode: "const belt = ['salmon', 'salmon', 'salmon']",
    postCode: '',
    placeholder: '',
    answer: "const allSalmon = belt.every(dish => dish === 'salmon')",
    validate: (userCode, context) => {
      return context.allSalmon === true
    },
    beltBefore: ['salmon', 'salmon', 'salmon'],
    beltAfter: ['salmon', 'salmon', 'salmon'],
  },
  {
    title: 'filter',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "<code>.filter()</code> creates a new array with only the items that pass a test. Keep only the 'salmon' dishes.",
    hint: "belt.filter(dish => dish === 'salmon') keeps only salmon.",
    preCode: "const belt = ['salmon', 'tuna', 'salmon', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: "const salmonOnly = belt.filter(dish => dish === 'salmon')",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.salmonOnly) &&
        context.salmonOnly.length === 2 &&
        context.salmonOnly.every((d) => d === 'salmon')
      )
    },
    beltBefore: ['salmon', 'tuna', 'salmon', 'shrimp'],
    beltAfter: ['salmon', 'salmon'],
  },
  {
    title: 'map: Add Wasabi',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "<code>.map()</code> transforms every item and returns a new array. Add ' + wasabi' to each dish!",
    hint: "belt.map(dish => dish + ' + wasabi') transforms each string.",
    preCode: "const belt = ['salmon', 'tuna']",
    postCode: '',
    placeholder: '',
    answer: "const spicy = belt.map(dish => dish + ' + wasabi')",
    validate: (userCode, context) => {
      return (
        Array.isArray(context.spicy) &&
        context.spicy[0] === 'salmon + wasabi' &&
        context.spicy[1] === 'tuna + wasabi'
      )
    },
    beltBefore: ['salmon', 'tuna'],
    beltAfter: ['salmon + wasabi', 'tuna + wasabi'],
  },
  {
    title: 'map with Objects',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      "<code>.map()</code> can create objects too. Wrap each dish name in an object with a <code>name</code> and <code>price</code>. Note: wrap the object in parentheses <code>({ })</code> so the arrow function knows it's a return value.",
    hint: 'dishes.map(name => ({ name, price: 3 })) — the parentheses are key!',
    preCode: "const dishes = ['salmon', 'tuna']",
    postCode: '',
    placeholder: '',
    answer: 'const menu = dishes.map(name => ({ name, price: 3 }))',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.menu) &&
        context.menu.length === 2 &&
        context.menu[0].name === 'salmon' &&
        context.menu[0].price === 3 &&
        context.menu[1].name === 'tuna' &&
        context.menu[1].price === 3
      )
    },
    beltBefore: ['salmon', 'tuna'],
    beltAfter: [
      { name: 'salmon', price: 3 },
      { name: 'tuna', price: 3 },
    ],
  },
  {
    title: 'Named Callback',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      'Instead of writing the arrow function inline, you can pass a named function. The <code>addWasabi</code> function is already defined — pass it to <code>.map()</code> by name (no parentheses!).',
    hint: 'belt.map(addWasabi) — just the function name, no () after it.',
    preCode: "const addWasabi = dish => dish + ' + wasabi'\nconst belt = ['salmon', 'tuna']",
    postCode: '',
    placeholder: '',
    answer: 'const spicy = belt.map(addWasabi)',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.spicy) &&
        context.spicy[0] === 'salmon + wasabi' &&
        context.spicy[1] === 'tuna + wasabi'
      )
    },
    beltBefore: ['salmon', 'tuna'],
    beltAfter: ['salmon + wasabi', 'tuna + wasabi'],
  },
  {
    title: 'reduce: The Bill',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      '<code>.reduce()</code> boils an array down to a single value. Add up all the prices to get the total bill. The second argument (0) is the starting value.',
    hint: 'prices.reduce((total, p) => total + p, 0) — total starts at 0 and accumulates.',
    preCode: 'const prices = [3, 5, 2, 4]',
    postCode: '',
    placeholder: '',
    answer: 'const total = prices.reduce((sum, p) => sum + p, 0)',
    validate: (userCode, context) => {
      return context.total === 14
    },
    beltBefore: [3, 5, 2, 4],
    beltAfter: [14],
    beltBeforeLabel: 'prices',
    beltAfterLabel: 'total',
  },
  {
    title: 'reduce: Most Expensive',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      'Use <code>.reduce()</code> with a ternary to find the most expensive dish. The ternary <code>a ? b : c</code> means "if a then b, else c".',
    hint: 'prices.reduce((max, p) => p > max ? p : max, 0)',
    preCode: 'const prices = [3, 5, 2, 8, 4]',
    postCode: '',
    placeholder: '',
    answer: 'const highest = prices.reduce((max, p) => p > max ? p : max, 0)',
    validate: (userCode, context) => {
      return context.highest === 8
    },
    beltBefore: [3, 5, 2, 8, 4],
    beltAfter: [8],
    beltBeforeLabel: 'prices',
    beltAfterLabel: 'highest',
  },
  {
    title: 'Chain: filter + map',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description:
      'Chain methods together! Filter the menu to dishes over $3, then map to get just their names.',
    hint: 'menu.filter(d => d.price > 3).map(d => d.name)',
    preCode:
      "const menu = [\n  { name: 'salmon', price: 5 },\n  { name: 'tuna', price: 3 },\n  { name: 'eel', price: 4 },\n  { name: 'shrimp', price: 2 }\n]",
    postCode: '',
    placeholder: '',
    answer: 'const premium = menu.filter(d => d.price > 3).map(d => d.name)',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.premium) &&
        context.premium.length === 2 &&
        context.premium.includes('salmon') &&
        context.premium.includes('eel')
      )
    },
    beltBefore: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
      { name: 'eel', price: 4 },
      { name: 'shrimp', price: 2 },
    ],
    beltAfter: ['salmon', 'eel'],
  },
  {
    title: 'Chain: filter + map + reduce',
    chapter: 4,
    chapterName: 'Transforming the Belt',
    description: 'The ultimate chain! Filter dishes over $3, get their prices, then sum them up.',
    hint: 'menu.filter(...).map(...).reduce(...)',
    preCode:
      "const menu = [\n  { name: 'salmon', price: 5 },\n  { name: 'tuna', price: 3 },\n  { name: 'eel', price: 4 },\n  { name: 'shrimp', price: 2 }\n]",
    postCode: '',
    placeholder: '',
    answer:
      'const premiumTotal = menu.filter(d => d.price > 3).map(d => d.price).reduce((s, p) => s + p, 0)',
    validate: (userCode, context) => {
      return context.premiumTotal === 9
    },
    beltBefore: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
      { name: 'eel', price: 4 },
      { name: 'shrimp', price: 2 },
    ],
    beltAfter: [9],
    beltAfterLabel: 'premiumTotal',
  },
  {
    title: 'sort: Alphabetical',
    chapter: 5,
    chapterName: 'Sorting & Rearranging',
    description:
      '<code>.sort()</code> with no arguments sorts strings alphabetically. Sort the belt!',
    hint: 'Just call belt.sort() — no arguments needed for strings.',
    preCode: "const belt = ['tuna', 'salmon', 'eel', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: 'belt.sort()',
    validate: (userCode, context) => {
      return (
        context.belt[0] === 'eel' &&
        context.belt[1] === 'salmon' &&
        context.belt[2] === 'shrimp' &&
        context.belt[3] === 'tuna'
      )
    },
    beltBefore: ['tuna', 'salmon', 'eel', 'shrimp'],
    beltAfter: ['eel', 'salmon', 'shrimp', 'tuna'],
  },
  {
    title: 'sort: By Price',
    chapter: 5,
    chapterName: 'Sorting & Rearranging',
    description:
      'To sort numbers or objects, pass a compare function. Return negative to sort a before b, positive for b before a.',
    hint: 'menu.sort((a, b) => a.price - b.price) sorts cheapest first.',
    preCode:
      "const menu = [\n  { name: 'eel', price: 4 },\n  { name: 'salmon', price: 5 },\n  { name: 'shrimp', price: 2 }\n]",
    postCode: '',
    placeholder: '',
    answer: 'menu.sort((a, b) => a.price - b.price)',
    validate: (userCode, context) => {
      return (
        context.menu[0].price === 2 && context.menu[1].price === 4 && context.menu[2].price === 5
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
    title: 'reverse',
    chapter: 5,
    chapterName: 'Sorting & Rearranging',
    description: '<code>.reverse()</code> flips the array in place. Reverse the belt order!',
    hint: 'Just call belt.reverse() — no arguments.',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: 'belt.reverse()',
    validate: (userCode, context) => {
      return (
        context.belt[0] === 'shrimp' && context.belt[1] === 'tuna' && context.belt[2] === 'salmon'
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['shrimp', 'tuna', 'salmon'],
  },
  {
    title: 'slice',
    chapter: 5,
    chapterName: 'Sorting & Rearranging',
    description:
      '<code>.slice(start, end)</code> returns a copy of part of the array without modifying the original. Get dishes at indices 1, 2, and 3.',
    hint: 'belt.slice(1, 4) — end index is exclusive!',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp', 'eel', 'squid']",
    postCode: '',
    placeholder: '',
    answer: 'const middle = belt.slice(1, 4)',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.middle) &&
        context.middle.length === 3 &&
        context.middle[0] === 'tuna' &&
        context.middle[1] === 'shrimp' &&
        context.middle[2] === 'eel'
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp', 'eel', 'squid'],
    beltAfter: ['tuna', 'shrimp', 'eel'],
  },
  {
    title: 'Spread: Combine Belts',
    chapter: 6,
    chapterName: 'Modern JS',
    description:
      'The spread operator <code>...</code> unpacks an array. Combine two belts into one!',
    hint: '[...belt1, ...belt2] spreads both arrays into a new one.',
    preCode: "const belt1 = ['salmon', 'tuna']\nconst belt2 = ['eel', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: 'const combined = [...belt1, ...belt2]',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.combined) &&
        context.combined.length === 4 &&
        context.combined[0] === 'salmon' &&
        context.combined[3] === 'shrimp'
      )
    },
    beltBefore: ['salmon', 'tuna', '|', 'eel', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'eel', 'shrimp'],
  },
  {
    title: 'Spread: Clone',
    chapter: 6,
    chapterName: 'Modern JS',
    description:
      "Spread can clone an array. This creates an independent copy — changes to the copy won't affect the original.",
    hint: 'const copy = [...belt] — spread into a new array.',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp']",
    postCode: '',
    placeholder: '',
    answer: 'const copy = [...belt]',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.copy) &&
        context.copy.length === 3 &&
        context.copy[0] === 'salmon' &&
        context.copy !== context.belt
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp'],
    beltAfter: ['salmon', 'tuna', 'shrimp'],
  },
  {
    title: 'Destructuring',
    chapter: 6,
    chapterName: 'Modern JS',
    description:
      'Destructuring lets you unpack array values into variables. The <code>...rest</code> collects everything left over.',
    hint: 'const [first, second, ...rest] = belt — pattern matches positions.',
    preCode: "const belt = ['salmon', 'tuna', 'shrimp', 'eel']",
    postCode: '',
    placeholder: '',
    answer: 'const [first, second, ...rest] = belt',
    validate: (userCode, context) => {
      return (
        context.first === 'salmon' &&
        context.second === 'tuna' &&
        Array.isArray(context.rest) &&
        context.rest.length === 2
      )
    },
    beltBefore: ['salmon', 'tuna', 'shrimp', 'eel'],
    beltAfter: ['salmon', 'tuna', 'shrimp', 'eel'],
  },
  {
    title: 'flat: Nested Bento',
    chapter: 6,
    chapterName: 'Modern JS',
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
    chapter: 6,
    chapterName: 'Modern JS',
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
  {
    title: 'Promise + .then()',
    chapter: 7,
    chapterName: 'Async Sushi Bar',
    description:
      "The chef takes time to prepare a dish. <code>chefMakes()</code> returns a Promise — a value that arrives later. Use <code>.then()</code> to handle it when it's ready.",
    hint: "chefMakes('salmon').then(dish => { result = dish })",
    preCode:
      "let result = ''\nconst chefMakes = dish => new Promise(r => setTimeout(() => r(dish + ' ready!'), 100))",
    postCode: '',
    placeholder: '',
    answer: "chefMakes('salmon').then(dish => { result = dish })",
    validate: (userCode, context) => {
      return context.result === 'salmon ready!'
    },
    beltBefore: ['salmon?'],
    beltAfter: ['salmon ready!'],
    async: true,
  },
  {
    title: 'async/await',
    chapter: 7,
    chapterName: 'Async Sushi Bar',
    description:
      '<code>await</code> pauses until the Promise resolves — cleaner than <code>.then()</code>. Your code is already inside an async function.',
    hint: "const dish = await chefMakes('tuna')",
    preCode:
      "const chefMakes = dish => new Promise(r => setTimeout(() => r(dish + ' ready!'), 100))",
    postCode: '',
    placeholder: '',
    answer: "const dish = await chefMakes('tuna')",
    validate: (userCode, context) => {
      return context.dish === 'tuna ready!'
    },
    beltBefore: ['tuna?'],
    beltAfter: ['tuna ready!'],
    async: true,
  },
  {
    title: 'Promise.all',
    chapter: 7,
    chapterName: 'Async Sushi Bar',
    description:
      '<code>Promise.all()</code> runs multiple promises in parallel and waits for all of them. Combine it with <code>.map()</code> to prepare all dishes at once!',
    hint: 'await Promise.all(order.map(d => chefMakes(d)))',
    preCode:
      "const chefMakes = dish => new Promise(r => setTimeout(() => r(dish + ' ready!'), 100))\nconst order = ['salmon', 'tuna', 'eel']",
    postCode: '',
    placeholder: '',
    answer: 'const dishes = await Promise.all(order.map(d => chefMakes(d)))',
    validate: (userCode, context) => {
      return (
        Array.isArray(context.dishes) &&
        context.dishes.length === 3 &&
        context.dishes[0] === 'salmon ready!'
      )
    },
    beltBefore: ['salmon?', 'tuna?', 'eel?'],
    beltAfter: ['salmon ready!', 'tuna ready!', 'eel ready!'],
    async: true,
  },
  {
    title: 'Grand Feast',
    chapter: 7,
    chapterName: 'Async Sushi Bar',
    description:
      'The final challenge! Use destructuring, filter, map, and Promise.all together. Filter the premium dishes (price > 3), prepare them all, and destructure the results.',
    hint: 'Combine: filter → map names → Promise.all with chefMakes → destructure',
    preCode:
      "const chefMakes = dish => new Promise(r => setTimeout(() => r(dish + ' ready!'), 100))\nconst menu = [\n  { name: 'salmon', price: 5 },\n  { name: 'tuna', price: 3 },\n  { name: 'eel', price: 4 }\n]",
    postCode: '',
    placeholder: '',
    answer:
      'const [first, ...others] = await Promise.all(menu.filter(d => d.price > 3).map(d => chefMakes(d.name)))',
    validate: (userCode, context) => {
      return (
        context.first === 'salmon ready!' &&
        Array.isArray(context.others) &&
        context.others[0] === 'eel ready!'
      )
    },
    beltBefore: [
      { name: 'salmon', price: 5 },
      { name: 'tuna', price: 3 },
      { name: 'eel', price: 4 },
    ],
    beltAfter: ['salmon ready!', 'eel ready!'],
    async: true,
  },
]

levels.forEach((level, i) => { level.id = i + 1 })

export default levels
