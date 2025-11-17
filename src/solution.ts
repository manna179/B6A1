// let value: number|string|boolean;

const formatValue = (value: unknown) => {
  if (typeof value === "number") {
    return value * value;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return;
  }
};

const getLength = (input: string | (number[] | string[])) => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  } else {
    return;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}







type Item = {
  title: string;
  rating: number;
};
function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
function filterActiveUsers(users:User[]): User[] {
  return users.filter(user=>user.isActive === true)
}



interface Book {
title:string;
author:string;
publishedYear:number;
isAvailable:boolean
}

function printBookDetails(book:Book):void{
    
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes":"No"} `);

}


