let mydate=new Date()
console.log(mydate)

console.log(mydate.toString())

console.log(mydate.toDateString())
console.log(mydate.toLocaleString())


//date is an Object

//from .getTime() we get current time in milli sec from 1 JAN 1970
//if we want current date then Date.now()
//for making it in sec from milli sec we need to divide it with 1000
let timestamp=Date.now()
console.log(Math.floor(Date.now()/1000));
