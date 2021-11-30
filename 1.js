function unique(arr) {
   return Array.from(new Set(arr));
}

let fruit = ["apple" ,"pear","orange", "apple", "orange","banana","banana"];

console.log( unique(fruit) );