// Chapter 5: Sorting & Rearranging — sort
const chapter5 = [
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
    successMessage: '.sort() mutates the original array! For a safe sort, spread first: [...belt].sort(...). Also, without a compare function, .sort() converts to strings — so [10, 2, 1].sort() gives [1, 10, 2]!',
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
]

export default chapter5
