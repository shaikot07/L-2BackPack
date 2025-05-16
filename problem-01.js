// problem-01
const people = [
  { name: 'shaikot', age: 24, gender: 'male' },
  { name: 'momo', age: 23, gender: 'female' },
  { name: 'mim', age: 21, gender: 'female' },
  { name: 'doll', age: 30, gender: 'female' },
  { name: 'rifat', age: 24, gender: 'male' },
  { name: 'rafi', age: 28, gender: 'male' },
  { name: 'toma', age: 24, gender: 'female' }
]

const result = (people)=>{
    return people.filter(person => person.gender !== "female").map(person => person.name)
}

// console.log(result(people));

// problem 02

const books = [
    { title: "megh boleche jabo jabo", author: "Humayun Ahmed", year: 1997 },
    { title: "hacker", author: "kaji anoyar", year: 2000 },
    { title: "The Alchemist", author: "Paulo Coelho", year: 2021 },
    { title: "himu", author: "humayan ahmed", year: 2023 }
]

const bookTitles = (booksArray) => {
    return booksArray.map(book => book.title)
};

// console.log(bookTitles(books));

// problem 03\

const cars = [
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Mustang", year: 2020 },
    { make: "Chevrolet", model: "Camaro", year: 2022 },
    { make: "BMW", model: "X5", year: 2025 }
]

const sortCarsByYear = (carsArray) => {
    return carsArray.sort((a, b) => a.year - b.year)
};

// console.log(sortCarsByYear(cars))

// problem 04

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15]
function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0)
}

// console.log(sumEvenNumbers(numbers))

// problem 05

const number = [3, 7, 2, 9, 5, 10, 1]
function findMaxValue(arr) {
    return Math.max(...arr)
}


// console.log(findMaxValue(numbers)); 

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