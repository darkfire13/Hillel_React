const user = {
  fname: "Dmytro",
  lname: "Yakovenko",
  age: 48,
  city: "Kharkiv",
  country: "Ukraine",
  getInfo() {
    return `${this.fname} ${this.lname} is ${this.age} years old and lives in ${this.city}, ${this.country}.`;
  }
};

// user.getInfo();
console.log(user.getInfo());

// const keys = Object.keys(user);
// const values = Object.values(user);

// console.log(keys); // ['fname', 'lname', 'age', 'city', 'country']
// console.log(values); // ['Dmytro', 'Yakovenko', 48, 'Kharkiv', 'Ukraine']

// console.log(user.hasOwnProperty('country')); //true

// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// const users = [
//   { id: 1, name: 'Анна', isActive: true },
//   { id: 2, name: 'Петро', isActive: false },
//   { id: 3, name: 'Ірина', isActive: true },
// ];

// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);