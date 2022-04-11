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

/*You can also use square bracket syntax [] to access JSON data.*/

// json object
const data1 = {
    "name": "saurabh",
    "age":26
}
// accessing JSON object
console.log(data["name"]); //saurabh

/*  Converting JSON to JavaScript Object */  // You can convert JSON data to a JavaScript object using the built-in JSON.parse() function.

// json object
const jsonData = '{"name": "saurabh", "age": 26}';

// converting to JavaScript object
const obj = JSON.parse(jsonData);

// accessing the data
console.log(obj.name);  // saurabh


/*  Converting JavaScript Object to JSON */  // You can also convert JavaScript objects to JSON format using the JavaScript built-in JSON.stringify()

// JavaScript object
const jsonData1 = {"name":"saurabh","age":26};

// converting to JSON
const obj1 = JSON.stringify(jsonData1);

// accessing the data
console.log(obj1);    //  {"name":"saurabh","age":26}
 

