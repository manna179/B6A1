let input:unknown
const getLength = (input:string|(number[]|string[]))=>{
if(typeof input === "string"){
   return input.length
}else if(Array.isArray(input)){
    return input.length
}else{
    return
}
}

