// let value: number|string|boolean;
let value: any;

const formatValue = (value: any) => {
  if (typeof value === "number") {
    return value * value;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return !value;
  }else{
    return 
  }
};

console.log(formatValue(true));
console.log(formatValue("true"));
console.log(formatValue(2));
