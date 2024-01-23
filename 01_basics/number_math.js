const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const other=123.896
console.log(other.toPrecision(3));

//we mostly use random
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
//above i have writen that i get a random value in range max-min and it dont go to 0 so added 1
//then for base value as min i added min 