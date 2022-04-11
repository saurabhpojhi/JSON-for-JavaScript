/* JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data.*/

// JSON syntax

// {
//     "name": "saurabh",
//     "age": 26,
//     "gender": "male",
// }

/* JSON data*/ 

//"name": "saurabh"

/*JSON object      The JSON object is written inside curly braces { }*/

  // {"name": "saurabh", "age": 26, "gender": "male"}

/*JSON array      JSON array is written inside square brackets [ ]*/

// ["name": "saurabh", "age": 26, "gender": "male"]

// JSON array containing objects

// [
//     { "name": "John", "age": 22 },
//     { "name": "Peter", "age": 20 }.
//     { "name": "Mark", "age": 23 }
// ]

/*   Accessing JSON Data */  //vvi  We use the . notation to access JSON data. Its syntax is: variableName.key

// JSON object
const data = {     
    "name": "saurabh",
    "age": 26,
    "hobby": {
        "reading" : true,
        "gaming": true,
        "sports": "football"
    },
    "class": ["javaScript","node","Mongo"]
}
// accessing JSON object
console.log(data.name); //saurabh output will comes
console.log(data.hobby);  //  { reading: true, gaming: true, sports: 'football' }
console.log(data.class); // [ 'javaScript', 'node', 'Mongo' ]
console.log(data.hobby.reading); // true
console.log(data.hobby.sports); // football
console.log(data.class[1]);   // node
