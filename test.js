const n=10
console.log(n);

function newFunction (name, age) {
    const result= name + age
    return result
}

console.log(newFunction("shaikot", 25));

const anonummasfunc=()=>{
    
}

function updateAgeByName(peopleArray, name, newAge) {
    // Search for the person by name
    const person = peopleArray.find(person => person.name === name);

    // If person is found, update their age
    if (person) {
        person.age = newAge;
        console.log("Updated array:");
        console.log(peopleArray);
    } else {
        console.log(`Person with name '${name}' not found.`);
    }
}
// Example usage:
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

// Update age of 'Bob' to 26
updateAgeByName(people, 'Bob', 26);