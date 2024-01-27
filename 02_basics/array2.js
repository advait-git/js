const things=["bat","ball","hockey"]
const veg=["apple","potato","onion"]

// const all=things.concat(veg)
// console.log(all)

const all=[...things,...veg]
console.log(all)