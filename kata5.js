let XO = (arg) => {
let newArg = arg.toLowerCase();
let numO = 0;
let numX = 0;
for (let i in newArg) {
  if (newArg[i]==="o") {numO++}
  if (newArg[i]==="x") {numX++}
}
return (numO===numX)?true:false
}
console.log(XO("vdfgeoxoxxoox"))
console.log(XO("ooxx")) 
console.log(XO("xooxx")) 
console.log(XO("ooxXm")) 
console.log(XO("zpzpzpp"))  // when no 'x' and 'o' is present should return true
console.log(XO("zzoo")) 


let XO2 = (str) => {
console.log("xoxo".toLowerCase().split("x"))
console.log("xoxo".toLowerCase().split("o"))

return str.toLowerCase().split("x").length===str.toLowerCase().split("o").length
}

console.log(XO2("vdfgeoxoxxoox"))
console.log(XO("ooxx")) 
console.log(XO("xooxx")) 
console.log(XO("ooxXm")) 
console.log(XO("zpzpzpp"))  // when no 'x' and 'o' is present should return true
console.log(XO("zzoo")) 