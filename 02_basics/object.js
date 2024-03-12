//singleton when we make by constructor object.create

//now makeing a symbol
const mySym=Symbol("key1")

//objects literals
const JsUser={
    name: "Advait",
    age:22,
    place:"NCR",
    [mySym]:"my key1"
}

//access
console.log(JsUser.name)
//or
console.log(JsUser["name"])

// want to use the symbol
console.log(JsUser[mySym])