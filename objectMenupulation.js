// mid level problem solving with objects in JavaScript


// 📦 CREATE & ACCESS
const user = {
  id: 1,
  name: "Jane",
  address: {
    city: "Seattle",
    zip: "98101"
  }
};
console.log(user.name);         // Dot notation
console.log(user['address']);   // Bracket notation

// ✏️ ADD / UPDATE / DELETE
user.age = 30;                  // Add
user.name = "Janet";            // Update
delete user.address.zip;        // Delete

// 🧱 DESTRUCTURING
const { name, address: { city } } = user;
console.log(name);              // "Janet"
console.log(city);              // "Seattle"

// 🌀 COMPUTED PROPERTIES
const key = "email";
const userData = { [key]: "jane@example.com" };
console.log(userData);          // { email: "jane@example.com" }

// 🔁 LOOPING WITH Object.entries()
const obj = { a: 1, b: 2 };
Object.entries(obj).forEach(([k, v]) => {
  console.log(`${k}: ${v}`);
});

// 🔄 TRANSFORM WITH Object.fromEntries()
const doubled = Object.fromEntries(
  Object.entries(obj).map(([k, v]) => [k, v * 2])
);
console.log(doubled);           // { a: 2, b: 4 }

// 🔧 OBJECT UTILITIES
console.log(Object.keys(obj));    // ['a', 'b']
console.log(Object.values(obj));  // [1, 2]
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]

// 🧩 MERGING OBJECTS
const base = { a: 1, b: 2 };
const update = { b: 3, c: 4 };
const merged = { ...base, ...update };
console.log(merged);             // { a: 1, b: 3, c: 4 }

// 🛡 OPTIONAL CHAINING & NULLISH COALESCING
const username = user.profile?.name ?? "Guest";
console.log(username);           // "Guest"

// 🔁 NESTED UPDATE
user.address.city = "Portland";

// 🔄 ARRAY → OBJECT MAP
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const userMap = Object.fromEntries(users.map(u => [u.id, u]));
console.log(userMap[2].name);   // "Bob"

// 🧊 FREEZE & SEAL
Object.freeze(user); // Can't change anything
Object.seal(user);   // Can update existing, can't add/delete


// problem 02

const product = {
  id: 101,
  title: "Wireless Headphones",
  price: 99.99,
  specs: {
    batteryLife: "20 hours",
    weight: "250g",
    dimensions: {
      width: "15cm",
      height: "18cm",
      depth: "5cm"
    }
  },
  manufacturer: {
    name: "AudioMax",
    location: {
      country: "USA",
      state: "California"
    }
  }
};


const {
  title: productTitle,
  price,
  specs: {
    batteryLife: battery,
    dimensions: { width, height }
  },
  manufacturer: {
    location: { country }
  }
} = product;

console.log(productTitle); // "Wireless Headphones"
console.log(price);        // 99.99
console.log(battery);      // "20 hours"
console.log(width);        // "15cm"
console.log(height);       // "18cm"
console.log(country); 