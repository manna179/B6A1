let input:unknown

const getLength = (input:string|[]):number=>{
if(typeof input === "string"){
   return input.length
}
}
console.log(getLength("manna"));